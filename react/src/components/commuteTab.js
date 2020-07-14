import React, {useEffect, useRef, useState} from 'react';
import classnames from "classnames";
import {
    COMMUTE_METHOD_COLOUR,
} from '../constants';

// Icons
import home_selected from '../assets/coloured_icons/home.svg';
import train_selected from '../assets/coloured_icons/train.svg';
import bicycle_selected from '../assets/coloured_icons/bicycle.svg';
import bus_selected from '../assets/coloured_icons/bus.svg';
import ferry_selected from '../assets/coloured_icons/ferry.svg';
import own_vehicle_selected from '../assets/coloured_icons/own_vehicle.svg';
import passenger_vehicle_selected from '../assets/coloured_icons/passenger_vehicle.svg';
import walk_or_jog_selected from '../assets/coloured_icons/walk_or_jog.svg';
import other_selected from '../assets/coloured_icons/other.svg';

import home from '../assets/home.svg';
import train from '../assets/train.svg';
import bicycle from '../assets/bicycle.svg';
import bus from '../assets/bus.svg';
import ferry from '../assets/ferry.svg';
import own_vehicle from '../assets/own_vehicle.svg';
import walk_or_jog from '../assets/walk_or_jog.svg';
import other from '../assets/other.svg';

function CommuteTab({
    commuteType,
    currentCommuteTypes,
    setCurrentCommuteTypes,
}) {

    const commuteBtnRef = useRef(null);

    const [focused, setFocused] = useState(
        currentCommuteTypes.includes(commuteType)
    );

    const getIcon = () => {
        switch(commuteType){
            case "Stay home": return focused ? home_selected : home;
            case "Drive own vehicle": return focused ? own_vehicle_selected : own_vehicle;
            case "Passenger in vehicle": return focused ? passenger_vehicle_selected : own_vehicle;
            case "Train": return focused ? train_selected : train;
            case "Bicycle": return focused ? bicycle_selected: bicycle;
            case "Walk or jog": return focused ? walk_or_jog_selected : walk_or_jog;
            case "Bus": return focused ? bus_selected : bus;
            case "Ferry": return focused ? ferry_selected : ferry;
            case "Other": return focused ? other_selected : other;
            default: return other;
        }
    }

    const handleClick = (e) => {
        //if(e.target.classList.contains(commuteType)){
        
        // Check if this is the only active one, if so, do not disable it
        if(focused && currentCommuteTypes.length === 1){
            return;
        }
        const c = currentCommuteTypes;
        if(c.includes(commuteType)){
            // Remove from commute types
            c.splice(c.indexOf(commuteType), 1);
        } else {
            // Add to commute types
            c.push(commuteType)
        }
        // console.log('saving new commute types: ', c);
        
        // Need to use spread operator here to force the array to register as changed and propagate change to others using this state variable
        setCurrentCommuteTypes([...c]);
        setFocused(!focused);
        // console.log(
        //     commuteType, 
        //     currentCommuteTypes,
        //     // e.target.classList.contains(commuteType),
        //     focused
        //     // e.target.classList,
        //     // e.target.classList.contains(commuteType)
        // );
    }

    // console.log('focused: ', currentCommuteTypes.includes(commuteType));
    return (
        <div
            ref={commuteBtnRef} 
            className={classnames(
                "CommuteTab",
                //COMMUTE_METHOD_COLOUR[commuteType],
                {focused: focused}
            )}
            style={{
                color: focused ? COMMUTE_METHOD_COLOUR[commuteType] : "gray" 
            }}
            onClick={(e)=>{
                handleClick(e)
            }}
        >
            <img src={getIcon()} />
            <h4>{commuteType}</h4>
        </div>
    )
}

export default CommuteTab;