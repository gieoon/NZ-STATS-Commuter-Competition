import React, {
    useState, 
    useMemo, 
    useEffect, 
    useRef, 
    forwardRef,
    useImperativeHandle // Child only exposes certain properties to parent.
} from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import {useLocation, useHistory} from 'react-router-dom';
import L, { circle } from 'leaflet';
import '@elfalem/leaflet-curve'
import './leaflet.scss'; // as opposed to .scss file which is CSS-like, or .sass which is considered SASS
import {
    DATA_URL_ROOT,
    COMMUTE_METHOD_COLOUR,
    DB_2_COMMUTE_METHOD,
} from '../constants';
import {
    txt2Array
} from '../utils/commonFunctions';
// import { divIcon } from 'leaflet';
// import DivIcon from 'react-leaflet-div-icon';
// import arrow_right from '../assets/right.svg';
// import MarkerClusterGroup from "react-leaflet-markercluster";

const MIN_ZOOM = 5;
const MAX_ZOOM = 18;
const INITIAL_STROKE_WEIGHT = 1;
const HIGHLIGHTED_STROKE_WEIGHT = INITIAL_STROKE_WEIGHT * 3.5;
const STROKE_COUNT_MULTIPLIER = 0.1;
const INITIAL_OPACITY = .75;//0.35;
const OPACITY_MULTIPLIER = 0.01;
const HIGHLIGHTED_OPACITY = 1;

const curvesWork = {}, 
    curvesEducation = {},
    commuteWorkCurves = {},
    commuteEducationCurves = {};

// The curve that is currently selected on the map.    
var currentSelectedCurve = {};

// Allows for console debugging by calling >> curves in Chrome
// global.commuteWorkCurves = commuteWorkCurves; 
// global.commuteEducationCurves = commuteEducationCurves;

//forwardRef(
    function LeafletMap({
    setHoveredData,
    setHighlightedData,
    centroidData,
    currentMap,
    currentCommuteTypes,
    setCurrentDestinationData,
    setClickedData,
    mapRef,
}){
    

    // Center of New Zealand
    // const position = [173.299, -41.273]
    const position = [-41.273, 173.299]
    const topLeft = L.latLng(-31.154944, 150.138842); //162
    const bottomRight = L.latLng(-49.285522, 191.794907); // 179
    // console.log('centroidData: ', centroidData);
    // const [curvesWork, setCurvesWork] = useState({});
    // const [curvesEducation, setCurvesEducation] = useState({});

    const [circles, setCircles] = useState([]);

    // const mapRef = React.createRef();
    // const mapRef = useRef(null);

    const isInitialMount = useRef(true);

    // Need to save this because it becomes null after updates
    const [m, setMap] = useState();

    // The variables that we last requested from server, only request again if these have changed
    const [lastRequestedLatLng, setLastRequestedLatLng] = useState({
       left: 0,//162.138842,
       top: 0,//-31.15494,
       right: 0,//179.794907,
       bottom: 0,//-49.285522, 
    });

    // Data for zoom & boundary
    const [workZoneData, setWorkZoneData] = useState([]);

    const [educationZoneData, setEducationZoneData] = useState([]);

    const [commutePurpose, setCommutePurpose] = useState("TOTAL");

    const [currentLatLng, setCurrentLatLng] = useState({
        lat: position[0],
        lng: position[1],
        zoom: MIN_ZOOM,
    })

    const [searchUpdatedLocation, setSearchUpdatedLocation] = useState(false);

    // Circle highlighting current selection on the map
    const [currentPositionCircle, setCurrentPositionCircle] = useState(null);

    const [initializing, setInitializing] = useState(true);

    const location = useLocation();
    const history = useHistory();

    // useImperativeHandle(ref, () => {
    //     return {
    //         updateData: updateData()
    //     }
    // });

    // componentDidMount
    useEffect(()=>{
        L.control.scale().addTo(mapRef.current.leafletElement);

        // To make this function accessible from search
        // console.log(updateData);
        mapRef.current.leafletElement.updateData = updateData;
    },[])

    // useEffect(()=>{
    //     if(isInitialMount.current)
    //         isInitialMount.current = false;
    //     else {
    //         // console.log('update data called');
    //         updateData();
    //     }
    //     console.log(currentCommuteTypes)
    // }, [currentCommuteTypes])

    useEffect(()=>{
        // console.log('location changed: ', location.pathname)
        var reg = /[\-0-9.]+\/[\-0-9.]+\/[\-0-9.]+$/;
        // console.log(location.pathname)
        var match = location.pathname.match(reg);
        // console.log(match);
        if(match && match.length){
            var lat = match[0].split('/')[0];
            var lng = match[0].split('/')[1];
            var z = match[0].split('/')[2];
            // console.log("Location updated: ", match, lat, lng, z);
            // console.log("searchUpdatedLocation: ", searchUpdatedLocation);
            // Zoom into this location, but not the first time
            if(
                searchUpdatedLocation
                // currentLatLng.lat !== lat
                // || currentLatLng.lng !== lng
                // || currentLatLng.zoom !== z
            ){
                mapRef.current.leafletElement.setView([lat,lng], z); //9
                // var circle = createCurrentLatLngCircle(lat, lng);
                // setCurrentPositionCircle(circle);
                // console.log('update data called');
                updateData();
                
                setSearchUpdatedLocation(true);

            }
            setInitializing(false);
        }
    }, [location])

    useEffect(() => {
        setCommutePurpose(currentMap.option.toUpperCase());
        mapRef.current.leafletElement.commuteType = currentMap.option.toUpperCase();
        /*
        clearDrawnObjects(
            currentMap.option.toUpperCase() === "WORK"
            ? curvesEducation
            : curvesWork,
            currentMap.option.toUpperCase() === "WORK"
            ? "EDUCATION"
            : "WORK"
        );
        */
       clearDrawnObjectsCommute(
           currentMap.option.toUpperCase() === "WORK"
           ? commuteEducationCurves
           : commuteWorkCurves,
           currentMap.option.toUpperCase() === "WORK"
           ? "EDUCATION"
           : "WORK"
       )
    }, [
        currentMap.option,
    ])

    useEffect(() => {
        // Listen when bounds change so we can load different data
        // Disable current listeners
        mapRef.current.leafletElement.off('movestart');
        mapRef.current.leafletElement.on('movestart', updateData);

        // mapRef.current.leafletElement.off('moveend');
        // mapRef.current.leafletElement.on('moveend', updateData);


        // mapRef.current.leafletElement.off('viewreset');
        // mapRef.current.leafletElement.on('viewreset', updateData);

        // mapRef.current.leafletElement.off('zoomstart');
        // mapRef.current.leafletElement.on('zoomstart', updateDataAndCentroids);
        mapRef.current.leafletElement.off('zoomend');
        mapRef.current.leafletElement.on('zoomend', updateDataAndCentroids);
        // console.log('update data called');
        updateDataAndCentroids();
        
        
    },[
        commutePurpose,
        currentCommuteTypes
    ])

    const updateDataAndCentroids = () => {
        updateData();
        // updateCentroids();
    }

    const updateData = () => {
        setClickedData({});
        setCurrentDestinationData({
            from: "",
            to: ""
        })
        

        const map = mapRef.current.leafletElement;
        var bounds = map.getBounds();
        var center = bounds.getCenter();
            // {
            //     lat: currentLatLng.lat,
            //     lng: currentLatLng.lng,
            //     zoom: currentLatLng.zoom
            // };
        var zoom = map.getZoom();
        // console.log(center);
        // Update URL
        // setCurrentLatLng({
        //     lat: center.lat,
        //     lng: center.lng,
        //     zoom: zoom,
        // });
        // console.log('history: ', history);
        history.replace(`/location/${center.lat}/${center.lng}/${zoom}`)

        // console.log('requesting data with zoom: ', zoom);
        // If total, request both data types
        // Can also do if !== education, request work, if !== work, request education, so total will request both.
        if(commutePurpose === "TOTAL"){
            API_zoneData(bounds, zoom, "EDUCATION");
            API_zoneData(bounds, zoom, "WORK");
        } else {
            // Otherwise just search directly
            API_zoneData(bounds, zoom, commutePurpose);
        }

        // Circle information
        //TODO add this back in
        /*
        for(var c of centroidData[zoom]){
            createCircle(c.departure_LATITUDE, c.departure_LONGITUDE, c.cluster_count);
        }
        */
        
        
    }
/*
    const updateCentroids = () => {
        // return; //TODO NO ACTION FOR NOW
        if(!centroidData) 
            return;
        circles.forEach(circle => {
            console.log('deleting circle')
            circle.remove();
        })
        var ci = circles;
        ci.length = 0;
        setCircles(ci);

        // Load data for current centroids
        var zoom = mapRef.current.leafletElement.getZoom();

        for(var commuteMethod of currentCommuteTypes){
            //TODO this is hardcoded to 'work' for now
            var data = centroidData[`${"work"}_${commuteType2Key(commuteMethod)}_${zoom}`]
            console.log('data to draw: ',data);
            for(var c of data){
                createCircle(c.departure_LATITUDE, c.departure_LONGITUDE, c.cluster_count, commuteMethod, MAX_ZOOM - zoom);
            }
        }
        
    }
*/
    const updateCurrentSelectedCurve = (obj) => {
        
        if(Object.keys(currentSelectedCurve).length){
            // console.log('removing current selected curve')
            currentSelectedCurve.remove();
        }
        currentSelectedCurve = createCurve(
            Number(obj.departure_LONGITUDE), 
            Number(obj.departure_LATITUDE), 
            Number(obj.destination_LONGITUDE), 
            Number(obj.destination_LATITUDE),
            obj,
            true
        );
    }

    // console.log("centroidData: ", centroidData)

    const commuteType2Key = (commute_type) => {
        if(commute_type === "Stay home")
            return "home"
        else if(commute_type === "Drive own vehicle")
            return "own_vehicle"
        else if(commute_type === "Passenger in vehicle")
            return "passenger"
        else if(commute_type === "Train")
            return "train"
        else if(commute_type === "Bicycle")
            return "bicycle"
        else if(commute_type === "Walk or jog")
            return "walk_or_jog"
        else if(commute_type === "Bus")
            return "bus"
        else if(commute_type === "Ferry")
            return "ferry"
        else if(commute_type === "Ferry" || commute_type === "Other")
            return "other";
        else
            return commute_type
    }

    const key2CommuteType = (key) => {
        switch(key){
            case "WORK_AT_HOME": 
            case "STUDY_AT_HOME":
                return "Working/Studying from Home";
            case "DRIVE_OWN_VEHICLE": return "Driving own vehicle";
            case "PASSENGER_IN_VEHICLE": return "Passenger in vehicle (car/truck/van)";
            case "TRAIN": return "Train";
            case "BICYCLE": return "Bicycle";
            case "WALK_OR_JOG": return "Walking/Jogging";
            case "BUS": return "Bus";
            case "FERRY": return "Ferry";
            case "OTHER": return "Other";
            default: return "Other";
        }
    }

    const API_zoneData = async (bounds, zoom, type) => {
        // console.log('requesting data with type: ', type);
        // if(
        //        lastRequestedLatLng.top      !== bounds._northEast.lat
        //     && lastRequestedLatLng.bottom   !== bounds._southWest.lat
        //     && lastRequestedLatLng.left     !== bounds._southWest.lng
        //     && lastRequestedLatLng.right    !== bounds._northEast.lng
        // ){
            setLastRequestedLatLng({
                top: bounds._northEast.lat,
                bottom: bounds._southWest.lat,
                left: bounds._southWest.lng,
                right: bounds._northEast.lng,
            });
            var commuteTypes = "";
            for(var commuteType of currentCommuteTypes){
                commuteTypes += "&commute_type=" + commuteType2Key(commuteType);
            }

            // console.log("currentCommuteTypes: ", currentCommuteTypes)
            // Request new data
            fetch(
                DATA_URL_ROOT + `/zoneData?left=${bounds._southWest.lng}&top=${bounds._northEast.lat}&right=${bounds._northEast.lng}&bottom=${bounds._southWest.lat}&zoom=${zoom}&data_type=${type.toLowerCase()}${commuteTypes}`,
            ).then(async (d)=>{
                const data = await d.json();
                if(type === "WORK"){
                    // setWorkZoneData(data);
                    updateCurvesCommute(data, "WORK");
                }
                if(type === "EDUCATION"){
                    // setEducationZoneData(data);
                    updateCurvesCommute(data, "EDUCATION");
                }
            })
            .catch(err => {
                console.error("Error fetching data: ", err);
            })
        // }
    }

    const updateCurvesCommute = (d, dataType) => {
        if(!d) return;
        var curvesToAdd = checkCurvesExistCommute(d, dataType);
        for(var commuteType of Object.keys(curvesToAdd)){
            for(var r of curvesToAdd[commuteType]){
                const curve = createCurve(
                    Number(r.departure_LONGITUDE), 
                    Number(r.departure_LATITUDE), 
                    Number(r.destination_LONGITUDE), 
                    Number(r.destination_LATITUDE),
                    r,
                    false
                );
                if(dataType === "WORK"){
                    if(!commuteWorkCurves[commuteType])
                        commuteWorkCurves[commuteType] = {};
                    commuteWorkCurves[commuteType][r.id] = curve;
                }
                else if(dataType === "EDUCATION"){
                    if(!commuteEducationCurves[commuteType])
                        commuteEducationCurves[commuteType] = {};
                    commuteEducationCurves[commuteType][r.id] = curve;
                }
            }
        }
    }

    const updateCurves = (d, dataType) =>{
        if(!d) return;
        var curvesToAdd = checkCurvesExist(d, dataType); //checkCurvesExist(d, dataType);
        for(var r of curvesToAdd){
            const curve = createCurve(
                Number(r.departure_LONGITUDE), 
                Number(r.departure_LATITUDE), 
                Number(r.destination_LONGITUDE), 
                Number(r.destination_LATITUDE),
                r,
                false
            );
            if(dataType === "WORK"){
                curvesWork[r.id] = curve;
            }
            else if(dataType === "EDUCATION"){
                curvesEducation[r.id] = curve;
            }
        }
    }

    const checkCurvesExistCommute = (newData, dataType) => {
        var toAdd = {};
        // What is actually drawn on the screen right now
        const toDelete = dataType === "WORK" 
        ? commuteWorkCurves : commuteEducationCurves;
        
        // console.log("newData: ", newData);
        // global.newData = newData;
        // console.log("newData: ", Object.keys(newData));
        for(var commuteType of Object.keys(newData)){
            // console.log('handling commuteType: ', commuteType, newData[commuteType]);
            toAdd[commuteType] = [];
            var d = txt2Array(newData[commuteType])
            // console.log(commuteType, d);
            for(var r of d){
                // If new curve is not in existing curves, add it to list of new curves
                if(!toDelete[r.id]){
                    toAdd[commuteType].push(r);
                }
            }
    
        }
        clearDrawnObjectsCommute(toDelete, dataType);

        return toAdd;
    }

    // Checks if the curve is already drawn on the map, if it is, exclude it.
    // Returns the new curves to add to the map
    const checkCurvesExist = (newData, dataType) => {
        // Dictionary of row id;
        var toAdd = [];
        const toDelete = (dataType === "WORK" ? curvesWork : curvesEducation);

        // If too many curves, don't show everything.

        // If the new curve is not in the existing curves, remove it.

        for(var r of newData){
            // If new curve is not in existing curves, add it to list of new curves
            if(!toDelete[r.id]){
                toAdd.push(r);
            }
            // If new curve is in existing curves, it means it is already drawn, 
            // delete it from the toRemove dictionary
            if(toDelete[r.id]){
                // toDelete[r.id] = undefined;
                // delete toDelete[r.id];
            }
            // If commute purpose is education, and key starts with 'E'
            // Delete until proven otherwise.
            // if((dataType === "EDUCATION" && commutePurpose !== "TOTAL") && r.id.substring(0,1) === 'W'){
                // toDelete[r.id] = undefined;
                // delete toDelete[r.id];
            // }
            // if((dataType === "WORK" && commutePurpose !== "TOTAL") && r.id.substring(0, 1) === 'E') {
                // toDelete[r.id] = undefined;
                // delete toDelete[r.id];
            // }
            
            // Otherwise leave it in the array to be removed as it no longer should be drawn
        }

        // console.log("actually removing: ", Object.keys(toDelete).length);

        // clearDrawnObjects(toDelete, dataType);

        return toAdd;
    }
    
    const clearDrawnObjectsCommute = (toDelete, dataType) => {
        
        for(var commuteType of Object.keys(toDelete)){
            
            for(var id of Object.keys(toDelete[commuteType])){
                for(var el of Array.from(document.getElementsByClassName(id))){
                    if(el){
                        // console.log('removing curve from DOM');
                        el.classList.remove('pathFadeIn');
                        el.classList.add('pathFadeOut');
                        // Wait for animation to expire and remove from DOM
                        el.remove();
                    }
                }
                if(dataType === "WORK"){
                    // console.log("removing curve from memory");
                    commuteWorkCurves[commuteType][id].remove();
                    commuteWorkCurves[commuteType][id] = undefined;
                    delete commuteWorkCurves[commuteType][id];
                }
                else if(dataType === "EDUCATION"){
                    // console.log("removing curve from memory");
                    commuteEducationCurves[commuteType][id].remove();
                    commuteEducationCurves[commuteType][id] = undefined;
                    delete commuteEducationCurves[commuteType][id];
                }
            }
        }

        checkCurveMemorySize();
        
    }

    // Disable on production
    const checkCurveMemorySize = () => {
        var totalWork = 0, totalEducation = 0;
        for(var commuteType of Object.values(commuteWorkCurves)){
            totalWork += Object.keys(commuteType).length;
        }
        for(var commuteType of Object.values(commuteEducationCurves)){
            totalEducation += Object.keys(commuteType).length;
        }
        // console.log("total work: ", totalWork)
        // console.log("total education: ", totalEducation);
    }

    /*
    const clearDrawnObjects = (toDelete, dataType) => {
        // console.log("deleting data: ", Object.keys(toDelete).length);
        // console.log(curvesWork);
        // console.log(curvesEducation);
        for(var id of Object.keys(toDelete)){
            // var el = document.getElementById(id);
            for(var el of Array.from(document.getElementsByClassName(id))){
                if(el){
                    el.classList.remove('pathFadeIn');
                    el.classList.add('pathFadeOut');
                    // Wait for animation to expire and remove from DOM
                    el.remove();
                }
            }
            if(dataType === "WORK"){
                curvesWork[id].remove();
                curvesWork[id] = undefined;
                delete curvesWork[id];
            }
            else if(dataType === "EDUCATION"){
                curvesEducation[id].remove();
                curvesEducation[id] = undefined;
                delete curvesEducation[id];
            }
        };

        // toRemove = {};
        // var c = curves;
        // c.length = 0;
        // console.log("current curves: ", curves);
        // setCurves(curves);

        circles.forEach(circle => {
            circle.remove();
        })
        var ci = circles;
        ci.length = 0;
        setCircles(ci);
    }
    */

    const createStayAtHomeCircle = (lat, lon, obj) => {
        // console.log('creating stay at home data');
        var circleCenter = [lat, lon];
        var options = {
            // weight: 1.5,
            color: 'rgba(0,0,0,0)',
            fillColor: '#f54242',
            fillOpacity: 0.7,
        }
        var radius = Number(obj.COUNT) * .1 + 2;
        radius *= (MAX_ZOOM - mapRef.current.leafletElement.getZoom()) ** 1.6;

        const circle = L.circle(circleCenter, radius, options)
            .on('mouseover', (e) => {
                // console.log('mouseover stayathome circle: ', obj);
                createStayAtHomePopup(e, obj)
            })
            .on('mousedown', (e) => {
                setClickedData(obj);
                setCurrentDestinationData({
                    from: obj.SA2_name_usual_residence_address,
                    to: obj.SA2_name_workplace_address
                })
            })
            .on('mouseout', (e) => {
                mapRef.current.leafletElement.closePopup();
            })
            .addTo(mapRef.current.leafletElement);
        return circle;
    }

    // Draw cluster circles.
    const createCircle = (lat, lon, clusterCount, commuteType, amplifyAmt) => {
        var circleCenter = [lat, lon];
        // console.log(COMMUTE_METHOD_COLOUR, commuteType, COMMUTE_METHOD_COLOUR[commuteType])
        var options = {
            weight: 1.5,
            color: 'rgba(255,0,0,0)',//'rgba(255,0,0,.35)',
            fillColor: COMMUTE_METHOD_COLOUR[commuteType],
            fillOpacity: 0.5,//0.35,
        }

        // Radius dependent on number of commutes in this circle.
        var radius = clusterCount / 2000 + 2; //3.25
        if(amplifyAmt)
            radius *= amplifyAmt ** 4.2;
        console.log('amplifyAmt: ', amplifyAmt)
        // console.log(L.divIcon)
        // L.divIcon({
        //     className: '',
        //     html: `
        //         <div>
        //             <p>${clusterCount}</p>
        //         </div>
        //     `
        // }).addTo(mapRef.current.leafletElement);
        
        const circle = L.circle(circleCenter, radius, options)
            .addTo(mapRef.current.leafletElement);
        circles.push(circle);
    }  
    /*
    const createCurrentLatLngCircle = () => {
        if(currentPositionCircle !== null)
            currentPositionCircle.remove();

        var circleCenter = [currentLatLng.lat, currentLatLng.lng];
        var options = {
            weight: 1.5,
            color: 'rgba(0,0,255,.5)',
            fillColor: '#f03',
            fillOpacity: 0.35,
        }

        // Radius dependent on number of commutes in this circle.
        var radius = 2500;

        var circle = L.circle(circleCenter, radius, options)
            .addTo(mapRef.current.leafletElement);
        return circle;
    }
    */

    const createCurve = (lon1, lat1, lon2, lat2, obj, b_currentSelectedCurve) => {
        // Draw a circle if it is stay at home
        // console.log(obj.COMMUTE_TYPE);
        if(['STUDY_AT_HOME','WORK_AT_HOME'].includes(obj.COMMUTE_TYPE)){
            return createStayAtHomeCircle(lat1, lon1, obj);
        }

        const points = [];
        var delta_x = lon2 - lon1,
            delta_y = lat2 - lat1;
        
        var r = Math.sqrt(Math.pow(delta_x, 2) + Math.pow(delta_y, 2)),
        theta = Math.atan2(delta_y, delta_x);

        var thetaOffset = (3.14 / 10);

        var r2 = (r / 2) / (Math.cos(thetaOffset)),
        theta2 = theta + thetaOffset;

        var midpointX = (r2 * Math.cos(theta2)) + lon1,
            midpointY = (r2 * Math.sin(theta2)) + lat1;

        var midpointLatLng = [midpointY, midpointX];

        points.push([lon1, lat1], midpointLatLng, [lon2, lat2]);

        var pathOptions = {
            // color: dataType === "WORK" 
            //     ? COMMUTE_PURPOSE_COLOUR.WORK 
            //     : COMMUTE_PURPOSE_COLOUR.EDUCATION,
            color: COMMUTE_METHOD_COLOUR[DB_2_COMMUTE_METHOD[obj.COMMUTE_TYPE]],
            weight: b_currentSelectedCurve
                ? HIGHLIGHTED_STROKE_WEIGHT + (Number(obj.COUNT) * STROKE_COUNT_MULTIPLIER + 1.5)
                : INITIAL_STROKE_WEIGHT + (Number(obj.COUNT) * STROKE_COUNT_MULTIPLIER),
            opacity: b_currentSelectedCurve
                ? HIGHLIGHTED_OPACITY
                : INITIAL_OPACITY + (Number(obj.COUNT) * OPACITY_MULTIPLIER),
        }

        // const map = L.map('sampleMap')

        const curve = L.curve([
            'M',
            //[lon1, lat1],
            [lat1, lon1],
            'Q',
            midpointLatLng,
            [lat2, lon2]//[lon2, lat2]
        ], pathOptions)
        .on('mouseover', function(e) {
            // console.log('mouseover: ', obj)

            if(!b_currentSelectedCurve){
                this.setStyle({
                    weight: HIGHLIGHTED_STROKE_WEIGHT + (Number(obj.COUNT) * STROKE_COUNT_MULTIPLIER),
                    opacity: HIGHLIGHTED_OPACITY,
                })
                setHoveredData({
                    hoveredData: obj,
                    hoveredDestination: obj.destination_SA22018_V1_NAME//f.properties.NAME_1
                });
                setHighlightedData(obj)
                // console.log(obj)
                createPopup(e, obj);
            }

        })
        .on('mouseout', function() {
            if(!b_currentSelectedCurve){
                this.setStyle({
                    weight: INITIAL_STROKE_WEIGHT + (Number(obj.COUNT) * STROKE_COUNT_MULTIPLIER),
                    opacity: INITIAL_OPACITY + (Number(obj.COUNT) * OPACITY_MULTIPLIER),
                })
                mapRef.current.leafletElement.closePopup();
            }
        })
        .on('mousedown', function(){
            // console.log('path clicked, ', obj)
            setClickedData(obj);
            setCurrentDestinationData({
                from: obj.SA2_name_usual_residence_address,
                to: obj.SA2_name_workplace_address
            })
            updateCurrentSelectedCurve(obj);
        })
        //.addTo(mapRef.current.leafletElement)
        .addTo(mapRef.current.leafletElement)
        // console.log(curve._path);
        // curve._path.id = obj.id;
        curve._path.classList.add(obj.id);
        curve._path.classList.add('pathFadeIn');
        // curves.push(curve);
        // console.log(mapRef.current.leafletElement)
        return curve;  
    }

    const createPopup = (e, obj) => {
        L.popup({
            closeButton: false,
            autoPan: false,
        })
            .setLatLng(e.latlng)
            .setContent(
                '<p><b>' + obj.DEPARTURE_NAME_1 + ', ' + obj.SA2_name_usual_residence_address
                + ' → '//' > ' //<img src={arrow_right} alt="" /> 
                + obj.DESTINATION_NAME_1 + ', ' + (obj.SA2_name_workplace_address || obj.SA2_name_educational_address) + '</p>'

                + '<p>' + Number(obj.HAVERSINE_DISTANCE).toFixed(2) + 'km <span class="' + obj.COMMUTE_TYPE + '">' + key2CommuteType(obj.COMMUTE_TYPE) + '</span></p></b>'
                + '<hr/>'
                // + '<div style="display:flex;justify-content:space-between;"><div><b>' + obj.COUNT + '</b> people ' + '</div><div><span class="' + obj.COMMUTE_TYPE + '">' + key2CommuteType(obj.COMMUTE_TYPE) + '</span></div></div>'
                + '<div><b>' + obj.COUNT + '</b> people ' + '</div>'
                + '<p>Commuting for <b>' + obj.TYPE.toLowerCase() + '</b></p>' //obj.TYPE.charAt(0) + obj.TYPE.substring(1).toLowerCase() + 
            )
            // .addTo(mapRef.current.leafletElement);
            .openOn(mapRef.current.leafletElement);
    }

    const createStayAtHomePopup = (e, obj) => {
        L.popup({
            closeButton: false,
            autoPan: false,
        })
            .setLatLng(e.latlng)
            .setContent(
                '<p><b>' + obj.DEPARTURE_NAME_1 + ', ' + obj.SA2_name_usual_residence_address
                + '<p><span class="' + obj.COMMUTE_TYPE + '">' + key2CommuteType(obj.COMMUTE_TYPE) + '</span></p></b>'
                + '<hr/>'
                + '<div><b>' + obj.COUNT + '</b> people ' + '</div>'
                + '<p>Commuting for <b>' + obj.TYPE.toLowerCase() + '</b></p>' //obj.TYPE.charAt(0) + obj.TYPE.substring(1).toLowerCase() + 
            )
            // .addTo(mapRef.current.leafletElement);
            .openOn(mapRef.current.leafletElement);
    }
    

    /*
    const pathOne = [
        'M', [50.14874640066278, 14.106445312500002],
        'Q', [51.67255514839676, 16.303710937500004],
        [50.14874640066278, 18.676757812500004],
        'T', [49.866316729538674, 25.0927734375]
    ]
    */

    return(
        <Map
            ref={mapRef}
            center={position} 
            zoom={MIN_ZOOM}  //13
            zoomControl={true}
            maxBounds={L.latLngBounds(topLeft, bottomRight)}
            minZoom={5}
            maxZoom={MAX_ZOOM}
            layers={[]}

            // setPath={createCurve(170.138842, -31.154944, 179.794907, -49.285522)}
        >
            {/* {console.log("mapRef.current ", mapRef.current)} */}
            <TileLayer
                // This defines what kind of tiles we want, and the type of the map
                // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

                // jun.a.kagaya@gmail.com
                // url="https://api.maptiler.com/maps/basic/{z}/{x}/{y}.png?key=9Ada5vIEJbJjNQrKmV7i"
                // a.jun.kagaya@gmail.com
                url="https://api.maptiler.com/maps/basic/{z}/{x}/{y}.png?key=tYXqZFaglZBPM8w9KlP7"
                //attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                // url="http://tile.stamen.com/terrain/{z}/{x}/{y}.jpg"
                // url="http://tile.stamen.com/watercolor/{z}/{x}/{y}.jpg"
                // url="http://b.tile.openstreetmap.fr/hot/${z}/${x}/${y}.png"
                // WHEN USING HTTPS
                // url="https://stamen-tiles.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg"
                // url="http://tile.stamen.com/toner/{z}/{x}/{y}.png"
                // attribution='Map tiles by <a href="http://stamen.com" style="pointer-events: initial;">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0" style="pointer-events: initial;">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org" style="pointer-events: initial;">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright" style="pointer-events: initial;">ODbL</a>.'
                attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
            />
            
        </Map>
    );
}
//)

export default LeafletMap;


{/* <Marker position={position}>
                    <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
                </Marker> */}

                {/* <Curve positions={pathOne} option={{color:'red',fill:true}}/> */}


// setDataType("TOTAL");
// console.log(mapRef.current.leafletElement)
// if(!m){
//     // console.log("assigning map: ", mapRef.current.leafletElement)
//     setMap(mapRef.current.leafletElement);
// }

        

/*
var legend = L.control()//({ position: "topright" });
legend.onAdd = function(map){
    var div = L.DomUtil.create('div', 'info legend');

    for (var commutePurpose of Object.keys(COMMUTE_PURPOSE_COLOUR)){
        div.innerHTML += 
            '<i style="background:' + COMMUTE_PURPOSE_COLOUR[commutePurpose] + '"></i> ' + 
            '<span>' + commutePurpose + '</span>';
    }
    return div;
}
legend.addTo(mapRef.current.leafletElement);
*/

/*
var bounds = mapRef.current.leafletElement.getBounds();
console.log(bounds)
// Load initial data
const zoom = mapRef.current.leafletElement.getZoom();
// const dataType = currentMap.option.toUpperCase();
// If total, request both data types
if(commutePurpose === "TOTAL"){
    API_zoneData(bounds, zoom, "EDUCATION");
    API_zoneData(bounds, zoom, "WORK");
} else {
    // Otherwise just search directly
    API_zoneData(bounds, zoom, commutePurpose);
}
*/

/*
{
    {
    _northEast: {
        lat: lastRequestedLatLng.top, 
        lng: lastRequestedLatLng.right
    },
    _southWest: {
        lat: lastRequestedLatLng.bottom, 
        lng: lastRequestedLatLng.left
    }
}
*/
// mapRef.current.leafletElement.commuteType = "TOTAL";

// If incoming data is work, and row is education, then ignore it.
        // if(commutePurpose === "TOTAL"){
        //     Object.keys(toDelete).forEach((id)=>{
        //         if(id.substring(0,1) !== dataType.substring(0,1)){
        //             toDelete[id] = undefined;
        //             delete toDelete[id];
        //         }
        //     })
        // } 
        // else if(dataType === "EDUCATION" && commutePurpose === "TOTAL"){
        //     Object.keys(toDelete).forEach((id)=>{
        //         console.log(id)
        //         if(id.substring(0,1) === 'W'){
        //             toDelete[id] = undefined;
        //             delete toDelete[id];
        //         }
        //     })
        // }