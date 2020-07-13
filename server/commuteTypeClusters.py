# Creating clusters for each commute type and zoom level.

import pandas as pd, numpy as np, matplotlib.pyplot as plt
from sklearn.cluster import DBSCAN
from geopy.distance import great_circle
from shapely.geometry import MultiPoint
import csv

# 11 Layers of zoom, 11 different cluster typs
zoom_levels = {
    5:2000,
    6:1000,
    7:500,
    8:250,
    9:125,
    10:62,
    11:31,
    12:16,
    13:8,
    14:4,
    15:2,
    16:1
}


kms_per_radian = 6371.0088
epsilon = 10 / kms_per_radian


def write2CSV(zoom_level, points):
    with open('./centroids/{}.csv'.format(zoom_level),'w',newline='') as out:
        csv_out = csv.writer(out)
        csv_out.writerow(['lat','lon'])
        for row in points:
            csv_out.writerow(row)

def get_centermost_point(cluster):
    # if not MultiPoint(cluster).centroid:
        # return tuple([0,0])
    # print("MultiPoint(cluster).centroid: ", MultiPoint(cluster).centroid)
    centroid = (MultiPoint(cluster).centroid.x, MultiPoint(cluster).centroid.y)
    centermost_point = min(cluster, key=lambda point: great_circle(point, centroid).m)
    # print("centermost_point: ", centermost_point)
    return tuple(centermost_point)

def dbscan(zoom_level, min_samples, commute_purpose, commute_type):
    print("processing zoom_level: {}".format(zoom_level))
    db = DBSCAN(eps=epsilon, min_samples=min_samples, algorithm='ball_tree', metric='haversine').fit(np.radians(coords))
    cluster_labels = db.labels_
    # print(cluster_labels, len(cluster_labels))
    
    cluster_column = pd.Series(cluster_labels)
    cluster_column = cluster_column.value_counts(sort=False)
    print("cluster_column: ", cluster_column)
    # print(cluster_column[0])
    # print(cluster_column[1])
    
    num_clusters = len(set(cluster_labels)) - 1 # Last one is empty for some reason, so skip it.
    clusters = pd.Series([coords[cluster_labels == n] for n in range(num_clusters)])
    print('Number of clusters: {}'.format(num_clusters))
    if num_clusters > 0:
        
        centermost_points = clusters.map(get_centermost_point)
        print('centermost_points: ', len(centermost_points))

        lats, lons = zip(*centermost_points)
        rep_points = pd.DataFrame({'lon':lons, 'lat':lats})

        rs = rep_points.apply(lambda row: df[(df['departure_LATITUDE']==row['lat']) & (df['departure_LONGITUDE']==row['lon'])].iloc[0], axis=1)
        
        # Add value counts for cluster labels to dataframe
        rs['cluster_count'] = cluster_column
        rs.to_csv('./centroids/commuteData/{}/centroid-{}-{}.csv'.format(commute_purpose,commute_type,zoom_level),index=False)

for commutePurpose in ["education","work"]:
    for commuteType in ["bicycle","bus","ferry","home","other","own_vehicle","passenger","train","walk_or_jog"]:
        df = pd.read_csv('./commuteData/{}/{}.csv'.format(commutePurpose, commuteType))
        
        coords = df[['departure_LATITUDE', 'departure_LONGITUDE']].values
        for key in zoom_levels:
            min_samples = zoom_levels[key]
            dbscan(key, min_samples, commutePurpose, commuteType)



