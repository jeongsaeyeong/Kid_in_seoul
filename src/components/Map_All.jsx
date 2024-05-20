import React, { useEffect, useState } from 'react'
import { CustomOverlayMap, Map } from "react-kakao-maps-sdk";
import CareCenter_info from './carecenter/CareCenter_info';

const { kakao } = window

const Map_All = ({ search, address, select, Add }) => {
    const [map, setMap] = useState()

    const [state, setState] = useState({
        center: { lat: 37.49676871972202, lng: 127.02474726969814 },
        isPanto: true,
    });

    useEffect(() => {
        console.log('address', address)
        const geocoder = new kakao.maps.services.Geocoder();

        let callback = function (result, status) {
            if (status === kakao.maps.services.Status.OK) {
                const newSearch = result[0]
                setState({
                    center: { lat: newSearch.y, lng: newSearch.x }
                })
            }
        };
        geocoder.addressSearch(`${address}`, callback);
    }, [address])

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
                {address ? (
                    <CustomOverlayMap
                        position={{
                            lat: state.center.lat,
                            lng: state.center.lng,
                        }}
                    >
                        <div className='here'>{search}
                            <div className='arrow'></div>
                        </div>
                        <CareCenter_info select={select} Add={Add}/>
                    </CustomOverlayMap>

                ) : (
                    <></>
                )}
            </Map>
        </div>
    )
}

export default Map_All