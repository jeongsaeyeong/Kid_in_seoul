import React, { useState } from 'react'
import Hart from '../../../assets/img/hart.svg'
import HartFull from '../../../assets/img/hart_full.svg'

const Comm_ArticleA = () => {
    const [Like, setLike] = useState(false);

    return (
        <div className='article'>
            <div className="catecory">성북구 지역 커뮤니티</div>
            <h3 className="title">야간보육 어린이집 후기</h3>
            <p className='nickname'>닉네임입니다(zxc78p)</p>
            <p className='time'>2024.04.24 20:47</p>
            <p className='text'>
                저번주 갑자기 야근을 하게 되는 바람에 처음으로 야간보육 어린이집을 이용해봐서 후기를 올려보려고 합니다^^ 키즈인서울 덕분에 빠르게 근처 어린이집을 찾을 수 있었어요~~~ 제가 이용한 어린이집은 성북구의 ‘성신어린이집'이었는데요. 24시간 운영이라 급하게 아이를 맡기고 가야 할 일이 있을 때 이용하면 좋을 것 같더라고요~ 선생님들도 너무 친절하시고 아이도 즐겁게 잘 놀고 왔다고 하네요ㅎㅎ 키즈인서울 사이트에서도 요 어린이집 정보 확인할 수 있으니 함 찾아보시면 좋을 것 같네요~! 저는 미리 전화드려서 가능한지 여쭤보고 아이 맡겼습니다^^
                성신어린이집에 대해 궁금한 점 있으시면 댓글로 남겨주시면 답변 드릴게요^^
            </p>
            <div className="like">
                {Like ? (
                    <img src={HartFull} alt="" onClick={() => {setLike(!Like)}}/>
                ): (
                    <img src={Hart} alt="" onClick={() => {setLike(!Like)}}/>
                )}
                <p>477</p>
            </div>
        </div>
    )
}

export default Comm_ArticleA