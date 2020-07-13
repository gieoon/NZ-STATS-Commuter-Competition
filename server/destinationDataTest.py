import pandas as pd
import numpy as np
# education_df = pd.read_csv('./out/education.csv')
# work_df = pd.read_csv('./out/work.csv')
dfs = []

for commutePurpose in ["education","work"]:
    # for commuteType in ["ferry"]:
    for commuteType in ["bicycle","bus","ferry","home","other","own_vehicle","passenger","train","walk_or_jog"]:
        ddf = pd.read_csv('./commuteData/{}/{}.csv'.format(commutePurpose,commuteType))
        ddf.rename(columns={'SA2_name_educational_address':'SA2_name_workplace_address'}, inplace=True)
        dfs.append(ddf)

df = pd.concat(dfs)


# Combine the two based on first column (residence/workplace name)
# print(df.describe(),df.columns)

# Stores all frequencies
departure_count_dict = df['SA2_name_usual_residence_address'].value_counts().to_dict()#.to_frame()
print(len(departure_count_dict), len(departure_count_dict.keys()))