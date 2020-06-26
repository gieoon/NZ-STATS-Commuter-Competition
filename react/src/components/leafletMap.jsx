import React, {useState} from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import './leaflet.css';


function LeafletMap(props){
    // Center of New Zealand
    // const position = [173.299, -41.273]
    const position = [-41.273, 173.299]
    const topLeft = L.latLng(-31.154944, 170.138842);
    const bottomRight = L.latLng(-49.285522, 179.794907);

    // const top = -34.154944; // Latitude
    // const topLongitude = 172.138113;
    // Bottom of map is bottom of Stewart Island
    // const bottom = -47.285522; // Latitude
    // const bottomLongitude = 167.490438;
    // const right = 179.794907;
    // const left = 164.138842;

    return(
        <Map center={position} 
            zoom={5}  //13
            maxBounds={L.latLngBounds(topLeft, bottomRight)}
            minZoom={5}
            layers={[]}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />
            {/* <Marker position={position}>
                <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
            </Marker> */}
        </Map>
    );
}

export default LeafletMap;