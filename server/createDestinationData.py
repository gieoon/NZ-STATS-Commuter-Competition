# Create data for each destination

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

# df = df.sample(int(len(df.index) / 1000), axis=0)

# Combine the two based on first column (residence/workplace name)
print(df.describe(),df.columns)

# Stores all frequencies
departure_count_dict = df['SA2_name_usual_residence_address'].value_counts().to_dict()#.to_frame()
# out_df = out_df.groupby(out_df).transform('count')
# print(out_df['New Lynn South'])
# print(frequency_dict['New Lynn South'])
# Create list of unique values to iterate through
# for address in df['SA2_name_usual_residence_address'].unique():
#     print(address)

arrival_count_dict = df['SA2_name_workplace_address'].value_counts().to_dict()#.to_frame()
# print("arrival_count_dict: ", arrival_count_dict)
total_commutes_df = df.groupby(["SA2_name_usual_residence_address"]).COUNT.sum().reset_index()
# total_commutes_df.set_index("SA2_name_usual_residence_address")
# print(total_commutes_df.describe(),total_commutes_df.columns,total_commutes_df.head(10))
# print(
#     "total_commutes_df.loc[total_commutes_df['SA2_name_usual_residence_address'] == 'Abbotsford']: ",
#     total_commutes_df.loc[total_commutes_df['SA2_name_usual_residence_address'] == 'Abbotsford'].COUNT.values[0],
#     end='!!!'
# )
# print(total_commutes_df['Abbey Caves-Glenbervie'])

average_departing_commutes_df = df.groupby(["SA2_name_usual_residence_address"]).HAVERSINE_DISTANCE.mean().reset_index()
# print(
#     "average_departing_commutes_df.loc[average_departing_commutes_df['SA2_name_usual_residence_address'] == key],",
#     average_departing_commutes_df.loc[average_departing_commutes_df['SA2_name_usual_residence_address'] == 'Abbotsford'].HAVERSINE_DISTANCE.values[0],
#     end="!!!"
# )
average_arriving_commutes_df = df.groupby(["SA2_name_workplace_address"]).HAVERSINE_DISTANCE.mean().reset_index()

def getTotalCommuteTypeCount(key, commute_type):
    val = df.loc[(df['SA2_name_workplace_address'] == key) & (df['COMMUTE_TYPE'] == commute_type)].COUNT.sum()
    # print("total of commute type: ", val)
    return val

def getTotalCommuteTypeCountByCommutePurpose(key, commute_type, commute_purpose):
    val = df.loc[(df['SA2_name_workplace_address'] == key) & (df['COMMUTE_TYPE'] == commute_type) & (df['TYPE'] == commute_purpose)].COUNT.sum()
    # print("total by commute type: ", val)
    return val

def getCommonDestination(key):
    t = df.loc[df['SA2_name_usual_residence_address'] == key]
    t = t['SA2_name_workplace_address'].value_counts().values[0:3]#.index.to_list()
    
    while t.shape[0] < 3:
        t = np.append(t,-990)
    return t

def getCommonArrival(key):
    t = df.loc[df['SA2_name_workplace_address'] == key]
    t = t['SA2_name_usual_residence_address'].value_counts().values[0:3]#.index.to_list()
    
    while t.shape[0] < 3:
        t = np.append(t,-990)
    return t

def getAverageDistance(key, commute_type):
    val = df.loc[(df['SA2_name_usual_residence_address'] == key) & (df['COMMUTE_TYPE'] == commute_type)].HAVERSINE_DISTANCE.mean()
    # print("average distance: ", val)
    return val


# Create columns
'''
| SA2_name_usual_residence_address | number of commute paths departing | number of total commutes | average distance of commute leaving from here | average distance of commute arriving here | number of bicycle commutes | number of bus commutes | ... | most common destinations 1 (top 3) | ... | most common departures with this location as destination 1 (top 3) | ... | average distance travelled from this location for each commute type | ... |
'''

out_dict = {}
out_list = []

for key in departure_count_dict:
    # Append new row to dataframe
    average_arriving_commutes = average_arriving_commutes_df.loc[average_arriving_commutes_df['SA2_name_workplace_address'] == key].HAVERSINE_DISTANCE.values
    # print(average_arriving_commutes)
    if len(average_arriving_commutes) > 0:
        average_arriving_commutes = average_arriving_commutes[0]
    else:
        average_arriving_commutes = 0
    row = [
        key,
        departure_count_dict[key] if key in departure_count_dict else 1,
        arrival_count_dict[key] if key in arrival_count_dict else 1,
        total_commutes_df.loc[total_commutes_df['SA2_name_usual_residence_address'] == key].COUNT.values[0],
        average_departing_commutes_df.loc[average_departing_commutes_df['SA2_name_usual_residence_address'] == key].HAVERSINE_DISTANCE.values[0],
        average_arriving_commutes,
        getTotalCommuteTypeCount(key, 'BICYCLE'),
        getTotalCommuteTypeCount(key, 'BUS'),
        getTotalCommuteTypeCount(key, 'FERRY'),
        getTotalCommuteTypeCount(key, 'HOME'),
        getTotalCommuteTypeCount(key, 'OTHER'),
        getTotalCommuteTypeCount(key, 'OWN_VEHICLE'),
        getTotalCommuteTypeCount(key, 'PASSENGER'),
        getTotalCommuteTypeCount(key, 'TRAIN'),
        getTotalCommuteTypeCount(key, 'WALK_OR_JOG'),
        getTotalCommuteTypeCountByCommutePurpose(key, 'BICYCLE','EDUCATION'),
        getTotalCommuteTypeCountByCommutePurpose(key, 'BUS','EDUCATION'),
        getTotalCommuteTypeCountByCommutePurpose(key, 'FERRY','EDUCATION'),
        getTotalCommuteTypeCountByCommutePurpose(key, 'HOME','EDUCATION'),
        getTotalCommuteTypeCountByCommutePurpose(key, 'OTHER','EDUCATION'),
        getTotalCommuteTypeCountByCommutePurpose(key, 'OWN_VEHICLE','EDUCATION'),
        getTotalCommuteTypeCountByCommutePurpose(key, 'PASSENGER','EDUCATION'),
        getTotalCommuteTypeCountByCommutePurpose(key, 'TRAIN','EDUCATION'),
        getTotalCommuteTypeCountByCommutePurpose(key, 'WALK_OR_JOG','EDUCATION'),
        getTotalCommuteTypeCountByCommutePurpose(key, 'BICYCLE','WORK'),
        getTotalCommuteTypeCountByCommutePurpose(key, 'BUS','WORK'),
        getTotalCommuteTypeCountByCommutePurpose(key, 'FERRY','WORK'),
        getTotalCommuteTypeCountByCommutePurpose(key, 'HOME','WORK'),
        getTotalCommuteTypeCountByCommutePurpose(key, 'OTHER','WORK'),
        getTotalCommuteTypeCountByCommutePurpose(key, 'OWN_VEHICLE','WORK'),
        getTotalCommuteTypeCountByCommutePurpose(key, 'PASSENGER','WORK'),
        getTotalCommuteTypeCountByCommutePurpose(key, 'TRAIN','WORK'),
        getTotalCommuteTypeCountByCommutePurpose(key, 'WALK_OR_JOG','WORK'),
        *getCommonDestination(key).tolist(), # splat (*) operator, to spread the array (... in JS)
        *getCommonArrival(key).tolist(),
        getAverageDistance(key, 'BICYCLE'),
        getAverageDistance(key, 'BUS'),
        getAverageDistance(key,'FERRY'),
        getAverageDistance(key,'HOME'),
        getAverageDistance(key,'OTHER'),
        getAverageDistance(key,'OWN_VEHICLE'),
        getAverageDistance(key,'PASSENGER'),
        getAverageDistance(key,'TRAIN'),
        getAverageDistance(key,'WALK_OR_JOG'),
    ]
    '''
    row = [
        'SA2_name_usual_residence_address': key,
        'number_of_commutes_departing': departure_count_dict[key] if key in departure_count_dict else 1,
        'number_of_commutes_arriving': arrival_count_dict[key] if key in arrival_count_dict else 1,
        'number_of_people_commuting': total_commutes_df.loc[total_commutes_df['SA2_name_usual_residence_address'] == key].COUNT.values[0],
        'average_distance_of_departing_commute': average_departing_commutes_df.loc[average_departing_commutes_df['SA2_name_usual_residence_address'] == key],
        'average_distance_of_arriving_commute': average_arriving_commutes_df.loc[average_arriving_commutes_df['SA2_name_workplace_address'] == key],
        'total_bicycle_count': getTotalCommuteTypeCount(key, 'BICYCLE'),
        'total_bus_count': getTotalCommuteTypeCount(key, 'BUS'),
        'total_ferry_count': getTotalCommuteTypeCount(key, 'FERRY'),
        'total_home_count': getTotalCommuteTypeCount(key, 'HOME'),
        'total_other_count': getTotalCommuteTypeCount(key, 'OTHER'),
        'total_own_vehicle_count': getTotalCommuteTypeCount(key, 'OWN_VEHICLE'),
        'total_passenger_count': getTotalCommuteTypeCount(key, 'PASSENGER'),
        'total_train_count': getTotalCommuteTypeCount(key, 'TRAIN'),
        'total_walk_or_jog_count': getTotalCommuteTypeCount(key, 'WALK_OR_JOG'),
        'education_bicycle_count': getTotalCommuteTypeCountByCommutePurpose(key, 'BICYCLE','EDUCATION'),
        'education_bus_count': getTotalCommuteTypeCountByCommutePurpose(key, 'BUS','EDUCATION'),
        'education_ferry_count': getTotalCommuteTypeCountByCommutePurpose(key, 'FERRY','EDUCATION'),
        'education_home_count': getTotalCommuteTypeCountByCommutePurpose(key, 'HOME','EDUCATION'),
        'education_other_count': getTotalCommuteTypeCountByCommutePurpose(key, 'OTHER','EDUCATION'),
        'education_own_vehicle_count': getTotalCommuteTypeCountByCommutePurpose(key, 'OWN_VEHICLE','EDUCATION'),
        'education_passenger_count': getTotalCommuteTypeCountByCommutePurpose(key, 'PASSENGER','EDUCATION'),
        'education_train_count': getTotalCommuteTypeCountByCommutePurpose(key, 'TRAIN','EDUCATION'),
        'education_walk_or_jog_count': getTotalCommuteTypeCountByCommutePurpose(key, 'WALK_OR_JOG','EDUCATION'),
        'work_bicycle_count': getTotalCommuteTypeCountByCommutePurpose(key, 'BICYCLE','WORK'),
        'work_bus_count': getTotalCommuteTypeCountByCommutePurpose(key, 'BUS','WORK'),
        'work_ferry_count': getTotalCommuteTypeCountByCommutePurpose(key, 'FERRY','WORK'),
        'work_home_count': getTotalCommuteTypeCountByCommutePurpose(key, 'HOME','WORK'),
        'work_other_count': getTotalCommuteTypeCountByCommutePurpose(key, 'OTHER','WORK'),
        'work_own_vehicle_count': getTotalCommuteTypeCountByCommutePurpose(key, 'OWN_VEHICLE','WORK'),
        'work_passenger_count': getTotalCommuteTypeCountByCommutePurpose(key, 'PASSENGER','WORK'),
        'work_train_count': getTotalCommuteTypeCountByCommutePurpose(key, 'TRAIN','WORK'),
        'work_walk_or_jog_count': getTotalCommuteTypeCountByCommutePurpose(key, 'WALK_OR_JOG','WORK'),
        *getCommonDestination(key), # splat (*) operator, to spread the array (... in JS)
        *getCommonArrival(key),
        getAverageDistance(key, 'BICYCLE'),
        getAverageDistance(key, 'BUS'),
        getAverageDistance(key,'FERRY'),
        getAverageDistance(key,'HOME'),
        getAverageDistance(key,'OTHER'),
        getAverageDistance(key,'OWN_VEHICLE'),
        getAverageDistance(key,'PASSENGER'),
        getAverageDistance(key,'TRAIN'),
        getAverageDistance(key,'WALK_OR_JOG'),
    ]
    '''
    # out_dict[key] = row
    out_list.append(row)
    # print('created row: ', row)
    print('.', end='', flush=True)
# out_df = pd.DataFrame.from_dict(out_dict, orient='index')
out_df = pd.DataFrame.from_records(out_list,
    columns=[
        'SA2_name_usual_residence_address',
        'number_of_commutes_departing',
        'number_of_commutes_arriving',
        'number_of_people_commuting',
        'average_distance_of_departing_commute',
        'average_distance_of_arriving_commute',
        'total_bicycle_count',
        'total_bus_count',
        'total_ferry_count',
        'total_home_count',
        'total_other_count',
        'total_own_vehicle_count',
        'total_passenger_count',
        'total_train_count',
        'total_walk_or_jog_count',
        'education_bicycle_count',
        'education_bus_count',
        'education_ferry_count',
        'education_home_count',
        'education_other_count',
        'education_own_vehicle_count',
        'education_passenger_count',
        'education_train_count',
        'education_walk_or_jog_count',
        'work_bicycle_count',
        'work_bus_count',
        'work_ferry_count',
        'work_home_count',
        'work_other_count',
        'work_own_vehicle_count',
        'work_passenger_count',
        'work_train_count',
        'work_walk_or_jog_count',
        'common_destination_1',
        'common_destination_2',
        'common_destination_3',
        'common_arrival_1',
        'common_arrival_2',
        'common_arrival_3',
        'bicycle_distance',
        'bus_distance',
        'ferry_distance',
        'home_distance',
        'other_distance',
        'own_vehicle_distance',
        'passenger_distance',
        'train_distance',
        'walk_or_jog_distance'
    ]
)
'''
out_df = pd.DataFrame(
    out_dict,
    index=['SA2_name_usual_residence_address'],
    columns=[
        'SA2_name_usual_residence_address',
        'number_of_commutes_departing',
        'number_of_commutes_arriving',
        'number_of_people_commuting',
        'average_distance_of_departing_commute',
        'average_distance_of_arriving_commute',
        'total_bicycle_count',
        'total_bus_count',
        'total_ferry_count',
        'total_home_count',
        'total_other_count',
        'total_own_vehicle_count',
        'total_passenger_count',
        'total_train_count',
        'total_walk_or_jog_count',
        'education_bicycle_count',
        'education_bus_count',
        'education_ferry_count',
        'education_home_count',
        'education_other_count',
        'education_own_vehicle_count',
        'education_passenger_count',
        'education_train_count',
        'education_walk_or_jog_count',
        'work_bicycle_count',
        'work_bus_count',
        'work_ferry_count',
        'work_home_count',
        'work_other_count',
        'work_own_vehicle_count',
        'work_passenger_count',
        'work_train_count',
        'work_walk_or_jog_count',
        'common_destination_1',
        'common_destination_2',
        'common_destination_3',
        'common_arrival_1',
        'common_arrival_2',
        'common_arrival_3',
        'bicycle_distance',
        'bus_distance',
        'ferry_distance',
        'home_distance',
        'other_distance',
        'own_vehicle_distance',
        'passenger_distance',
        'train_distance',
        'walk_or_jog_distance'
    ]
)
'''
out_df = out_df.fillna(0)
print(out_df.describe(),out_df.columns,out_df.size,out_df.shape)

# Save as json
# out_df.to_json('./destinations/destinations.json')

out_df.to_csv('./destinations/destinations.csv', index=False)