import React, {useState, useMemo, useEffect, useRef} from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import '@elfalem/leaflet-curve'
import './leaflet.css';
import {
    DATA_URL_ROOT
} from '../constants';
import {
    txt2Array
} from '../utils/commonFunctions';
// import { Curve } from 'react-leaflet-curve';

const MAX_ZOOM = 5;

function LeafletMap({
    data,
    setHoveredData,
}){
    // Center of New Zealand
    // const position = [173.299, -41.273]
    const position = [-41.273, 173.299]
    const topLeft = L.latLng(-31.154944, 162.138842);
    const bottomRight = L.latLng(-49.285522, 179.794907);

    // const mapRef = React.createRef();
    const mapRef = useRef(null);

    // Need to save this because it becomes null after updates
    const [m, setMap] = useState();

    // The variables that we last requested from server, only request again if these have changed
    const [lastRequestedLatLng, setLastRequestedLatLng] = useState({
       left: 162.138842,
       top: -31.15494,
       right: 179.794907,
       bottom: -49.285522, 
    });

    // Data for zoom & boundary
    const [zoneData, setZoneData] = useState({});

    useEffect(() => {
        // console.log('this.leafletElement: ', this);
        // console.log(mapRef.current.leafletElement)
        if(!m){
            // console.log("assigning map: ", mapRef.current.leafletElement)
            setMap(mapRef.current.leafletElement);
        }

        // Load initial data
        API_zoneData({
            _northEast: {
                lat: lastRequestedLatLng.top, 
                lng: lastRequestedLatLng.right
            },
            _southWest: {
                lat: lastRequestedLatLng.bottom, 
                lng: lastRequestedLatLng.left
            }
        });

        // Listen when bounds change so we can load different data
        mapRef.current.leafletElement.on('moveend', function(e) {
            var bounds = this.getBounds();
            // console.log("Visible boundary: ", bounds);
            API_zoneData(bounds);
        });
    },[
        // lastRequestedLatLng
        // Making this empty makes it only update once.
    ])

    

    const API_zoneData = async (bounds) => {
        // console.log("API_zoneData called with m: ", mapRef.current?.leafletElement);
        
        if(
            lastRequestedLatLng.top !== bounds._northEast.lat
            && lastRequestedLatLng.bottom !== bounds._southWest.lat
            && lastRequestedLatLng.left !== bounds._southWest.lng
            && lastRequestedLatLng.right !== bounds._northEast.lng
        ){
            setLastRequestedLatLng({
                top: bounds._northEast.lat,
                bottom: bounds._southWest.lat,
                left: bounds._southWest.lng,
                right: bounds._northEast.lng,
            });
            // Request new data
            fetch(
                DATA_URL_ROOT + `/zoneData?left=${bounds._southWest.lng}&top=${bounds._northEast.lat}&right=${bounds._northEast.lng}&bottom=${bounds._southWest.lat}`,
            ).then(async (d)=>{
                // console.log("zone data: ", await d.json());
                // setZoneData(d);
                // return await d.json();
                const data = txt2Array(await d.json());
                setZoneData(data);
                //return await d.json();
                // console.log('updating curves: ', data);
                updateCurves(data);
            })
            .catch(err => {
                console.error("Error fetching data: ", err);
            })
        }
    }

    

    const updateCurves = (d) =>{
        console.log('updating zone data: ', d);
        if(!d && !zoneData) return;
        for(var r of d){
            createCurve(
                Number(r.departure_LONGITUDE), 
                Number(r.departure_LATITUDE), 
                Number(r.destination_LONGITUDE), 
                Number(r.destination_LATITUDE),
                r
            );
        }
    }

    const createCurve = (lon1, lat1, lon2, lat2, obj) => {
        // console.log(lon1,lat1,lon2,lat2);
        // console.log(mapRef.current, document.getElementById('mapObj').leafletElement);

        // if(mapRef.current === null) return;
        console.log(mapRef)
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

        const INITIAL_STROKE_WEIGHT = 2;
        var pathOptions = {
            color: '#007bff',
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
                weight: INITIAL_STROKE_WEIGHT * 2.5 
            })
            setHoveredData({
                hoveredData: obj,
                hoveredDestination: obj.destination_SA22018_V1_NAME//f.properties.NAME_1
            });
        })
        .on('mouseout', function() {
            this.setStyle({
                weight: INITIAL_STROKE_WEIGHT
            })
        })
        //.addTo(mapRef.current.leafletElement)
        .addTo(m || mapRef.current.leafletElement)

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
                zoom={MAX_ZOOM}  //13
                zoomControl={true}
                maxBounds={L.latLngBounds(topLeft, bottomRight)}
                minZoom={5}
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