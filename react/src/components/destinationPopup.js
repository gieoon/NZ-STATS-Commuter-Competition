// The popup for the destination, using useChain to create sexy effect

import React, {useRef, useState, useEffect } from 'react';
import { 
    useTransition, 
    useSpring,
    useChain,
    config
} from 'react-spring';



import { animated } from 'react-spring'
import styled, { createGlobalStyle } from 'styled-components'



export default function DestinationPopup({
    open,
    setOpen,
    name1,
    name,
    data
}){
    // console.log("name, data: ",name, data);

    const [hide, setHide] = useState(true);

    const springRef = useRef();

    const topRef = useRef();
    const {top}  = useSpring({
        ref: topRef,
        from: {
            top: '-500px'
        },
        to: {
            top: open ? '0px' : '-500px',
        }
    })
    // console.log(top, topRef);

    const {size, opacity, ...rest } = useSpring({
        ref: springRef,
        config: config.stiff,
        from: { 
            size: '20%', 
            background: '#161625' ,
            opacity: 0,
        },
        to: { 
            size: open ? '100%' : '20%', 
            background: open ? '#161625' : '#1e1e30',
            opacity: open ? 1 : 0,
        }
    })

    const transRef = useRef();
    const transitions = useTransition(open ? data : [], item => item[0], {
        ref: transRef,
        unique: true,
        trail: 400 / data.length,
        from: { opacity: 0, transform: 'scale(0)' },
        enter: { opacity: 1, transform: 'scale(1)' },
        leave: { opacity: 0, transform: 'scale(0)' }
    })

    useEffect(()=>{
        setTimeout(()=>{
            setHide(!open);
        }, 250)
    },[open])
    
    // Turn these into a sequence of animations
    useChain(open ? [topRef, springRef, transRef] : [transRef, springRef, topRef], [0, open ? 0.15 : 0.3])
    
    return (
        <div>
        <Background 
            id="background"
            onClick={(e)=>{
                // Only close for background, not inner contents
                if(e.target.id === "background"){
                    setOpen(!open)
                    
                }
            }}
            style={{
                display: hide ? 'none' : 'block',
                opacity: opacity,
            }}
        >
        </Background>

        <Wrapper>
            <Container 
                style={{...rest, width: size, height: size, top: top, opacity: opacity }}
                // onClick={()=>set(open => !open)}
            >
                {
                    open
                    ? <>
                        <TopDescription>Details about this location</TopDescription>
                        <Header>{name1 + ", "}<br/>{name}</Header>
                    </>
                    : ""
                }
                <Contents>
                {
                    transitions.map(({item, key, props}) => (
                        <Item key={key} style={{ ...props, background: '#1e1e30' }}>
                            <>
                                <div style={{color:'#6c757d',marginBottom:"4px"}}>{key2Display(item[0])}</div>
                                <div style={{color:'white'}}>{
                                    key2Display(item[0]).includes('distance')
                                    ? Number(item[1]).toFixed(2) + 'km'
                                    : key2Display(item[0]).includes('common')
                                    ? item[1]
                                    : key2Display(item[0]).includes('people')
                                    ? Number(item[1]).toFixed() + ' people'
                                    : key2Display(item[0]).includes('trips')
                                    ? Number(item[1]).toFixed() + ' trips'
                                    : Number(item[1]).toFixed()
                                }</div>
                            </>
                        </Item>
                    ))
                }
                </Contents>
            </Container>
        </Wrapper>
        </div>
    );
}

const Background = styled(animated.div)`
    position: fixed;
    top: -8px;
    left: 0;
    height: calc(100vh + 8px);
    width: 100vw;
    background-color: rgba(0,0,0,.2);
    z-index: 1001;
`

const Wrapper = styled(animated.div)`
  position: fixed;
  left: calc(408px + 8px + 8px + 8px);
  top: calc(8px);
  z-index: 9999;
`
const TopDescription = styled(animated.h6)`
    margin: 0;
    font-weight: 200;
    /* opacity: .45; */
    color: rgb(108, 117, 125);
`

const Header = styled(animated.h1)`
    margin-top: 8px;
`

const Contents = styled(animated.div)`
    max-height: 70vh;
    overflow-y: scroll; 
`

const Container = styled(animated.div)`
  position: relative;
  display: block;
  max-width: 300px;
//   display: grid;
//   grid-template-columns: repeat(4, minmax(100px, 1fr));
//   grid-gap: 25px;
  padding: 25px;
  background: white;
  border-radius: 6px;
  cursor: pointer;
  box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.05);
  will-change: width, height;
`

const Item = styled(animated.div)`
//   width: 100%;
  height: 100%;
  font-family: 'archia';
  font-size: 12px;
  background: white;
  border-radius: 5px;
  will-change: transform, opacity;
  margin: 8px auto;
  margin-right: 12px;
  padding: 6px;
`

// const Global = createGlobalStyle`
//   * {
//     box-sizing: border-box;
//   }`

//   html,
//   body,
//   #root {
//     margin: 0;
//     padding: 0;
//     height: 100%;
//     width: 100%;
//     overflow: hidden;
//     user-select: none;
//     background: lightblue;
//     padding: 20px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }
// `



const key2Display = (key) => {
    switch(key){
        case 'SA2_name_usual_residence_address': return 'name';
        case 'number_of_commutes_departing': return 'Number of commute trips departing from here';
        case 'number_of_commutes_arriving': return 'Number of commute trips arriving here';
        case 'number_of_people_commuting': return 'Number of people commuting from here';
        case 'average_distance_of_departing_commute': return 'Average distance of commutes departing from here';
        case 'average_distance_of_arriving_commute': return 'Average distance of commutes arriving here';
        // case 'total_bicycle_count': return 'Total number of commute trips by bicycle';
        // case 'total_bus_count': return 'Total number of commute trips by bus';
        // case 'total_ferry_count': return 'Total number of commute trips by ferry';
        // case 'total_home_count': return 'Number of people working from home in this region'
        // case 'total_other_count': return 'Total number of people commuting by other means'
        // case 'total_own_vehicle_count': return 'Total number commute trips using own vehicle'
        // 'total_passenger_count',
        // 'total_train_count',
        // 'total_walk_or_jog_count',
        case 'education_bicycle_count': return 'Number of people commuting to school by bicycle'
        case 'education_bus_count': return 'Number of people commuting to school by bus';
        case 'education_ferry_count': return 'Number of people commuting to school by ferry'
        case 'education_home_count': return 'Number of people studying from home'
        case 'education_other_count': return 'Number of people commuting to school by other means'
        case 'education_own_vehicle_count': return 'Number of people commuting to school using their own vehicle'
        case 'education_passenger_count': return 'Number of people commuting to school as a passenger in a car/truck/van'
        case 'education_train_count': return 'Number of people commuting to school by train'
        case 'education_walk_or_jog_count': return 'Number of people commuting to school walking/jogging'
        case 'work_bicycle_count': return 'Number of people commuting to work on bicycle'
        case 'work_bus_count': return 'Number of people commuting to work oby bus'
        case 'work_ferry_count': return 'Number of people commuting to work by ferry'
        case 'work_home_count': return 'Number of people working from home'
        case 'work_other_count': return 'Number of people commuting to work by other means'
        case 'work_own_vehicle_count': return 'Number of people commuting to work using their own or a company vehicle'
        case 'work_passenger_count': return 'Number of people commuting to work as a passenger'
        case 'work_train_count': return 'Number of people commuting to work by train'
        case 'work_walk_or_jog_count': return 'Number of people commuting to work walking/jogging'
        case 'common_destination_1': return 'Most common destination for people commuting from here'
        case 'common_destination_2': return 'Second most common destination for people commuting from here'
        case 'common_destination_3': return 'Third most common destination for people commuting from here'
        case 'common_arrival_1': return 'Most common destination for people commuting here'
        case 'common_arrival_2': return 'Second most common destination for people commuting here'
        case 'common_arrival_3': return 'Third most common destination for people commuting here';
        case 'bicycle_distance': return 'Average distance commuting on bicycle';
        case 'bus_distance': return 'Average distance of commute by bus'
        case 'ferry_distance': return 'Average distance of commute by ferry'
        // case 'home_distance': return 'Average distance '
        case 'other_distance': return 'Average distance of commute by other means';
        case 'own_vehicle_distance': return 'Average distance of commute using own vehicle'
        case 'passenger_distance': return 'Average distance of commute as a passenger in car/truck/van';
        case 'train_distance': return 'Average distance of commute by train';
        case 'walk_or_jog_distance': return 'Average distance of commute walking/jogging';
        default: return "";
    }
  }
  
  
  