import React from 'react'
import Circle01 from '../../../assets/img/circle01.png'
import Circle02 from '../../../assets/img/circle02.png'
import Circle03 from '../../../assets/img/circle03.png'
import Search from '../../../assets/img/main_search.svg'
import Comm from '../../../assets/img/main_comm.svg'
import Month from '../../../assets/img/main_month.svg'

const Section04 = () => {
    return (
        <section className="section04">
            <div>
                <h2>3 in <strong>Kids in Seoul</strong></h2>
                <p>Kids in Seoul에서 정보 검색, 소통, 시간 관리를 한 번에 해결하세요</p>
                <div>
                    <div className="box01">
                        <div>
                            <img src={Search} alt="" />
                            <h4>
                                어린이 관련<br />
                                장소 정보 검색
                            </h4>
                        </div>
                        <p>
                            어린이집뿐만 아니라 자녀와 함께<br />
                            가기 좋은 공원, 도서관, 키즈카페 및 미술<br />
                            교육 정보를 간편하게 얻을 수 있습니다.
                        </p>
                    </div>
                    <div className="box02">
                        <div>
                            <img src={Comm} alt="" />
                            <h4>
                                서울 거주 부모님들을<br />
                                위한 육아 커뮤니티
                            </h4>
                        </div>
                        <p>
                            서울 거주자를 대상으로 운영하는<br />
                            커뮤니티를 통해 다른 부모님들과<br />
                            소통할 수 있고, 다양한 정보를 서로<br />
                            공유할 수 있습니다.
                        </p>
                    </div>
                    <div className="box03">
                        <div>
                            <img src={Month} alt="" />
                            <h4>
                                효율적인 일정 관리<br />
                                및 육아 시간 분석
                            </h4>
                        </div>
                        <p>
                            월간⋅일간 달력을 활용해 어린이집,<br />
                            회사 등의 일정을 관리할 수 있고,<br />
                            해당 데이터를 통해 아이와 함께<br />
                            보낸 시간 분석 및 비교 가능합니다.
                        </p>
                    </div>
                </div>
            </div>
            <img src={Circle01} alt="" className="circle01" />
            <img src={Circle02} alt="" className="circle02" />
            <img src={Circle03} alt="" className="circle03" />
        </section>
    )
}

export default Section04