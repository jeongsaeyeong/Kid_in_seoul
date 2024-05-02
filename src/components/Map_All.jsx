import React, { useEffect, useState } from 'react'
import { Map, MapMarker } from "react-kakao-maps-sdk";

const Map_All = () => {
    const [position, setPosition] = useState({ coords: { latitude: 37.506320759000715, longitude: 127.05368251210247 } });
    const [map, setMap] = useState()

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setPosition(position);
                console.log(position);
            },
            (error) => {
                console.error(error);
            },
            { enableHighAccuracy: true }
        );
    }, []);

    return (
        <div className="map">
            <Map
                center={{ lat: position.coords.latitude, lng: position.coords.longitude }}
                style={{
                    borderRadius: '30px 0 0 0 ',
                    width: "100%",
                    height: "inherit",
                }}
                level={3}
                onCreate={setMap}
                className='choose_start'
            >
                <MapMarker
                    position={{ lat: position.coords.latitude, lng: position.coords.longitude }}
                />
            </Map>
        </div>
    )
}

export default Map_All