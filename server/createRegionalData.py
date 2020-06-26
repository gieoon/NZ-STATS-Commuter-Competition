# Creates regional data csv based on clusters of information
'''
import csv

regions = {}

with open('./out/education.csv', 'r') as csv:
    count = 0
    for r in csv:
        print(r[0],end='')
        if count > 0:
            if r.DEPARTURE_NAME_1 not in regions:
                regions[r.DEPARTURE_NAME_1] = {number_of_pax: 0, total_commute_distance: 0, number_of_trips: 0}
                regions[r.DEPARTURE_NAME_1].number_of_pax += r.Total # This might not be including the other trips, study the data
                regions[r.DEPARTURE_NAME_1].total_commute_distance += r.HAVERSINE_DISTANCE
                regions[r.DEPARTURE_NAME_1].number_of_destinations += 1

print(regions)
'''

import pandas as pd

work_df = pd.read_csv('./out/work.csv')
education_df = pd.read_csv('./out/education.csv')

out_education = pd.DataFrame(columns=[
    "Name", 
    "Commute_distance_total", 
    "Commute_distance_average", 
    "Number_of_pax",
    "Number_of_destinations",
    "Bicycle",
    "Ferry",
    "Public_bus",
    "School_bus",
    "Train",
    "Drive_a_car_truck_or_van",
    "Passenger_in_a_car_truck_or_van",
    "Other",
    "Study_at_home",
    "Walk_or_jog"
])

out_work = pd.DataFrame(columns=[
    "Name", 
    "Commute_distance_total", 
    "Commute_distance_average", 
    "Number_of_pax",
    "Number_of_destinations",
    "Bicycle",
    "Ferry",
    "Public_bus",
    "Train",
    "Drive_a_private_car_truck_or_van",
    "Drive_a_company_car_truck_or_van",
    "Passenger_in_a_car_truck_van_or_company_bus",
    "Other",
    "Work_at_home",
    "Walk_or_jog"
])

out_total = pd.DataFrame(columns=[
    "Name",
    "Commute_distance_total",
    "Commute_distance_average",
    "Number_of_pax",
    "Number_of_destinations",
    "Bicycle",
    "Ferry",
    "Bus",
    "Train",
    "Drive_car_truck_van",
    "Passenger_in_car_truck_van",
    "Other",
    "From_home",
    "Walk_or_jog"
])

# Convert -999 values to 0
def noNegatives(df):
    for c in ['Bicycle', 
        "Ferry", 
        "Public_bus", 
        "Train", 
        "Drive_a_private_car_truck_or_van", 
        "Drive_a_company_car_truck_or_van",
        "Other",
        "Work_at_home",
        "Walk_or_jog",
        "Study_at_home",
        "School_bus",
        "Drive_a_car_truck_or_van",
        "Passenger_in_a_car_truck_or_van"
    ]:
        if(c in df.columns):
            df[c] = df[c].clip(lower=0) # Only works if all data is numeric.

    return df


# Work csv
for region, df_region in work_df.groupby('DEPARTURE_NAME_2'):
    # print(region)
    # print("Center: ", df_region['DEPARTURE_NAME_1'].iloc[0])
    total_distance = df_region['HAVERSINE_DISTANCE'].sum()
    '''
    print("total commute distance: ", total_distance)
    print("average commute distance: ", total_distance / len(df_region))
    print("number of pax: ", df_region['Total'].sum())
    print("number of destinations: ", len(df_region))
    '''
    d = {
        "Name": region,
        "Commute_distance_total": total_distance,
        "Commute_distance_average": total_distance / len(df_region),
        "Number_of_pax": df_region['Total'].sum(),
        "Number_of_destinations": len(df_region),
        "Bicycle": df_region['Bicycle'].clip(lower=0).sum(),
        "Ferry": df_region['Ferry'].clip(lower=0).sum(),
        "Public_bus": df_region['Public_bus'].clip(lower=0).sum(),
        "Train": df_region['Train'].clip(lower=0).sum(),
        "Drive_a_private_car_truck_or_van": df_region['Drive_a_private_car_truck_or_van'].clip(lower=0).sum(),
        "Drive_a_company_car_truck_or_van": df_region['Drive_a_company_car_truck_or_van'].clip(lower=0).sum(),
        "Passenger_in_a_car_truck_van_or_company_bus": df_region['Passenger_in_a_car_truck_van_or_company_bus'].clip(lower=0).sum(),
        "Other": df_region['Other'].clip(lower=0).sum(),
        "Work_at_home": df_region['Work_at_home'].clip(lower=0).sum(),
        "Walk_or_jog": df_region['Walk_or_jog'].clip(lower=0).sum(),
    }
    # out_work.append(pd.Series(d),ignore_index=True)
    out_work.loc[region] = pd.Series(d)
    
#out_work.mask(out_work < 0, 0)   #.clip(lower=0)
'''
out_work = out_work.replace(to_replace=-999,value=0)
# out_work = noNegatives(out_work)
out_work.to_csv('./regional_data/work.csv',index=False)
out_work.set_index('Name').to_json('./regional_data/work.json',orient='index')
'''

# Education csv
for region, df_region in education_df.groupby('DEPARTURE_NAME_2'):
    # print(region)
    # print("Center: ", df_region['DEPARTURE_NAME_1'].iloc[0])
    total_distance = df_region['HAVERSINE_DISTANCE'].sum()
    '''
    print("total commute distance: ", total_distance)
    print("average commute distance: ", total_distance / len(df_region))
    print("number of pax: ", df_region['Total'].sum())
    print("number of destinations: ", len(df_region))
    '''
    d = {
        "Name": region,
        "Commute_distance_total": total_distance,
        "Commute_distance_average": total_distance / len(df_region),
        "Number_of_pax": df_region['Total'].sum(),
        "Number_of_destinations": len(df_region),
        "Bicycle": df_region['Bicycle'].clip(lower=0).sum(),
        "Ferry": df_region['Ferry'].clip(lower=0).sum(),
        "Public_bus": df_region['Public_bus'].clip(lower=0).sum(),
        "School_bus": df_region['School_bus'].clip(lower=0).sum(),
        "Train": df_region['Train'].clip(lower=0).sum(),
        "Drive_a_car_truck_or_van": df_region['Drive_a_car_truck_or_van'].clip(lower=0).sum(),
        "Passenger_in_a_car_truck_or_van": df_region['Passenger_in_a_car_truck_or_van'].clip(lower=0).sum(),
        "Other": df_region['Other'].clip(lower=0).sum(),
        "Study_at_home": df_region['Study_at_home'].clip(lower=0).sum(),
        "Walk_or_jog": df_region['Walk_or_jog'].clip(lower=0).sum(),
    }
    out_education.loc[region] = pd.Series(d)

#out_education.mask(out_education < 0, 0)
# out_education = noNegatives(out_education)
'''
out_education = out_education.replace(to_replace=-999,value=0)
out_education.to_csv('./regional_data/education.csv',index=False)
out_education.set_index('Name').to_json('./regional_data/education.json',orient='index')
'''
# Total values


# Merge the two datasets into one showing totals after prepending titles
out_education.columns = 'E_' + out_education.columns.values
out_education.columns.values[0] = 'Name'
out_work.columns = 'W_' + out_work.columns.values
out_work.columns.values[0] = 'Name'

print(out_education.columns)
print(out_work.columns)

total_df = pd.merge(out_education, out_work, on='Name', how='inner')
print(total_df.columns)
print(total_df.describe())

out_total.loc[:,'Name'] = total_df['Name'].values
out_total.loc[:,'Commute_distance_total'] = total_df['E_Commute_distance_total'].values + total_df['W_Commute_distance_total'].values
out_total.loc[:,'Commute_distance_average'] = (total_df['E_Commute_distance_average'].values / len(total_df)) + (total_df['W_Commute_distance_average'].values / len(total_df))
out_total.loc[:,'Number_of_pax'] = total_df['E_Number_of_pax'].values + total_df['W_Number_of_pax'].values
out_total.loc[:,'Number_of_destinations'] = total_df['E_Number_of_destinations'].values + total_df['W_Number_of_destinations'].values
out_total.loc[:,'Bicycle'] = total_df['E_Bicycle'].values + total_df['W_Bicycle'].values
out_total.loc[:,'Bus'] = total_df['E_Public_bus'].values + total_df['E_School_bus'].values + total_df['W_Public_bus'].values
out_total.loc[:,'Train'] = total_df['E_Train'].values + total_df['W_Train'].values
out_total.loc[:,'Drive_car_truck_van'] = total_df['E_Drive_a_car_truck_or_van'].values + total_df['W_Drive_a_private_car_truck_or_van'].values + total_df['W_Drive_a_company_car_truck_or_van'].values
out_total.loc[:,'Passenger_in_car_truck_van'] = total_df['E_Passenger_in_a_car_truck_or_van'].values + total_df['W_Passenger_in_a_car_truck_van_or_company_bus'].values
out_total.loc[:,'Other'] = total_df['E_Other'].values + total_df['W_Other'].values
out_total.loc[:,'From_home'] = total_df['E_Study_at_home'].values + total_df['W_Work_at_home'].values
out_total.loc[:,'Walk_or_jog'] = total_df['E_Walk_or_jog'].values + total_df['W_Walk_or_jog'].values
print(out_total)

out_total.to_csv('./regional_data/total.csv', index=False)
out_total.set_index('Name').to_json('./regional_data/total.json', orient='index')
