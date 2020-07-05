# Try and get clusters from lat/lng

import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.cluster import KMeans
import seaborn as sns; sns.set()
import csv

df = pd.read_csv('./out/education.csv')

X = df.loc[:,['departure_LATITUDE', 'departure_LONGITUDE']]
print(X.head(10))
print(X.describe())
'''
K_clusters = range(1,10)
kmeans = [KMeans(n_clusters=i) for i in K_clusters]

Y_axis = df[['departure_LATITUDE']]
X_axis = df[['departure_LONGITUDE']]

score = [kmeans[i].fit(Y_axis).score(Y_axis) for i in range(len(kmeans))]

plt.plot(K_clusters, score)
plt.xlabel('Number of clusters')
plt.ylabel('Score')

plt.title('Elbow Curve')

plt.show()
'''

# 3 is the optimum for elbow curve
kmeans = KMeans(n_clusters=3, init='k-means++')
kmeans.fit(X[X.columns[1:3]])

X['cluster_label'] = kmeans.fit_predict(X[X.columns[1:3]])

centers = kmeans.cluster_centers_ # Coordinates of cluster centers

print(X.columns)
print(X.columns[1:3])
labels = kmeans.predict(X[X.columns[1:2]])


print(centers.shape)
print(centers.columns)
# print(centers[:,0], centers[:,1])
X.plot.scatter(x='departure_LATITUDE', y='departure_LONGITUDE', c=labels, s=50, cmap='viridis')
plt.scatter(centers[:,0], centers[:,1], c='black', s=200, alpha=0.5)
