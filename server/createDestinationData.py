# Create data for each destination

import pandas as pd

# education_df = pd.read_csv('./out/education.csv')
# work_df = pd.read_csv('./out/work.csv')
dfs = []

for commutePurpose in ["education","work"]:
    for commuteType in ["bicycle","bus","ferry","home","other","own_vehicle","passenger","train","walk_or_jog"]:
        dfs.append(pd.read_csv('./commuteData/{}/{}.csv'.format(commutePurpose,commuteType)))

df = pd.concat(dfs)

# Combine the two based on first column (residence/workplace name)
print(df.describe())

print(df['SA2_name_usual_residence_address'].value_counts())
out_df = df['SA2_name_usual_residence_address'].value_counts()

# Create columns

# Return as dictionary
out_df.to_json('./destinations/destinations.json')