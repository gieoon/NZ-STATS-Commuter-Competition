# Create different data for each zone

# Calculate zone based on zoom level

# Get data points within the visible region

# If the Haversine distance is less than a threshold determined by the visible boundary size, then return it.

# Each data point has a commute type

# Save as a dictionary with boundary size, so, each boundary size triggers the next set of data to show.

# 1. Dictionary of boundary size, show the largest size bigger than current one
# 2. Only return data points that are within the visible region


# Based on an input zoom level, returns a dataset of the commutes we wish to display.
# Easiest way to do this is to only display large haversine distances and when zoomed in, show smaller ones as well.

import csv
import pandas as pd

# Education
education_df = pd.read_csv('./out/education.csv')
education_df['TYPE'] = 'EDUCATION'
print(education_df.describe())
print(education_df.columns)

# We want maximum approximately 3000 points of data each time
zoom_5_df = education_df.loc[education_df['HAVERSINE_DISTANCE'] >= 100] # 100 = 85 rows
print("zoom 5: ", zoom_5_df.describe())

zoom_6_df = education_df.loc[education_df['HAVERSINE_DISTANCE'] >= 50]
print("zoom 6: ", zoom_6_df.describe())

zoom_7_df = education_df.loc[education_df['HAVERSINE_DISTANCE'] >= 45]
print("zoom_7: ", zoom_7_df.describe())

zoom_8_df = education_df.loc[education_df['HAVERSINE_DISTANCE'] >= 25]
print("zoom_8: ", zoom_8_df.describe())

zoom_9_df = education_df.loc[education_df['HAVERSINE_DISTANCE'] >= 15]
print("zoom_9: ", zoom_9_df.describe())

zoom_10_df = education_df.loc[education_df['HAVERSINE_DISTANCE'] >= 10]
print("zoom_10: ", zoom_10_df.describe())

zoom_11_df = education_df.loc[education_df['HAVERSINE_DISTANCE'] >= 5]
print("zoom_11: ", zoom_11_df.describe())

zoom_12_df = education_df.loc[education_df['HAVERSINE_DISTANCE'] >= 3]
print("zoom_12: ", zoom_12_df.describe())

zoom_13_df = education_df
print("zoom_13: ", zoom_13_df.describe())

zoom_5_df.to_csv('./zoomData/education_5.csv', index=False)
zoom_6_df.to_csv('./zoomData/education_6.csv', index=False)
zoom_7_df.to_csv('./zoomData/education_7.csv', index=False)
zoom_8_df.to_csv('./zoomData/education_8.csv', index=False)
zoom_9_df.to_csv('./zoomData/education_9.csv', index=False)
zoom_10_df.to_csv('./zoomData/education_10.csv', index=False)
zoom_11_df.to_csv('./zoomData/education_11.csv', index=False)
zoom_12_df.to_csv('./zoomData/education_12.csv', index=False)
zoom_13_df.to_csv('./zoomData/education_13.csv', index=False)


# Work
work_df = pd.read_csv('./out/work.csv')
work_df['TYPE'] = 'WORK'
print(work_df.describe())
print(work_df.columns)

# We want maximum approximately 3000 points of data each time
w_zoom_5_df = work_df.loc[work_df['HAVERSINE_DISTANCE'] >= 100] # 100 = 85 rows
print("zoom 5: ", w_zoom_5_df.describe())

w_zoom_6_df = work_df.loc[work_df['HAVERSINE_DISTANCE'] >= 50]
print("zoom 6: ", w_zoom_6_df.describe())

w_zoom_7_df = work_df.loc[work_df['HAVERSINE_DISTANCE'] >= 45]
print("zoom_7: ", w_zoom_7_df.describe())

w_zoom_8_df = work_df.loc[work_df['HAVERSINE_DISTANCE'] >= 25]
print("zoom_8: ", w_zoom_8_df.describe())

w_zoom_9_df = work_df.loc[work_df['HAVERSINE_DISTANCE'] >= 15]
print("zoom_9: ", w_zoom_9_df.describe())

w_zoom_10_df = work_df.loc[work_df['HAVERSINE_DISTANCE'] >= 10]
print("zoom_10: ", w_zoom_10_df.describe())

w_zoom_11_df = work_df.loc[work_df['HAVERSINE_DISTANCE'] >= 5]
print("zoom_11: ", w_zoom_11_df.describe())

w_zoom_12_df = work_df.loc[work_df['HAVERSINE_DISTANCE'] >= 3]
print("zoom_12: ", w_zoom_12_df.describe())

w_zoom_13_df = work_df
print("zoom_13: ", w_zoom_13_df.describe())

w_zoom_5_df.to_csv('./zoomData/work_5.csv', index=False)
w_zoom_6_df.to_csv('./zoomData/work_6.csv', index=False)
w_zoom_7_df.to_csv('./zoomData/work_7.csv', index=False)
w_zoom_8_df.to_csv('./zoomData/work_8.csv', index=False)
w_zoom_9_df.to_csv('./zoomData/work_9.csv', index=False)
w_zoom_10_df.to_csv('./zoomData/work_10.csv', index=False)
w_zoom_11_df.to_csv('./zoomData/work_11.csv', index=False)
w_zoom_12_df.to_csv('./zoomData/work_12.csv', index=False)
w_zoom_13_df.to_csv('./zoomData/work_13.csv', index=False)
