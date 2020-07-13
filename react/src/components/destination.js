import React from 'react'
import {useSprings, animated} from 'react-spring';

function Destination({
    obj,
    type,
}){
    // console.log("destination obj: ", obj)

    // const arr = 
    // const springs = useSprings(

    // )

    return(
        <div>
            {
                Object.keys(obj || {}).map((key,index) => (
                    Number(obj[key]) 
                    ? <p key={type + "-" + index} className="destination-txt">{key2Display(key) + ": " + obj[key]}</p>
                    : ""
                ))
            }
        </div>
    )
}

function key2Display(key){
    switch(key){
        case "average_distance_of_arriving_commute": return "Average distance of arriving commutes";
        case "average_distance_of_departing_commute": return "Average distance of departing commutes"; 
        case "bicycle_distance": return "Average distance travelled by bicycle";
        case "bus_distance": return "Average distance travelled by bus";
        case "common_arrival_1": return "Most common destination for commutes from";
        case "common_arrival_2": return "Second most common destination for commutes from";
        case "common_arrival_3": return "Third most common destination for commutes from";
        case "common_destination_1": return "Most common destination departing from here";
        case "common_destination_2": return "Second most common destination departing from here";
        case "common_destination_3": return "Third most common destination departing from here";
        case "education_bicycle_count": return "Number of commutes to school by bike";
        case "education_bus_count": return "Number of commutes to school by bus"
        case "education_ferry_count": return "Number of commutes to school by ferry"
        case "education_home_count": return "Studying at home"
        case "education_other_count": return "Number of commutes to school by other means";
        case "education_own_vehicle_count": return "Number of commutes to school using own vehicle"
        case "education_passenger_count": return "Number of commutes to school as a passenger in a vehicle"
        case "education_train_count": return "Number of commutes to school by train"
        case "education_walk_or_jog_count": return "Number of commutes to school walking/jogging"
        case "ferry_distance": return "Average commute distance by ferry";
        case "home_distance":  return "Distance commuted from home";
        case "number_of_commutes_arriving": return "Number of commutes arriving here"
        case "number_of_commutes_departing": return "Number of commutes departing from here"
        case "number_of_people_commuting": return "Number of people commuting from/to this destination";
        case "other_distance": return "Average commute distance using other means";
        case "own_vehicle_distance": return "Average commute distance commuting using own vehicle";
        case "passenger_distance": return "Average commute distance commuting as a passenger in a vehicle";
        case "total_bicycle_count": return "Number of commutes by bicycle";
        case "total_bus_count": return "Number of commutes by bus";
        case "total_ferry_count": return "Number of commutes by ferry";
        case "total_home_count": return "Number of people working/studying from home";
        case "total_other_count": return "Number of commutes by other means";
        case "total_own_vehicle_count": return "Number of commutes using own vehicle";
        case "total_passenger_count": return "Number of commutes as a passenger";
        case "total_train_count": return "Number of commutes using train";
        case "total_walk_or_jog_count": return "Number of commutes walking or jogging"
        case "train_distance": return "Average commute distance using train"
        case "walk_or_jog_distance": return "Average commute distance walking or jogging"
        case "work_bicycle_count": return "Number of commutes to work by bicycle "
        case "work_bus_count": return "Number of commutes to work by bus"
        case "work_ferry_count": return "Number of commutes to work by ferry"
        case "work_home_count": return "Working from home"
        case "work_other_count": return "Number of commutes to work by other means"
        case "work_own_vehicle_count": return "Number of commutes to work using own vehicle";
        case "work_passenger_count": return "Number of commutes to work as passenger"
        case "work_train_count": return "Number of commutes to work by train"
        case "work_walk_or_jog_count": return "Number of commutes to work walking/jogging";
        default : return "";
    }
}

function key2HelpDescription(key){
    switch(key){
        default: return ""
    }
}

export default Destination;