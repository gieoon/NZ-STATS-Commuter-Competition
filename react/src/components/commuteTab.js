import React, {useEffect, useRef, useState} from 'react';
import classnames from "classnames";
import {
    COMMUTE_TYPE_COLOUR_KEYS
} from '../constants';

// Icons
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

    const [focused, setFocused] = useState(true);

    useEffect(()=>{
        // console.log("useEffect: ", currentCommuteTypes);
    })

    const getIcon = () => {
        switch(commuteType){
            case "Stay home": return home;
            case "Drive own vehicle": return own_vehicle;
            case "Passenger in vehicle": return own_vehicle;
            case "Train": return train;
            case "Bicycle": return bicycle;
            case "Walk/jog": return walk_or_jog;
            case "Bus": return bus;
            case "Ferry": return ferry;
            case "Other": return other;
            default: return other;
        }
    }

    const handleClick = (e) => {
        //if(e.target.classList.contains(commuteType)){
        if(currentCommuteTypes.includes(commuteType)){
            // Remove from commute types
            currentCommuteTypes.splice(currentCommuteTypes.indexOf(commuteType), 1);
        } else {
            // Add to commute types
            currentCommuteTypes.push(commuteType)
        }
        
        setCurrentCommuteTypes(currentCommuteTypes);
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
                COMMUTE_TYPE_COLOUR_KEYS[commuteType],
                {focused: focused}
            )}
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