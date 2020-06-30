import pandas as pd
pd.options.mode.chained_assignment = None  # default='warn'
# Loop through all of the data

# For each column of a commute type, save the data under a commute type.

# Save to CSV of this commute type.

def extractColumns(df):
    return df[[
        'SA2_name_usual_residence_address',
        'SA2_name_educational_address',
        'COMMUTE_TYPE',
        'COUNT',
        'TYPE',
        'departure_SA22018_V1_NAME',
        'departure_LATITUDE',
        'departure_LONGITUDE',
        'destination_SA22018_V1_NAME',
        'destination_LATITUDE',
        'destination_LONGITUDE',
        'HAVERSINE_DISTANCE',
        'DEPARTURE_NAME_2',
        'DESTINATION_NAME_2'
    ]]

'''
    EDUCATION
'''

education_df = pd.read_csv('./out/education.csv')
education_df['TYPE'] = 'EDUCATION'
# print(education_df.describe())
# print(education_df.columns)

study_at_home_df = education_df.loc[education_df['Study_at_home'] > 0]
study_at_home_df['COUNT'] = study_at_home_df['Study_at_home']
study_at_home_df['COMMUTE_TYPE'] = 'STUDY_AT_HOME'
study_at_home_df = extractColumns(study_at_home_df)

# print(study_at_home_df.describe())
# print(study_at_home_df.columns)

own_vehicle_df = education_df.loc[education_df['Drive_a_car_truck_or_van'] > 0]
own_vehicle_df['COUNT'] = own_vehicle_df['Drive_a_car_truck_or_van']
own_vehicle_df['COMMUTE_TYPE'] = 'DRIVE_OWN_VEHICLE'
own_vehicle_df = extractColumns(own_vehicle_df)

# print(own_vehicle_df.describe())
# print(own_vehicle_df.columns)

passenger_df = education_df.loc[education_df['Passenger_in_a_car_truck_or_van'] > 0]
passenger_df['COUNT'] = passenger_df['Passenger_in_a_car_truck_or_van']
passenger_df['COMMUTE_TYPE'] = 'PASSENGER_IN_VEHICLE'
passenger_df = extractColumns(passenger_df)

train_df = education_df.loc[education_df['Train'] > 0]
train_df['COUNT'] = train_df['Train']
train_df['COMMUTE_TYPE'] = 'TRAIN'
train_df = extractColumns(train_df)

bicycle_df = education_df.loc[education_df['Bicycle'] > 0]
bicycle_df['COUNT'] = bicycle_df['Bicycle']
bicycle_df['COMMUTE_TYPE'] = 'BICYCLE'
bicycle_df = extractColumns(bicycle_df)

walk_or_jog_df = education_df.loc[education_df['Walk_or_jog'] > 0]
walk_or_jog_df['COUNT'] = walk_or_jog_df['Walk_or_jog']
walk_or_jog_df['COMMUTE_TYPE'] = 'WALK_OR_JOG'
walk_or_jog_df = extractColumns(walk_or_jog_df)

school_bus_df = education_df.loc[education_df['School_bus'] > 0]
school_bus_df['COUNT'] = school_bus_df['School_bus']
school_bus_df['COMMUTE_TYPE'] = 'SCHOOL_BUS'
school_bus_df = extractColumns(school_bus_df)

public_bus_df = education_df.loc[education_df['Public_bus'] > 0]
public_bus_df['COUNT'] = public_bus_df['Public_bus']
public_bus_df['COMMUTE_TYPE'] = 'PUBLIC_BUS'
public_bus_df = extractColumns(public_bus_df)

ferry_df = education_df.loc[education_df['Ferry'] > 0]
ferry_df['COUNT'] = ferry_df['Ferry']
ferry_df['COMMUTE_TYPE'] = 'FERRY'
ferry_df = extractColumns(ferry_df)

other_df = education_df.loc[education_df['Other'] > 0]
other_df['COUNT'] = other_df['Other']
other_df['COMMUTE_TYPE'] = 'OTHER'
other_df = extractColumns(other_df)

company_vehicle = []

'''
    WORK
'''

work_df = pd.read_csv('./out/work.csv')
work_df['TYPE'] = 'EDUCATION'
print(work_df.columns)

work_at_home_df = work_df.loc[work_df['Work_at_home'] > 0]
work_at_home_df['COUNT'] = work_at_home_df['Work_at_home']
work_at_home_df['COMMUTE_TYPE'] = 'WORK_AT_HOME'
work_at_home_df = extractColumns(work_at_home_df)

w_own_vehicle_df = work_df.loc[work_df['Drive_a_private_car_truck_or_van'] > 0]
w_own_vehicle_df['COUNT'] = w_own_vehicle_df['Drive_a_private_car_truck_or_van']
w_own_vehicle_df['COMMUTE_TYPE'] = 'DRIVE_OWN_VEHICLE'
w_own_vehicle_df = extractColumns(w_own_vehicle_df)

w_company_vehicle_df = work_df.loc[work_df['Drive_a_company_car_truck_or_van'] > 0]
w_company_vehicle_df['COUNT'] = w_company_vehicle_df['Drive_a_company_car_truck_or_van']
w_company_vehicle_df['COMMUTE_TYPE'] = 'DRIVE_COMPANY_VEHICLE'
w_company_vehicle_df = extractColumns(w_company_vehicle_df)

w_passenger_in_vehicle = work_df.loc[work_df['Passenger_in_a_car_truck_van_or_company_bus'] > 0]
w_passenger_in_vehicle['COUNT'] = w_passenger_in_vehicle['Passenger_in_a_car_truck_van_or_company_bus']
w_passenger_in_vehicle['COMMUTE_TYPE'] = 'PASSENGER_IN_VEHICLE'
w_passenger_in_vehicle = extractColumns(w_passenger_in_vehicle)

w_public_bus = work_df.loc[work_df['Public_bus']]
w_public_bus['COUNT'] = w_public_bus['Public_bus']
w_public_bus['COMMUTE_TYPE'] = 'PUBLIC_BUS'
w_public_bus = extractColumns(w_public_bus)

w_train_df = work_df.loc[work_df['Train']]
w_train_df['COUNT'] = w_train_df['Train']
w_train_df['COMMUTE_TYPE'] = 'TRAIN'
w_train_df = extractColumns(w_train_df)

w_bicycle_df = work_df.loc[work_df['Bicycle']]
w_bicycle_df['COUNT'] = w_bicycle_df['Bicycle']
w_bicycle_df['COMMUTE_TYPE'] = 'BICYCLE'
w_bicycle_df = extractColumns(w_bicycle_df)

w_walk_or_jog_df = work_df.loc[work_df['Walk_or_jog']]
w_walk_or_jog_df['COUNT'] = w_walk_or_jog_df['Walk_or_jog']
w_walk_or_jog_df['COMMUTE_TYPE'] = 'WALK_OR_JOG'
w_walk_or_jog_df = extractColumns(w_walk_or_jog_df)

#Do the rest here
