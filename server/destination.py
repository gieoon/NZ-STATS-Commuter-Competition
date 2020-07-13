# Load destination data as dict to client.
import pandas as pd

df = pd.read_csv('./destinations/destinations.csv')
df.set_index('SA2_name_usual_residence_address',inplace=True)
df = df.to_dict(orient='index')
# df = df.to_dict(orient='records')
# print(df)


def getDestinations():
    return df
