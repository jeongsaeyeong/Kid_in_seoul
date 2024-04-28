import React from 'react'
import Comm_WriteGoBtn from '../Comm_Write/Comm_WriteGoBtn'

const Comm_TimeSortTime = ({ setShow }) => {
    return (
        <>
            <div className="sort_time">
                <button onClick={() => { setShow('Time') }}>커뮤니티 최신글</button>
                <div>
                    <h4>야간보육 어린이집 후기</h4>
                    <p>
                        저번주 갑자기 야근을 하게 되는 바람에 처음으로 야간보육 어린이집을 이용해봐서 후기를
                        올려보려고 합니다^^ 키즈인서울 덕분에 빠르게 근처 어린이집을 찾을 수 있었어요~~~ 제가 이용...
                    </p>
                    <div>
                        <div className='like'>
                            <img src="" alt="" />
                            <p>477</p>
                        </div>
                        <div className='comment'>
                            <img src="" alt="" />
                            <p>76</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h4>야간보육 어린이집 후기</h4>
                    <p>
                        저번주 갑자기 야근을 하게 되는 바람에 처음으로 야간보육 어린이집을 이용해봐서 후기를
                        올려보려고 합니다^^ 키즈인서울 덕분에 빠르게 근처 어린이집을 찾을 수 있었어요~~~ 제가 이용...
                    </p>
                    <div>
                        <div className='like'>
                            <img src="" alt="" />
                            <p>477</p>
                        </div>
                        <div className='comment'>
                            <img src="" alt="" />
                            <p>76</p>
                        </div>
                    </div>
                </div>
                <div className='last'>
                    <h4>야간보육 어린이집 후기</h4>
                    <p>
                        저번주 갑자기 야근을 하게 되는 바람에 처음으로 야간보육 어린이집을 이용해봐서 후기를
                        올려보려고 합니다^^ 키즈인서울 덕분에 빠르게 근처 어린이집을 찾을 수 있었어요~~~ 제가 이용...
                    </p>
                    <div>
                        <div className='like'>
                            <img src="" alt="" />
                            <p>477</p>
                        </div>
                        <div className='comment'>
                            <img src="" alt="" />
                            <p>76</p>
                        </div>
                    </div>
                </div>
            </div>
            <Comm_WriteGoBtn />
        </>

    )
}

export default Comm_TimeSortTime