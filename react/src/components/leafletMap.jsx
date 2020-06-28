import React, {useState} from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import './leaflet.css';
import { Curve } from 'react-leaflet-curve';

const path = ['M', [50.14874640066278, 14.106445312500002],
  'Q', [51.67255514839676, 16.303710937500004],
  [50.14874640066278, 18.676757812500004],
  'T', [49.866316729538674, 25.0927734375]]


function LeafletMap(props){
    // Center of New Zealand
    // const position = [173.299, -41.273]
    const position = [-41.273, 173.299]
    const topLeft = L.latLng(-31.154944, 170.138842);
    const bottomRight = L.latLng(-49.285522, 179.794907);

    // const mapRef = React.createRef();


    const createCurve = (lon1, lat1, lon2, lat2) => {
        const points = [];
        var delta_x = lon2 - lon1,
            delta_y = lat2 - lat1;
        
        var r = Math.sqrt(Math.pow(delta_x, 2) + Math.pow(delta_y, 2)),
        theta = Math.atan2(delta_y, delta_x);

        var thetaOffset = (3.14 / 10);

        var r2 = (r / 2) / (Math.cos(thetaOffset)),
        theta2 = theta + thetaOffset;

        var midpointX = (r2 * Math.cos(theta2)) + lat1,
            midpointY = (r2 * Math.sin(theta2)) + lon1;

        var midpointLatLng = [midpointY, midpointX];

        points.push([lon1, lat1], midpointLatLng, [lon2, lat2]);

        var pathOptions = {
            color: 'blue',
            weight: 3,
        }

        // console.log(mapRef)

        const curve = L.curve([
            'M',
            [lon1, lat1],
            'Q',
            midpointLatLng,
            [lon2, lat2]
        ], pathOptions)
        // .addTo(mapRef.current)

        console.log(curve)
        // return curve;

        
    }

    const path = [
        'M', [50.14874640066278, 14.106445312500002],
        'Q', [51.67255514839676, 16.303710937500004],
        [50.14874640066278, 18.676757812500004],
        'T', [49.866316729538674, 25.0927734375]
    ]

    return(
        <Map center={position} 
            zoom={5}  //13
            zoomControl={true}
            maxBounds={L.latLngBounds(topLeft, bottomRight)}
            minZoom={5}
            layers={[]}

            // setPath={createCurve(170.138842, -31.154944, 179.794907, -49.285522)}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />
            {/* <Marker position={position}>
                <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
            </Marker> */}

            <Curve positions={path} option={{color:'red',fill:true}}/>
            <Curve positions={path} option={{color:'red',fill:true}}/>
        </Map>

        

    );
}

export default LeafletMap;