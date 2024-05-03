import React from 'react'
import Care from '../../../assets/img/care.svg'
import Kid from '../../../assets/img/kid.svg'

const Section02 = () => {
    return (
        <section className="section02">
            <h2>원하는 정보를 빠르게 찾아보세요!</h2>
            <div>
                <div className="left">
                    <h3>갑작스러운 야근이<br />
                        발생하였나요?</h3>
                    <p>
                        가까운 거점형야간보육 어린이집, 365열린어린이집<br />
                        정보를 찾아드려요
                    </p>
                    <img src="" alt="" />
                </div>
                <div className="right">
                    <div className="top">
                        <h3>내 주변 어린이집 찾기</h3>
                        <p>
                            위치 정보를 기반으로 가까운 어린이집<br />
                            정보를 알려드려요
                        </p>
                        <img src={Care} alt="" />
                    </div>
                    <div className="bottom">
                        <h3>
                            우리 아이와 나들이<br />
                            어디로 갈까요?
                        </h3>
                        <p>서울 내 다양한 장소를 추천드려요</p>
                        <img src={Kid} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section02