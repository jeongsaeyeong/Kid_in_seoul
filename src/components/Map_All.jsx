import React, { useEffect, useState } from 'react'
import { Map, MapMarker } from "react-kakao-maps-sdk";

const { kakao } = window

const Map_All = ({ search }) => {
    const [map, setMap] = useState()

    const [state, setState] = useState({
        center: { lat: 37.49676871972202, lng: 127.02474726969814 },
        isPanto: true,
    });
    const [searchAddress, SetSearchAddress] = useState();

    useEffect(() => {
        const geocoder = new kakao.maps.services.Geocoder();

        let callback = function (result, status) {
            if (status === kakao.maps.services.Status.OK) {
                const newSearch = result[0]
                setState({
                    center: { lat: newSearch.y, lng: newSearch.x }
                })
            }
        };
        geocoder.addressSearch(`${search}`, callback);

        console.log(geocoder)
    }, [])


    return (
        <div className="map">
            <Map
                center={state.center}
                isPanto={state.isPanto}
                style={{
                    borderRadius: '30px 0 0 0 ',
                    width: "100%",
                    height: "inherit",
                }}
                level={3}
                onCreate={setMap}
            >
                <MapMarker
                    position={{
                        lat: state.center.lat,
                        lng: state.center.lng,
                    }}
                >
                    <div style={{color:"#000"}}>{search}</div>
                </MapMarker>
            </Map>
        </div>
    )
}

export default Map_All