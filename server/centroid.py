import pandas as pd
import os.path

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

centroidData = {}

# for commute_purpose in ["education","work"]:
for commute_purpose in ["work"]:
    for mode in MODES_OF_TRANSPORT:
        for zoom_level in range(5,17):
            # Some centroid data has not been created, so ignore these.
            if os.path.isfile('./centroids/commuteData/{}/centroid-{}-{}.csv'.format(commute_purpose, mode, zoom_level)):
                csv = pd.read_csv('./centroids/commuteData/{}/centroid-{}-{}.csv'.format(commute_purpose, mode, zoom_level)).to_csv(index=False)
            else:
                csv = []
            centroidData["{}_{}_{}".format(commute_purpose,mode,zoom_level)] = csv

# centroidData = centroidData.to_json()
# print("centroidData['education_bicycle_15']: ", centroidData["education_bicycle_15"])
def getCentroidData(commute_purpose, commute_method, zoom_level):
    return centroidData
    # return centroidData["{}_{}_{}".format(commute_purpose,commute_method,zoom_level)]


'''
centroids_5 = pd.read_csv('./centroids/location-5.csv').to_csv(index=False)
centroids_6 = pd.read_csv('./centroids/location-6.csv').to_csv(index=False)
centroids_7 = pd.read_csv('./centroids/location-7.csv').to_csv(index=False)
centroids_8 = pd.read_csv('./centroids/location-8.csv').to_csv(index=False)
centroids_9 = pd.read_csv('./centroids/location-9.csv').to_csv(index=False)
centroids_10 = pd.read_csv('./centroids/location-10.csv').to_csv(index=False)
centroids_11 = pd.read_csv('./centroids/location-11.csv').to_csv(index=False)
centroids_12 = pd.read_csv('./centroids/location-12.csv').to_csv(index=False)
centroids_13 = pd.read_csv('./centroids/location-13.csv').to_csv(index=False)
centroids_14 = pd.read_csv('./centroids/location-14.csv').to_csv(index=False)
centroids_15 = pd.read_csv('./centroids/location-15.csv').to_csv(index=False)
centroids = {
    5: centroids_5,
    6: centroids_6,
    7: centroids_7,
    8: centroids_8,
    9: centroids_9,
    10: centroids_10,
    11: centroids_11,
    12: centroids_12,
    13: centroids_13,
    14: centroids_14,
    15: centroids_15,
}
'''
centroids_15 = pd.read_csv('./centroids/location-15.csv').to_csv(index=False)
# print(centroids_15)
def getAllCentroidDestinations():
    return centroids_15


