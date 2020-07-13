import pandas as pd
import numpy as np
pd.options.mode.chained_assignment = None  # default='warn'
# Loop through all of the data

# For each column of a commute type, save the data under a commute type.

# Save to CSV of this commute type.

def extractColumnsE(df):
    return df[[
        'id',
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
        'DESTINATION_NAME_2',
        'DEPARTURE_NAME_1',
        'DESTINATION_NAME_1'
    ]]

def extractColumnsW(df):
    return df[[
        'id',
        'SA2_name_usual_residence_address',
        'SA2_name_workplace_address',
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
        'DESTINATION_NAME_2',
        'DEPARTURE_NAME_1',
        'DESTINATION_NAME_1'
    ]]
'''
    EDUCATION
'''

# -990 to 0
def convertColumn(df, col_name):
    df[col_name] = np.where(df[col_name].astype(float) > -1, df[col_name], 0)
    # print(df[col_name])
    # print(df.columns)
    return df

education_df = pd.read_csv('./out/education.csv')
education_df['TYPE'] = 'EDUCATION'
# print(education_df.describe())
# print(education_df.columns)

study_at_home_df = education_df.loc[education_df['Study_at_home'] > 0]
study_at_home_df['COUNT'] = study_at_home_df['Study_at_home']
study_at_home_df['COMMUTE_TYPE'] = 'STUDY_AT_HOME'
study_at_home_df = extractColumnsE(study_at_home_df)
study_at_home_df.to_csv('./commuteData/education/home.csv', index=False)

# print(study_at_home_df.describe())
# print(study_at_home_df.columns)

own_vehicle_df = education_df.loc[education_df['Drive_a_car_truck_or_van'] > 0]
# own_vehicle_df = convertColumn(own_vehicle_df, 'Drive_a_car_truck_or_van')
own_vehicle_df['COUNT'] = own_vehicle_df['Drive_a_car_truck_or_van']
own_vehicle_df['COMMUTE_TYPE'] = 'DRIVE_OWN_VEHICLE'
own_vehicle_df = extractColumnsE(own_vehicle_df)
own_vehicle_df.to_csv('./commuteData/education/own_vehicle.csv', index=False)
# print(own_vehicle_df.describe())
# print(own_vehicle_df.columns)

passenger_df = education_df.loc[education_df['Passenger_in_a_car_truck_or_van'] > 0]
# passenger_df = convertColumn(passenger_df, 'Passenger_in_a_car_truck_or_van')
passenger_df['COUNT'] = passenger_df['Passenger_in_a_car_truck_or_van']
passenger_df['COMMUTE_TYPE'] = 'PASSENGER_IN_VEHICLE'
passenger_df = extractColumnsE(passenger_df)
passenger_df.to_csv('./commuteData/education/passenger.csv', index=False)

train_df = education_df.loc[education_df['Train'] > 0]
# train_df = convertColumn(train_df, 'Train')
train_df['COUNT'] = train_df['Train']
train_df['COMMUTE_TYPE'] = 'TRAIN'
train_df = extractColumnsE(train_df)
train_df.to_csv('./commuteData/education/train.csv', index=False)

bicycle_df = education_df.loc[education_df['Bicycle'] > 0]
# bicycle_df = convertColumn(bicycle_df, 'Bicycle')
bicycle_df['COUNT'] = bicycle_df['Bicycle']
bicycle_df['COMMUTE_TYPE'] = 'BICYCLE'
bicycle_df = extractColumnsE(bicycle_df)
bicycle_df.to_csv('./commuteData/education/bicycle.csv', index=False)

walk_or_jog_df = education_df.loc[education_df['Walk_or_jog'] > 0]
# walk_or_jog_df = convertColumn(walk_or_jog_df, 'Walk_or_jog')
walk_or_jog_df['COUNT'] = walk_or_jog_df['Walk_or_jog']
walk_or_jog_df['COMMUTE_TYPE'] = 'WALK_OR_JOG'
walk_or_jog_df = extractColumnsE(walk_or_jog_df)
walk_or_jog_df.to_csv('./commuteData/education/walk_or_jog.csv', index=False)

school_bus_df = education_df.loc[(education_df['School_bus'] > 0) | (education_df['Public_bus'] > 0)]
school_bus_df = convertColumn(school_bus_df, 'School_bus')
school_bus_df = convertColumn(school_bus_df, 'Public_bus')
# print("school_bus_df['COUNT'].shape: ", school_bus_df['COUNT'].shape)
# z = np.zeros(school_bus_df.shape)
# school_bus_df['COUNT'] = np.maximum(school_bus_df['School_bus'], np.zeros(school_bus_df['School_bus'].shape)) + np.maximum(school_bus_df['Public_bus'], np.zeros(school_bus_df['Public_bus']).shape)
school_bus_df['COUNT'] = school_bus_df['School_bus'] + school_bus_df['Public_bus']
school_bus_df['COMMUTE_TYPE'] = 'BUS'#'SCHOOL_BUS'
school_bus_df = extractColumnsE(school_bus_df)
school_bus_df.to_csv('./commuteData/education/bus.csv', index=False)

# public_bus_df = education_df.loc[education_df['Public_bus'] > 0]
# public_bus_df['COUNT'] = public_bus_df['Public_bus']
# public_bus_df['COMMUTE_TYPE'] = 'PUBLIC_BUS'
# public_bus_df = extractColumnsE(public_bus_df)
# public_bus_df.to_csv('./commuteData/education/public_bus.csv', index=False)

ferry_df = education_df.loc[education_df['Ferry'] > 0]
# ferry_df = convertColumn(ferry_df, 'Ferry')
ferry_df['COUNT'] = ferry_df['Ferry']
ferry_df['COMMUTE_TYPE'] = 'FERRY'
ferry_df = extractColumnsE(ferry_df)
ferry_df.to_csv('./commuteData/education/ferry.csv', index=False)

other_df = education_df.loc[education_df['Other'] > 0]
# other_df = convertColumn(other_df, 'Other')
other_df['COUNT'] = other_df['Other']
other_df['COMMUTE_TYPE'] = 'OTHER'
other_df = extractColumnsE(other_df)
other_df.to_csv('./commuteData/education/other.csv', index=False)


'''
    WORK
'''

work_df = pd.read_csv('./out/work.csv')
work_df['TYPE'] = 'WORK'
# print(work_df.columns)

work_at_home_df = work_df.loc[work_df['Work_at_home'] > 0]
# work_at_home_df = convertColumn(work_at_home_df, 'Work_at_home')
work_at_home_df['COUNT'] = work_at_home_df['Work_at_home']
work_at_home_df['COMMUTE_TYPE'] = 'WORK_AT_HOME'
work_at_home_df = extractColumnsW(work_at_home_df)
work_at_home_df.to_csv('./commuteData/work/home.csv', index=False)

w_own_vehicle_df = work_df.loc[(work_df['Drive_a_private_car_truck_or_van'] > 0) | (work_df['Drive_a_company_car_truck_or_van'] > 0)]
w_own_vehicle_df = convertColumn(w_own_vehicle_df, 'Drive_a_private_car_truck_or_van')
w_own_vehicle_df = convertColumn(w_own_vehicle_df, 'Drive_a_company_car_truck_or_van')
w_own_vehicle_df['COUNT'] = w_own_vehicle_df['Drive_a_private_car_truck_or_van'] + w_own_vehicle_df['Drive_a_company_car_truck_or_van']
w_own_vehicle_df['COMMUTE_TYPE'] = 'DRIVE_OWN_VEHICLE'
w_own_vehicle_df = extractColumnsW(w_own_vehicle_df)
w_own_vehicle_df.to_csv('./commuteData/work/own_vehicle.csv', index=False)

# w_company_vehicle_df = work_df.loc[work_df['Drive_a_company_car_truck_or_van'] > 0]
# w_company_vehicle_df['COUNT'] = w_company_vehicle_df['Drive_a_company_car_truck_or_van']
# w_company_vehicle_df['COMMUTE_TYPE'] = 'DRIVE_COMPANY_VEHICLE'
# w_company_vehicle_df = extractColumnsW(w_company_vehicle_df)
# w_company_vehicle_df.to_csv('./commuteData/work/company_vehicle.csv', index=False)

w_passenger_in_vehicle = work_df.loc[work_df['Passenger_in_a_car_truck_van_or_company_bus'] > 0]
# w_passenger_in_vehicle = convertColumn(w_passenger_in_vehicle, 'Passenger_in_a_car_truck_van_or_company_bus')
w_passenger_in_vehicle['COUNT'] = w_passenger_in_vehicle['Passenger_in_a_car_truck_van_or_company_bus']
w_passenger_in_vehicle['COMMUTE_TYPE'] = 'PASSENGER_IN_VEHICLE'
w_passenger_in_vehicle = extractColumnsW(w_passenger_in_vehicle)
w_passenger_in_vehicle.to_csv('./commuteData/work/passenger.csv', index=False)

w_public_bus = work_df.loc[work_df['Public_bus'] > 0]
# w_public_bus = convertColumn(w_public_bus, 'Public_bus')
w_public_bus['COUNT'] = w_public_bus['Public_bus']
w_public_bus['COMMUTE_TYPE'] = 'PUBLIC_BUS'
w_public_bus = extractColumnsW(w_public_bus)
w_public_bus.to_csv('./commuteData/work/bus.csv', index=False)

w_train_df = work_df.loc[work_df['Train'] > 0]
# w_train_df = convertColumn(w_train_df, 'Train')
w_train_df['COUNT'] = w_train_df['Train']
w_train_df['COMMUTE_TYPE'] = 'TRAIN'
w_train_df = extractColumnsW(w_train_df)
w_train_df.to_csv('./commuteData/work/train.csv', index=False)

w_bicycle_df = work_df.loc[work_df['Bicycle'] > 0]
# w_bicycle_df = convertColumn(w_bicycle_df, 'Bicycle')
w_bicycle_df['COUNT'] = w_bicycle_df['Bicycle']
w_bicycle_df['COMMUTE_TYPE'] = 'BICYCLE'
w_bicycle_df = extractColumnsW(w_bicycle_df)
w_bicycle_df.to_csv('./commuteData/work/bicycle.csv', index=False)

w_walk_or_jog_df = work_df.loc[work_df['Walk_or_jog'] > 0]
# w_walk_or_jog_df = convertColumn(w_walk_or_jog_df, 'Walk_or_jog')
w_walk_or_jog_df['COUNT'] = w_walk_or_jog_df['Walk_or_jog']
w_walk_or_jog_df['COMMUTE_TYPE'] = 'WALK_OR_JOG'
w_walk_or_jog_df = extractColumnsW(w_walk_or_jog_df)
w_walk_or_jog_df.to_csv('./commuteData/work/walk_or_jog.csv', index=False)

w_ferry_df = work_df.loc[work_df['Ferry'] > 0]
# w_ferry_df = convertColumn(w_ferry_df, 'Ferry')
w_ferry_df['COUNT'] = w_ferry_df['Ferry']
w_ferry_df['COMMUTE_TYPE'] = 'FERRY'
w_ferry_df = extractColumnsW(w_ferry_df)
w_ferry_df.to_csv('./commuteData/work/ferry.csv', index=False)

w_other_df = work_df.loc[work_df['Other'] > 0]
# w_other_df = convertColumn(w_other_df, 'Other')
w_other_df['COUNT'] = w_other_df['Other']
w_other_df['COMMUTE_TYPE'] = 'OTHER'
w_other_df = extractColumnsW(w_other_df)
w_other_df.to_csv('./commuteData/work/other.csv', index=False)

