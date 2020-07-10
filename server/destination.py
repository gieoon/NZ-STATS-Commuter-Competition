# Load destination data as dict to client.
import pandas as pd

df = pd.read_csv('./destinations/destinations.json')
df = df.to_dict()
print(df)

def getDestinations():
    return df
