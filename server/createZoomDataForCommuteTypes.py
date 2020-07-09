
import csv
import pandas as pd

MODES_OF_TRANSPORT = [
  "home", 
  "own_vehicle",
  "passenger",
  "train",
  "bicycle",
  "walk_or_jog",
  "bus",
  "ferry",
  "other"
]
# TODO, Instead of using purely haversine distance, use the kmeans to create clsters of commute paths?
def createZoomData(dataType,commuteType):
    commute_df = pd.read_csv('./commuteData/{}/{}.csv'.format(dataType,commuteType))
    # We want maximum approximately 3000 points of data each time
    zoom_5_df = commute_df.loc[commute_df['HAVERSINE_DISTANCE'] >= 100] # 100 = 85 rows
    print("zoom 5: ", zoom_5_df.describe())

    zoom_6_df = commute_df.loc[commute_df['HAVERSINE_DISTANCE'] >= 50]
    print("zoom 6: ", zoom_6_df.describe())

    zoom_7_df = commute_df.loc[commute_df['HAVERSINE_DISTANCE'] >= 45]
    print("zoom_7: ", zoom_7_df.describe())

    zoom_8_df = commute_df.loc[commute_df['HAVERSINE_DISTANCE'] >= 25]
    print("zoom_8: ", zoom_8_df.describe())

    zoom_9_df = commute_df.loc[commute_df['HAVERSINE_DISTANCE'] >= 15]
    print("zoom_9: ", zoom_9_df.describe())

    zoom_10_df = commute_df.loc[commute_df['HAVERSINE_DISTANCE'] >= 10]
    print("zoom_10: ", zoom_10_df.describe())

    zoom_11_df = commute_df.loc[commute_df['HAVERSINE_DISTANCE'] >= 5]
    print("zoom_11: ", zoom_11_df.describe())

    zoom_12_df = commute_df.loc[commute_df['HAVERSINE_DISTANCE'] >= 3]
    print("zoom_12: ", zoom_12_df.describe())

    zoom_13_df = commute_df
    print("zoom_13: ", zoom_13_df.describe())

    zoom_5_df.to_csv('./zoomData/{}/{}_{}_5.csv'.format(dataType,dataType, commuteType), index=False)
    zoom_6_df.to_csv('./zoomData/{}/{}_{}_6.csv'.format(dataType,dataType, commuteType), index=False)
    zoom_7_df.to_csv('./zoomData/{}/{}_{}_7.csv'.format(dataType,dataType,commuteType), index=False)
    zoom_8_df.to_csv('./zoomData/{}/{}_{}_8.csv'.format(dataType,dataType,commuteType), index=False)
    zoom_9_df.to_csv('./zoomData/{}/{}_{}_9.csv'.format(dataType,dataType,commuteType), index=False)
    zoom_10_df.to_csv('./zoomData/{}/{}_{}_10.csv'.format(dataType,dataType,commuteType), index=False)
    zoom_11_df.to_csv('./zoomData/{}/{}_{}_11.csv'.format(dataType,dataType,commuteType), index=False)
    zoom_12_df.to_csv('./zoomData/{}/{}_{}_12.csv'.format(dataType,dataType,commuteType), index=False)
    zoom_13_df.to_csv('./zoomData/{}/{}_{}_13.csv'.format(dataType,dataType,commuteType), index=False)

for mode in MODES_OF_TRANSPORT:
    print("processing: ", mode)
    createZoomData("education", mode)
    createZoomData("work", mode)