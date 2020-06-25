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


# Work csv
count = 0
for region, df_region in work_df.groupby('DEPARTURE_NAME_1'):
    count += 1
    print(region)
    # print("Center: ", df_region['DEPARTURE_NAME_1'].iloc[0])
    total_distance = df_region['HAVERSINE_DISTANCE'].sum()
    print("total commute distance: ", total_distance)
    print("average commute distance: ", total_distance / len(df_region))
    print("number of pax: ", df_region['Total'].sum())
    print("number of destinations: ", len(df_region))
    d = {
        "Name": region,
        "Commute_distance_total": total_distance,
        "Commute_distance_average": total_distance / len(df_region),
        "Number_of_pax": df_region['Total'].sum(),
        "Number_of_destinations": len(df_region),
        "Bicycle": df_region['Bicycle'].sum(),
        "Ferry": df_region['Ferry'].sum(),
        "Public bus": df_region['Public_bus'].sum(),
        "Train": df_region['Train'].sum(),
        "Drive_a_private_car_truck_or_van": df_region['Drive_a_private_car_truck_or_van'].sum(),
        "Drive_a_company_car_truck_or_van": df_region['Drive_a_company_car_truck_or_van'].sum(),
        "Passenger_in_a_car_truck_van_or_company_bus": df_region['Passenger_in_a_car_truck_van_or_company_bus'].sum(),
        "Other": df_region['Other'].sum(),
        "Work_at_home": df_region['Work_at_home'].sum(),
        "Walk_or_jog": df_region['Walk_or_jog'].sum(),
    }
    # out_work.append(pd.Series(d),ignore_index=True)
    out_work.loc[region] = pd.Series(d)
    
out_work.to_csv('./regional_data/work.csv',index=False)

count = 0
# Education csv
for region, df_region in education_df.groupby('DEPARTURE_NAME_1'):
    count += 1
    print(region)
    # print("Center: ", df_region['DEPARTURE_NAME_1'].iloc[0])
    total_distance = df_region['HAVERSINE_DISTANCE'].sum()
    print("total commute distance: ", total_distance)
    print("average commute distance: ", total_distance / len(df_region))
    print("number of pax: ", df_region['Total'].sum())
    print("number of destinations: ", len(df_region))
    d = {
        "Name": region,
        "Commute_distance_total": total_distance,
        "Commute_distance_average": total_distance / len(df_region),
        "Number_of_pax": df_region['Total'].sum(),
        "Number_of_destinations": len(df_region),
        "Bicycle": df_region['Bicycle'].sum(),
        "Ferry": df_region['Ferry'].sum(),
        "Public bus": df_region['Public_bus'].sum(),
        "School bus": df_region['School_bus'].sum(),
        "Train": df_region['Train'].sum(),
        "Drive_a_car_truck_or_van": df_region['Drive_a_car_truck_or_van'].sum(),
        "Passenger_in_a_car_truck_or_van": df_region['Passenger_in_a_car_truck_or_van'].sum(),
        "Other": df_region['Other'].sum(),
        "Study_at_home": df_region['Study_at_home'].sum(),
        "Walk_or_jog": df_region['Walk_or_jog'].sum(),
    }
    out_education.loc[region] = pd.Series(d)

out_education.to_csv('./regional_data/education.csv',index=False)


