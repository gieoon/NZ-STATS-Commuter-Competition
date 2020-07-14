
import csv
import pandas as pd

MODES_OF_TRANSPORT = [
  "home", 
]

CUTOFFS = {
    "work": [550,400,300,200,150,125,100,75,60,50,30,0],
    "education": [90,80,70,65,60,55,50,45,30,20,10,0]
}


def createData(commutePurpose, commuteType):
    print('-----------')
    in_df = pd.read_csv('./commuteData/{}/{}.csv'.format(commutePurpose,commuteType))
    for i in range(5,17):
        out_df = in_df.loc[in_df['COUNT'] >= CUTOFFS[commutePurpose][i-5]]
        print(i-5, len(out_df))
        out_df.to_csv('./zoomData/{}/{}_{}_{}.csv'.format(commutePurpose,commutePurpose, commuteType,i), index=False)

def createZoomData(dataType,commuteType):
    commute_df = pd.read_csv('./commuteData/{}/{}.csv'.format(dataType,commuteType))
    # We want maximum approximately 3000 points of data each time
    zoom_5_df = commute_df.loc[commute_df['COUNT'] >= 500]
    print("zoom 5: ", len(zoom_5_df))

    zoom_6_df = commute_df.loc[commute_df['COUNT'] >= 400]
    print("zoom 6: ", len(zoom_6_df))

    zoom_7_df = commute_df.loc[commute_df['COUNT'] >= 200]
    print("zoom_7: ", len(zoom_7_df))

    zoom_8_df = commute_df.loc[commute_df['COUNT'] >= 150]
    print("zoom_8: ", len(zoom_8_df))

    zoom_9_df = commute_df.loc[commute_df['COUNT'] >= 100]
    print("zoom_9: ", len(zoom_9_df))

    zoom_10_df = commute_df.loc[commute_df['COUNT'] >= 75]
    print("zoom_10: ", len(zoom_10_df))

    zoom_11_df = commute_df.loc[commute_df['COUNT'] >= 50]
    print("zoom_11: ", len(zoom_11_df))

    zoom_12_df = commute_df.loc[commute_df['COUNT'] >= 35]
    print("zoom_12: ", len(zoom_12_df))

    zoom_13_df = commute_df.loc[commute_df['COUNT'] >= 20]
    print("zoom_13: ", len(zoom_13_df))

    zoom_14_df = commute_df.loc[commute_df['COUNT'] >= 10]
    print("zoom_14: ", len(zoom_14_df))

    zoom_15_df = commute_df.loc[commute_df['COUNT'] >= 2]
    print("zoom_15: ", len(zoom_15_df))

    zoom_16_df = commute_df
    print("zoom_16: ", len(zoom_16_df))

    print('---------------------------')


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

for mode in MODES_OF_TRANSPORT:
    createData("education", mode)
    createData("work", mode)