import pandas as pd

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

def getAllCentroidData():
    return centroids