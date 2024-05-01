import React, { useEffect, useState } from 'react'
import { Map, MapMarker } from "react-kakao-maps-sdk";

const Date_Plusschedule = ({ setShow }) => {
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
        <div className='puls_schedule'>
            <div>
                <div className="header">
                    <div className="cate">
                        <button>어린이집 일정</button>
                        <button>회사 일정</button>
                        <button>기타 일정</button>
                    </div>
                    <div className="box">
                        <div className="keep">별</div>
                        <div className="share">공</div>
                    </div>
                </div>
                <div className="main">
                    <input type="text" placeholder='일정 제목' className='title' />
                    <div className="timeset">
                        <div>
                            <div className="start">
                                <input type="time" />
                            </div>
                            <div className="end">
                                <input type="time" />
                            </div>
                        </div>
                        <button className='all'>하루종일</button>
                    </div>
                    <div className='place'>
                        <img src="" alt="" />
                        <input type="text" placeholder='장소' />
                    </div>
                    <div className="map">
                        <Map
                            center={{ lat: position.coords.latitude, lng: position.coords.longitude }}
                            style={{
                                borderRadius: '10px',
                                width: "100%",
                                height: "inherit",
                            }}
                            level={5}
                            onCreate={setMap}
                            className='choose_start'
                        >
                            <MapMarker
                                position={{ lat: position.coords.latitude, lng: position.coords.longitude }}
                            />
                        </Map>
                        <p>서울특별시 성북구 아리랑로 75 관리동 1층</p>
                    </div>
                </div>
                <div className="footer">
                    <div>
                        <input type="checkbox" id='with_child' />
                        <label htmlFor="with_child"></label>
                        <p>아이와 함께 보내는 일정입니다.</p>
                    </div>
                    <div className='button_box'>
                        <button onClick={() => setShow(false)} className='nope'>닫기</button>
                        <button className='yes'>저장하기</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Date_Plusschedule