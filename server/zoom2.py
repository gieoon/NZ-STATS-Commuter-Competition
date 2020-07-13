import pandas as pd

# Load all zoom files
# with open('./zoneData/5.csv') as zoom_5_file:
#     zoom_5_dict = zoom_5_file.read()

# Load all data into dict

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

data = {}

for commute_purpose in ["education","work"]:
    for mode in MODES_OF_TRANSPORT:
        for zoom_level in range(5,17):
            df = pd.read_csv('./zoomData/{}/{}_{}_{}.csv'.format(commute_purpose, commute_purpose, mode, zoom_level))
            data["{}_{}_{}".format(commute_purpose,mode,zoom_level)] = df

def handleZoom(left, top, right, bottom, zoom, data_type, commute_types):
    print(left,top,right,bottom, zoom, data_type, commute_types)
    
    # Dataset created only for zoom up to 16
    zoom = min(int(zoom), 16)

    res = {}
    for commute_type in commute_types:
        commute_type = commuteType2Key(commute_type)
        df = data["{}_{}_{}".format(data_type, commute_type, zoom)]
        df = getVisibleData(df, left, top, right, bottom)
        res["{}".format(commute_type)] = df.to_csv(index=False)

    print("after getting visible data size: ", df.describe())
    # return df.to_csv(index=False)
    return res

def commuteType2Key(commute_type):
    if commute_type == "Stay home":
        return "home"
    elif commute_type == "Drive own vehicle":
        return "own_vehicle"
    elif commute_type == "Passenger in vehicle":
        return "passenger"
    elif commute_type == "Train":
        return "train"
    elif commute_type == "Bicycle":
        return "bicycle"
    elif commute_type == "Walk or jog":
        return "walk_or_jog"
    elif commute_type == "Bus":
        return "bus"
    elif commute_type == "Ferry":
        return "ferry"
    elif commute_type == "Ferry":
        return "other"
    else:
        return commute_type

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

    