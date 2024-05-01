import React, { useEffect, useState } from 'react'
import { Map, MapMarker } from "react-kakao-maps-sdk";
import CareCenter_kind from './CareCenter_kind';

const CareCenter_Night = () => {
    const [position, setPosition] = useState({ coords: { latitude: 37.506320759000715, longitude: 127.05368251210247 } });
    const [map, setMap] = useState()
    const [filter, setFilter] = useState(false)

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
        <div className='carecenter_wrap'>
            <div className='carecenter_list'>
                <h2>야간 365 어린이집</h2>
                <div className='search'>
                    <img src="" alt="" />
                    <input type="text" placeholder='지역, 어린이집을 검색해보세요' />
                </div>
                <div className='list'>
                    <h5>현재 가까운 어린이집</h5>
                    <p>돈암하늘채어린이집</p>
                    <p>휴먼빌어린이집</p>
                    <p>레미안숲어린이집</p>
                    <p>안암래미안어린이집</p>
                    <p>삼선예일어린이집</p>
                    <p>해피래미안어린이집</p>
                    <p>청명어린이집</p>
                    <p>아뜰리에어린이집</p>
                    <p>키즈맘어린이집</p>
                    <p>엔젤어린이집</p>
                </div>
                <div className="pagenation">
                    <img src="" alt="" />
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <img src="" alt="" />
                </div>
            </div>
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
            <CareCenter_kind setFilter={setFilter} filter={filter}/>
        </div>
    )
}

export default CareCenter_Night