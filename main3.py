# Understand the data
from flask import Flask
from flask_cors import CORS
from flask import make_response
import pandas as pd
import matplotlib.pyplot as plt
import descartes
import geopandas as gpd
from shapely.geometry import Point, Polygon
from math import radians, cos, sin, asin, sqrt
import numpy as np
import shapefile

# %matplotlib inline
'exec(%matplotlib inline)'

 # count = 50870
DIR = "./CSV/statsnz2018-census-main-means-of-travel-to-work-by-statistical-area-CSV/2018-census-main-means-of-travel-to-work-by-statistical-area.csv"
DIR2 = "./CSV/statsnzstatistical-area-2-2018-centroid-inside-CSV/statistical-area-2-2018-centroid-inside.csv"
DIR3 = "CSV/22430 statsnz2018-census-main-means-of-travel-to-education-by-statistical-CSV/2018-census-main-means-of-travel-to-education-by-statistical.csv"

# No truncation
# pd.set_option('display.max_colwidth', -1)
work_df = pd.read_csv(DIR)
# print(df1.describe())

# Join the two datasets on first column
departure_centroid_df = pd.read_csv(DIR2)
departure_centroid_df.columns.values[1] = 'code'
departure_centroid_df.columns = 'departure_' + departure_centroid_df.columns.values
print(departure_centroid_df.columns)
destination_centroid_df = pd.read_csv(DIR2)
destination_centroid_df.columns.values[1] = 'code'
destination_centroid_df.columns = 'destination_' + destination_centroid_df.columns.values
# https://stackoverflow.com/questions/26716616/convert-a-pandas-dataframe-to-a-dictionary
# centroid_df.set_index("SA22018_V1_00", drop=True, inplace=True)
# centroid_dict = centroid_df.to_dict(orient = 'index')

'''
# Retrieves data from centroid object based on code
def getDataFromCode(prepend, code):
    return {
        prepend + "name": centroid_dict[code]['SA22018_V1_NAME'],
        prepend + "landArea": centroid_dict[code]['LAND_AREA_SQ_KM'],
        prepend + "latitude": centroid_dict[code]['LATITUDE'],
        prepend + 'longitude': centroid_dict[code]['LONGITUDE']
    }
'''

def haversine(lon1, lat1, lon2, lat2):
    '''
    Calculate the great circle distance between two points on the Earth (specified in decimal degree)
    This is the shortest distance over the Earth's surface (as the crow flies)
    '''
    lon1, lat1, lon2, lat2 = map(radians, [lon1, lat1, lon2, lat2])

    #haversine formula
    delta_lon = lon2 - lon1
    delta_lat = lat2 - lat1
    a = sin(delta_lat / 2) ** 2 + cos(lat1) * cos(lat2) * sin(delta_lon / 2) ** 2
    c = 2 * asin(sqrt(a))
    r = 6371 # Radius of Earth in kilometres.
    return c * r

# To perform on each column of a dataframe using numpy
def np_haversine(lon1, lat1, lon2, lat2):
    lon1 = np.radians(lon1)
    lat1 = np.radians(lat1)
    lon2 = np.radians(lon2)
    lat2 = np.radians(lat2)

    delta_lon = np.subtract(lon2 - lon1)
    delta_lat = np.subtract(lat2 - lat1)
    a = sin(delta_lat / 2) ** 2 + cos(lat1) * cos(lat2) * sin(delta_lon / 2) ** 2
    c = 2 * asin(sqrt(a))
    r = 6371 # Radius of Earth in kilometres.
    return c * r

# Calculate discrepancy distance between latitude and longitude
def getDistanceBetweenLatLon(lon1, lat1, lon2, lat2):
    return haversine(lon1, lat1, lon2, lat2)



# print(getDataFromCode('d_', 100900))

education_df = pd.read_csv(DIR3)

# print(work_df.columns)
work_df.columns.values[0] = 'departure_code'
work_df.columns.values[4] = 'destination_code'

# inner VS outer?
work_df_combined = pd.merge(work_df, departure_centroid_df, on='departure_code', how='inner')
work_df_combined = pd.merge(work_df_combined, destination_centroid_df, on='destination_code', how='inner')

# print(education_df.columns)
education_df.columns.values[0] = 'departure_code'
education_df.columns.values[4] = 'destination_code'

education_df_combined = pd.merge(education_df, departure_centroid_df, on='departure_code', how='inner')
education_df_combined = pd.merge(education_df_combined, destination_centroid_df, on='destination_code', how='inner')
# Combining departure & destination types into one dataframe
# education_df_combined = ([work_df.set_index('departure_code').join([education_df.set_index('SA22018_V1_00').add_prefix(name) for name, df in zip(['departure', 'destination'], )])])

# Add LATLON difference in as a column
# education_df_combined['HAVERSINE'] = haversine(education_df_combined['departure_LONGITUDE'], education_df_combined['departure_LATITUDE'], education_df_combined['destination_LONGITUDE'], education_df_combined['destination_LATITUDE'])
# education_df_combined['HAVERSINE'] = education_df_combined.apply(np_haversine(education_df_combined['departure_LONGITUDE'], education_df_combined['departure_LATITUDE'], education_df_combined['destination_LONGITUDE'], education_df_combined['destination_LATITUDE']),axis=1)
work_df_combined['HAVERSINE_DISTANCE'] = work_df_combined.apply(lambda x: haversine(x['departure_LONGITUDE'], x['departure_LATITUDE'], x['destination_LONGITUDE'], x['destination_LATITUDE']), axis = 1)
education_df_combined['HAVERSINE_DISTANCE'] = education_df_combined.apply(lambda x: haversine(x['departure_LONGITUDE'], x['departure_LATITUDE'], x['destination_LONGITUDE'], x['destination_LATITUDE']), axis = 1)
# print(work_df.describe())
# print(centroid_df.describe())
print(work_df_combined.columns)
print(work_df_combined.describe())
print(education_df_combined.columns)
print(education_df_combined.tail(5))
print(education_df_combined.describe())

# Pandas merge command to join on column
# First, rename columns to have something to join on

# dfM = pd.merge(work_df, centroid_df, on='_code', how='outer')


# Extract columns we care about for now
# education_df = education_df[['_code','SA2_name_usual_residence_address','LATITUDE','LONGITUDE']]
# dfM = pd.merge(dfM, df3, on='_code', how='outer')
work_csv_out = work_df_combined.to_csv()
education_csv_out = education_df_combined.to_csv()

# print(dfM.describe()) # count = 50970
# print(dfM.columns)

app = Flask(__name__)
# cors = CORS(app, resources={"/foo": {"origins": "http://localhost:port"}})

@app.route('/')
# @cross_origin(origin='localhost',headers=['Content-Type','Authorization'])
def hello():
    return 'Hello World'

@app.route('/work_csv')
# @cross_origin(origin='localhost',headers=['Content-Type','Authorization'])
def work_csv():
    # Convert to CSV and export
    response = make_response(work_csv_out)
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

@app.route('/education_csv')
def education_csv():
    response = make_response(education_csv_out)
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

if __name__ == '__main__' :
    app.run(debug=False, host='127.0.0.1')