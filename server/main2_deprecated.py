# Understand the data

import pandas as pd
import matplotlib.pyplot as plt
import descartes
import geopandas as gpd
from shapely.geometry import Point, Polygon

import shapefile

# %matplotlib inline
'exec(%matplotlib inline)'

DIR = "./CSV/statsnz2018-census-main-means-of-travel-to-work-by-statistical-area-CSV/2018-census-main-means-of-travel-to-work-by-statistical-area.csv"

DIR2 = "./CSV/statsnzstatistical-area-2-2018-centroid-inside-CSV/statistical-area-2-2018-centroid-inside.csv"

# No truncation
pd.set_option('display.max_colwidth', -1)

df1 = pd.read_csv(DIR)
# print(df1.head(10))

# print(df1.tail(10))
# print(df1.describe()) # count = 50870

# Join the two datasets on first column
df2 = pd.read_csv(DIR2)
# print(df2.describe())


df1.columns.values[0] = '_code'
df2.columns.values[1] = '_code'
print(df1.columns)
print(df2.columns)
# Pandas merge command to join on column
# First, rename columns to have something to join on

dfM = pd.merge(df1, df2, on='_code', how='outer')
print(dfM.describe()) # count = 50970
print(dfM.columns)

# https://towardsdatascience.com/geopandas-101-plot-any-data-with-a-latitude-and-longitude-on-a-map-98e01944b972
crs = {'init': 'epsg:4326'}

# Create Points
geometry = [Point(xy) for xy in zip( dfM["LONGITUDE"], dfM["LATITUDE"])]
print(geometry[:3])

