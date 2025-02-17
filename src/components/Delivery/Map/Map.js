import React from "react";
import {GoogleMap, LoadScript} from "@react-google-maps/api";

const mapSize = {
    width: '100%',
    height: '387px',
}

const center = {
    lat: 48.8584,
    lng: 2.2945
}

const mapStyles = [
    {
        featureType: "all",
        elementType: "geometry",
    },
    {
        featureType: "road",
        elementType: "geometry",
        stylers: [{visibility: "off"}],
    },
    {
        featureType: "poi",
        elementType: "labels",
        stylers: [{visibility: "off"}],
        scrollwheel: false
    },
];

function Map() {
    return (
        <section>
            <LoadScript googleMapsApiKey='AIzaSyBaYiukF3DbeKvKl9hEZ5V77jCOePJUF2Y'>
                <GoogleMap mapContainerStyle={mapSize} center={center} zoom={10} options={{styles: mapStyles}}>
                    {/*<Marker position={center}/>*/}
                </GoogleMap>
            </LoadScript>
        </section>
    )
}

export default Map