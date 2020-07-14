
import csv
import pandas as pd

MODES_OF_TRANSPORT = [
  "own_vehicle",
  "passenger",
  "train",
  "bicycle",
  "walk_or_jog",
  "bus",
  "ferry",
  "other"
]

# Ignore this and use this as a compression mechanism
COUNT_CUTOFFS = {
  "work":       [0,0,0,0,0,30,30,30,10,5,2,0],
  "education":  [0,0,0,0,0,30,30,30,10,5,2,0]
}

HAVERSINE_DISTANCE_CUTOFFS = {
  "work": [100, 65, 45, 32, 25, 20, 15, 10, 7, 5, 3, 0],
  "education": [100, 65, 45, 32, 25, 20, 15, 10, 7, 5, 3, 0]
}


def createData(commutePurpose, commuteType):
    print('--------------------------------------')
    print(commutePurpose.capitalize())
    print('--------------------------------------')
    in_df = pd.read_csv('./commuteData/{}/{}.csv'.format(commutePurpose,commuteType))
    for i in range(5,17):
        out_df = in_df.loc[in_df['HAVERSINE_DISTANCE'] >= HAVERSINE_DISTANCE_CUTOFFS[commutePurpose][i-5]]
        # out_df = in_df.loc[(in_df['COUNT'] >= COUNT_CUTOFFS[commutePurpose][i-5]) & (in_df['HAVERSINE_DISTANCE'] >= HAVERSINE_DISTANCE_CUTOFFS[commutePurpose][i-5])]
        print(i, len(out_df))
        out_df.to_csv('./zoomData/{}/{}_{}_{}.csv'.format(commutePurpose,commutePurpose, commuteType,i), index=False)


'''
# TODO, Instead of using purely haversine distance, use the kmeans to create clsters of commute paths?
def createZoomData(dataType,commuteType):
    commute_df = pd.read_csv('./commuteData/{}/{}.csv'.format(dataType,commuteType))
    # We want maximum approximately 3000 points of data each time
    zoom_5_df = commute_df.loc[commute_df['HAVERSINE_DISTANCE'] >= 100] # 100 = 85 rows
    print("zoom 5: ", zoom_5_df.describe())

    zoom_6_df = commute_df.loc[commute_df['HAVERSINE_DISTANCE'] >= 65]
    print("zoom 6: ", zoom_6_df.describe())

    zoom_7_df = commute_df.loc[commute_df['HAVERSINE_DISTANCE'] >= 45]
    print("zoom_7: ", zoom_7_df.describe())

    zoom_8_df = commute_df.loc[commute_df['HAVERSINE_DISTANCE'] >= 32]
    print("zoom_8: ", zoom_8_df.describe())

    zoom_9_df = commute_df.loc[commute_df['HAVERSINE_DISTANCE'] >= 25]
    print("zoom_9: ", zoom_9_df.describe())

    zoom_10_df = commute_df.loc[commute_df['HAVERSINE_DISTANCE'] >= 20]
    print("zoom_10: ", zoom_10_df.describe())

    zoom_11_df = commute_df.loc[commute_df['HAVERSINE_DISTANCE'] >= 15]
    print("zoom_11: ", zoom_11_df.describe())

    zoom_12_df = commute_df.loc[commute_df['HAVERSINE_DISTANCE'] >= 10]
    print("zoom_12: ", zoom_12_df.describe())

    zoom_13_df = commute_df.loc[commute_df['HAVERSINE_DISTANCE'] >= 7]
    print("zoom_13: ", zoom_13_df.describe())

    zoom_14_df = commute_df.loc[commute_df['HAVERSINE_DISTANCE'] >= 5]
    print("zoom_14: ", zoom_14_df.describe())

    zoom_15_df = commute_df.loc[commute_df['HAVERSINE_DISTANCE'] >= 3]
    print("zoom_15: ", zoom_15_df.describe())

    zoom_16_df = commute_df
    print("zoom_16: ", zoom_16_df.describe())


    zoom_5_df.to_csv('./zoomData/{}/{}_{}_5.csv'.format(dataType,dataType, commuteType), index=False)
    zoom_6_df.to_csv('./zoomData/{}/{}_{}_6.csv'.format(dataType,dataType, commuteType), index=False)
    zoom_7_df.to_csv('./zoomData/{}/{}_{}_7.csv'.format(dataType,dataType,commuteType), index=False)
    zoom_8_df.to_csv('./zoomData/{}/{}_{}_8.csv'.format(dataType,dataType,commuteType), index=False)
    zoom_9_df.to_csv('./zoomData/{}/{}_{}_9.csv'.format(dataType,dataType,commuteType), index=False)
    zoom_10_df.to_csv('./zoomData/{}/{}_{}_10.csv'.format(dataType,dataType,commuteType), index=False)
    zoom_11_df.to_csv('./zoomData/{}/{}_{}_11.csv'.format(dataType,dataType,commuteType), index=False)
    zoom_12_df.to_csv('./zoomData/{}/{}_{}_12.csv'.format(dataType,dataType,commuteType), index=False)
    zoom_13_df.to_csv('./zoomData/{}/{}_{}_13.csv'.format(dataType,dataType,commuteType), index=False)
    zoom_14_df.to_csv('./zoomData/{}/{}_{}_14.csv'.format(dataType,dataType,commuteType), index=False)
    zoom_15_df.to_csv('./zoomData/{}/{}_{}_15.csv'.format(dataType,dataType,commuteType), index=False)
    zoom_16_df.to_csv('./zoomData/{}/{}_{}_16.csv'.format(dataType,dataType,commuteType), index=False)
'''

for mode in MODES_OF_TRANSPORT:
    print("processing: ", mode)
    createData("education", mode)
    createData("work", mode)
