# Understand the data

import pandas as pd
import matplotlib.pyplot as plt
import descartes
import geopandas as gpd
from shapely.geometry import Point, Polygon

import shapefile

# %matplotlib inline
'exec(%matplotlib inline)'

DIR = "./CSV/statsnz2018-census-main-means-of-travel-to-work-by-statistical-area-CSV/2018-census-main-means-of-travel-to-work-by-statistical-area.csv"
DIR2 = "./CSV/statsnzstatistical-area-2-2018-centroid-inside-CSV/statistical-area-2-2018-centroid-inside.csv"
DIR3 = "CSV/22430 statsnz2018-census-main-means-of-travel-to-education-by-statistical-CSV/2018-census-main-means-of-travel-to-education-by-statistical.csv"

# No truncation
# pd.set_option('display.max_colwidth', -1)

df1 = pd.read_csv(DIR)
# print(df1.head(10))
# print(df1.tail(10))
# print(df1.describe()) # count = 50870

# Join the two datasets on first column
df2 = pd.read_csv(DIR2)
# print(df2.describe())

df3 = pd.read_csv(DIR3)


df1.columns.values[0] = '_code'
df2.columns.values[1] = '_code'
df3.columns.values[0] = '_code'
# print(df1.columns)
# print(df2.columns)
# print(df3.columns)
# Pandas merge command to join on column
# First, rename columns to have something to join on

dfM = pd.merge(df1, df2, on='_code', how='outer')
dfM = pd.merge(dfM, df3, on='_code', how='outer')

print(dfM.describe()) # count = 50970
print(dfM.columns)

# street_map = gpd.read_file('./GIS/SHAPEFILE statsnz2018-census-main-means-of-travel-to-work-by-statistical-area-DBF/2018-census-main-means-of-travel-to-work-by-statistical-area.dbf')
# print(street_map)

# fig, ax = plt.subplots( figsize = (15, 15))
# street_map.plot(ax = ax)
# plt.show(block=True)
# plt.show()


# capitals = gpd.read_file(gpd.datasets.get_path("naturalearth_cities"))
# world = gpd.read_file(gpd.datasets.get_path("naturalearth_lowres"))
# south_america = world[world["continent"] == "South America"]

# # Create a custom polygon
# polygon = Polygon([(0, 0), (0, 90), (180, 90), (180, 0), (0, 0)])
# poly_gdf = gpd.GeoDataFrame([1], geometry=[polygon], crs=world.crs)

# fig, (ax1, ax2) = plt.subplots(2, 1, figsize=(12, 8))
# world.plot(ax=ax1)
# poly_gdf.boundary.plot(ax=ax1, color="red")
# south_america.boundary.plot(ax=ax2, color="green")
# capitals.plot(ax=ax2, color="purple")
# ax1.set_title("All Unclipped World Data", fontsize=20)
# ax2.set_title("All Unclipped Capital Data", fontsize=20)
# ax1.set_axis_off()
# ax2.set_axis_off()
# plt.show()



# https://towardsdatascience.com/geopandas-101-plot-any-data-with-a-latitude-and-longitude-on-a-map-98e01944b972
crs = {'init': 'epsg:4326'}


# Create Points
# geometry = [Point(xy) for xy in zip( dfM["LONGITUDE"], dfM["LATITUDE"])]
# print(geometry[:3])

# Read shapefile
sf = shapefile.Reader("GIS/SHAPEFILE statsnz2018-census-main-means-of-travel-to-work-by-statistical-area-DBF/2018-census-main-means-of-travel-to-work-by-statistical-area.dbf")
print(sf.fields)
print(sf.record(5))
print(len(sf.records()))

