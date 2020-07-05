import React, {useState, useMemo, useEffect, useRef} from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import {useLocation} from 'react-router-dom';
import L from 'leaflet';
import '@elfalem/leaflet-curve'
import './leaflet.scss';
import {
    DATA_URL_ROOT,
    COMMUTE_PURPOSE_COLOUR,
} from '../constants';
import {
    txt2Array
} from '../utils/commonFunctions';
// import { Curve } from 'react-leaflet-curve';

const MIN_ZOOM = 5;
const MAX_ZOOM = 13;
const INITIAL_STROKE_WEIGHT = 1;
const HIGHLIGHTED_STROKE_WEIGHT = INITIAL_STROKE_WEIGHT * 3.5;

function LeafletMap({
    setHoveredData,
    setHighlightedData,
    centroidData,
    currentMap,
    history,
}){
    // Center of New Zealand
    // const position = [173.299, -41.273]
    const position = [-41.273, 173.299]
    const topLeft = L.latLng(-31.154944, 150.138842); //162
    const bottomRight = L.latLng(-49.285522, 191.794907); // 179

    const curves = [];
    const circles = [];

    // const mapRef = React.createRef();
    const mapRef = useRef(null);

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
    })

    // Circle highlighting current selection on the map
    const [currentPositionCircle, setCurrentPositionCircle] = useState(null);

    const [initializing, setInitializing] = useState(true);

    const location = useLocation();

    useEffect(()=>{
        L.control.scale().addTo(mapRef.current.leafletElement);
    },[])

    useEffect(()=>{
        // console.log("Location updated: ", location);
        var reg = /[\-0-9.]+\/[\-0-9.]+$/;
        var match = location.pathname.match(reg);
        if(match && match.length){
            var lat = match[0].split('/')[0];
            var lng = match[0].split('/')[1];
            // console.log(lat, lng);
            setCurrentLatLng({
                lat: lat,
                lng: lng
            });
            // Zoom into this location, but not the first time
            if(!initializing){
                mapRef.current.leafletElement.setView([lat,lng], 9);
                var circle = createCurrentLatLngCircle(lat, lng);
                setCurrentPositionCircle(circle);
            }
            setInitializing(false);
        }
        updateData();
    }, [location])

    useEffect(() => {
        // console.log('currentMap.option: ', currentMap.option);
        setCommutePurpose(currentMap.option.toUpperCase());
        mapRef.current.leafletElement.commuteType = currentMap.option.toUpperCase();
        // console.log('set data type: ', currentMap.option.toUpperCase());
        // console.log("commutePurpose: ", commutePurpose);
    }, [
        currentMap.option,
        // commutePurpose,
    ])

    useEffect(() => {
        // Listen when bounds change so we can load different data
        mapRef.current.leafletElement.off('moveend');
        mapRef.current.leafletElement.on('moveend', updateData);

        updateData();
    },[
        commutePurpose
    ])

    const updateData = () => {
        const map = mapRef.current.leafletElement;
        var bounds = map.getBounds();
        var zoom = map.getZoom();
        console.log('current zoom level: ', zoom)
        
        curves.forEach(curve => {
            console.log('removing curve');
            curve.remove();
        })
        curves.length = 0;

        circles.forEach(circle => {
            circle.remove();
        })
        circles.length = 0;

        //const dataType = currentMap.option.toUpperCase();
        console.log("updating data with commutePurpose: ", commutePurpose);
        // const c = mapRef.current.leafletElement.commutePurpose;
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
        for(var c of centroidData[zoom]){
            // console.log(c);
            createCircle(c.departure_LATITUDE, c.departure_LONGITUDE, c.cluster_count);
        }
        // console.log(centroidData[zoom])
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
            // Request new data
            fetch(
                DATA_URL_ROOT + `/zoneData?left=${bounds._southWest.lng}&top=${bounds._northEast.lat}&right=${bounds._northEast.lng}&bottom=${bounds._southWest.lat}&zoom=${zoom}&data_type=${type}`,
            ).then(async (d)=>{
                console.log("zone data: ");
                // setZoneData(d);
                // return await d.json();
                const data = txt2Array(await d.text());

                if(type === "WORK"){
                    setWorkZoneData(data);
                    // setEducationZoneData([]);
                    updateCurves(data, "WORK");
                }
                if(type === "EDUCATION"){
                    // setWorkZoneData([]);
                    setEducationZoneData(data);
                    updateCurves(data, "EDUCATION");
                }
            })
            .catch(err => {
                console.error("Error fetching data: ", err);
            })
        // }
    }

    const updateCurves = (d, dataType) =>{
        // console.log('updating zone data: ', d);
        if(!d) return;
        for(var r of d){
            createCurve(
                Number(r.departure_LONGITUDE), 
                Number(r.departure_LATITUDE), 
                Number(r.destination_LONGITUDE), 
                Number(r.destination_LATITUDE),
                r,
                dataType
            );
        }
    }

    // Draw cluster circles.
    const createCircle = (lat, lon, clusterCount) => {
        var circleCenter = [lat, lon];
        var options = {
            weight: 1.5,
            color: 'rgba(255,0,0,.35)',
            fillColor: '#f03',
            fillOpacity: 0.35,
        }

        // Radius dependent on number of commutes in this circle.
        var radius = clusterCount * 3.25 + 2500;

        const circle = L.circle(circleCenter, radius, options)
            .addTo(mapRef.current.leafletElement);
        circles.push(circle);
    }  
    
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

    const createCurve = (lon1, lat1, lon2, lat2, obj, dataType) => {
        // console.log(lon1,lat1,lon2,lat2);
        // console.log(mapRef.current, document.getElementById('mapObj').leafletElement);

        // if(mapRef.current === null) return;
        // console.log(mapRef)
        // console.log('mapRef is not null');
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
            color: dataType === "WORK" 
                ? COMMUTE_PURPOSE_COLOUR.WORK 
                : COMMUTE_PURPOSE_COLOUR.EDUCATION,
            weight: INITIAL_STROKE_WEIGHT,
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
            // console.log('mouseover: ', e, obj)
            this.setStyle({
                weight: HIGHLIGHTED_STROKE_WEIGHT
            })
            setHoveredData({
                hoveredData: obj,
                hoveredDestination: obj.destination_SA22018_V1_NAME//f.properties.NAME_1
            });
            setHighlightedData(obj)
        })
        .on('mouseout', function() {
            this.setStyle({
                weight: INITIAL_STROKE_WEIGHT
            })
        })
        //.addTo(mapRef.current.leafletElement)
        .addTo(m || mapRef.current.leafletElement)
        curves.push(curve);
        // console.log(mapRef.current.leafletElement)
        // return curve;  
    }
    
    //TODO get curves based on zoom level
    const removeCurves = () => {

    }

    const addCurves = () => {

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
        // <div id="mapId">
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
                    //attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                    // url="http://tile.stamen.com/terrain/{z}/{x}/{y}.jpg"
                    url="http://tile.stamen.com/watercolor/{z}/{x}/{y}.jpg"
                    // WHEN USING HTTPS
                    // url="https://stamen-tiles.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg"
                    // url="http://tile.stamen.com/toner/{z}/{x}/{y}.png"
                    attribution='Map tiles by <a href="http://stamen.com" style="pointer-events: initial;">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0" style="pointer-events: initial;">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org" style="pointer-events: initial;">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright" style="pointer-events: initial;">ODbL</a>.'
                />
                
            </Map>
        // </div>
        

    );
}

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