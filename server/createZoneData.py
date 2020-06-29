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

education_df = pd.read_csv('./out/education.csv')
print(education_df.describe())
print(education_df.columns)

# We want about 3000 points of data each time
maxZoom_df = education_df.loc[education_df['HAVERSINE_DISTANCE'] >= 100]
print(maxZoom_df.describe())
print(maxZoom_df.head(10))

maxZoom_df.to_csv('./zoneData/5.csv', index=False)
