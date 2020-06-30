import pandas as pd

# Load all zoom files
# with open('./zoneData/5.csv') as zoom_5_file:
#     zoom_5_dict = zoom_5_file.read()

e_zoom_5_df = pd.read_csv('./zoomData/education_5.csv')
e_zoom_6_df = pd.read_csv('./zoomData/education_6.csv')
e_zoom_7_df = pd.read_csv('./zoomData/education_7.csv')
e_zoom_8_df = pd.read_csv('./zoomData/education_8.csv')
e_zoom_9_df = pd.read_csv('./zoomData/education_9.csv')
e_zoom_10_df = pd.read_csv('./zoomData/education_10.csv')
e_zoom_11_df = pd.read_csv('./zoomData/education_11.csv')
e_zoom_12_df = pd.read_csv('./zoomData/education_12.csv')
e_zoom_13_df = pd.read_csv('./zoomData/education_13.csv')

w_zoom_5_df = pd.read_csv('./zoomData/work_5.csv')
w_zoom_6_df = pd.read_csv('./zoomData/work_6.csv')
w_zoom_7_df = pd.read_csv('./zoomData/work_7.csv')
w_zoom_8_df = pd.read_csv('./zoomData/work_8.csv')
w_zoom_9_df = pd.read_csv('./zoomData/work_9.csv')
w_zoom_10_df = pd.read_csv('./zoomData/work_10.csv')
w_zoom_11_df = pd.read_csv('./zoomData/work_11.csv')
w_zoom_12_df = pd.read_csv('./zoomData/work_12.csv')
w_zoom_13_df = pd.read_csv('./zoomData/work_13.csv')

e_zoom_data = dict([
    (5,e_zoom_5_df),
    (6,e_zoom_6_df),
    (7,e_zoom_7_df),
    (8,e_zoom_8_df),
    (9,e_zoom_9_df),
    (10,e_zoom_10_df),
    (11,e_zoom_11_df),
    (12,e_zoom_12_df),
    (13,e_zoom_13_df)
])

w_zoom_data = dict([
    (5,w_zoom_5_df),
    (6,w_zoom_6_df),
    (7,w_zoom_7_df),
    (8,w_zoom_8_df),
    (9,w_zoom_9_df),
    (10,w_zoom_10_df),
    (11,w_zoom_11_df),
    (12,w_zoom_12_df),
    (13,w_zoom_13_df)
])

def handleZoom(left, top, right, bottom, zoom, data_type):
    print(left,top,right,bottom, zoom, data_type)
    # delta_x = float(right) - float(left)
    # delta_y = float(top) - float(bottom)
    # Get zoom data

    if data_type == "TOTAL":
        # Concatenate both together and return back
        df = e_zoom_data[float(zoom)].join(w_zoom_data[float(zoom)])
    elif data_type == "WORK":
        df = w_zoom_data[float(zoom)]
    else:
        df = e_zoom_data[float(zoom)]
        
    print("original zoom df size: ", df.describe())
    df = getVisibleData(df, left, top, right, bottom)
    print("after getting visible data size: ", df.describe())
    return df.to_csv(index=False)

def getVisibleData(df, left, top, right, bottom):
    # Smaller than top, larger than bottom, since these are both negative
    # top/bottom = latitude comparison
    # left/right = longitude comparison
    # Add 2 to each to debug
    return df.loc[
        (
            (df['departure_LATITUDE'] <= float(top)) & 
            (df['departure_LATITUDE'] >= float(bottom)) & 
            (df['departure_LONGITUDE'] >= float(left)) &
            (df['departure_LONGITUDE'] <= float(right))
        )
        | 
        (
            (df['destination_LATITUDE'] <= float(top)) & 
            (df['destination_LATITUDE'] >= float(bottom)) & 
            (df['destination_LONGITUDE'] >= float(left)) &
            (df['destination_LONGITUDE'] <= float(right))
        )
    ]




'''
with open('./zoneData/6.csv') as zoom_6_file:
    zoom_6_dict = zoom_6_file.read()

with open('./zoneData/7.csv') as zoom_7_file:
    zoom_7_dict = zoom_7_file.read()

with open('./zoneData/8.csv') as zoom_8_file:
    zoom_8_dict = zoom_8_file.read()

with open('./zoneData/9.csv') as zoom_9_file:
    zoom_9_dict = zoom_9_file.read()

with open('./zoneData/10.csv') as zoom_10_file:
    zoom_10_dict = zoom_10_file.read()

with open('./zoneData/11.csv') as zoom_11_file:
    zoom_11_dict = zoom_11_file.read()

with open('./zoneData/12.csv') as zoom_12_file:
    zoom_12_dict = zoom_12_file.read()

with open('./zoneData/13.csv') as zoom_13_file:
    zoom_13_dict = zoom_13_file.read()
'''
