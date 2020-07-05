import pandas as pd, numpy as np, matplotlib.pyplot as plt
from sklearn.cluster import DBSCAN
from geopy.distance import great_circle
from shapely.geometry import MultiPoint
import csv

# 11 Layers of zoom, 11 different cluster typs
zoom_levels = {
    5:1000,
    6:500,
    7:250,
    8:125,
    9:62,
    10:31,
    11:16,
    12:8,
    13:4,
    14:2,
    15:1
}

df = pd.read_csv('./out/work.csv') # /work.csv /education.csv
# coords = df.as_matrix(columns=['departure_LATITUDE', 'departure_LONGITUDE'])
coords = df[['departure_LATITUDE', 'departure_LONGITUDE']].values
# print(coords)
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

def dbscan(zoom_level, min_samples):
    print("scanning on zoom_level: {}".format(zoom_level))
    db = DBSCAN(eps=epsilon, min_samples=min_samples, algorithm='ball_tree', metric='haversine').fit(np.radians(coords))
    cluster_labels = db.labels_
    # print(cluster_labels, len(cluster_labels))
    
    cluster_column = pd.Series(cluster_labels)
    cluster_column = cluster_column.value_counts(sort=False)
    print(cluster_column)
    print(cluster_column[0])
    print(cluster_column[1])
    
    num_clusters = len(set(cluster_labels)) - 1 # Last one is empty for some reason, so skip it.
    clusters = pd.Series([coords[cluster_labels == n] for n in range(num_clusters)])
    print('Number of clusters: {}'.format(num_clusters))

    centermost_points = clusters.map(get_centermost_point)
    
    # write2CSV(zoom_level, centermost_points)

    lats, lons = zip(*centermost_points)
    rep_points = pd.DataFrame({'lon':lons, 'lat':lats})

    rs = rep_points.apply(lambda row: df[(df['departure_LATITUDE']==row['lat']) & (df['departure_LONGITUDE']==row['lon'])].iloc[0], axis=1)
    # Add value counts for cluster labels to dataframe
    rs['cluster_count'] = cluster_column#.apply(lambda row: cluster_column[row.name])
    # print(rs)
    # print(rs.columns)
    rs.to_csv('./centroids/location-{}.csv'.format(zoom_level),index=False)
    '''
    fig, ax = plt.subplots(figsize=[10, 6])
    df_scatter = ax.scatter(df['departure_LONGITUDE'], df['departure_LATITUDE'], c='k', alpha=0.9, s=3)
    rs_scatter = ax.scatter(rs['departure_LONGITUDE'], rs['departure_LATITUDE'], c='#99cc99', edgecolor='None', alpha=0.7, s=120)
    plt.xlim(167, 179)
    plt.ylim(-48,-34)
    ax.set_title('Full data set vs DBSCAN reduced set')
    ax.set_xlabel('Longitude')
    ax.set_ylabel('Latitude')
    ax.legend([rs_scatter, df_scatter], ['Full set', 'Reduced set'], loc='upper right')
    # ax.legend([rs_scatter], ['Full set', 'Reduced set'], loc='upper right')
    plt.show()
    '''

for key in zoom_levels:
    min_samples = zoom_levels[key]
    dbscan(key, min_samples)