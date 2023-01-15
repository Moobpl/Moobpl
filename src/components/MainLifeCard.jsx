import React from 'react'
import styled from 'styled-components'

const MainLifeCard = () => {
    const datas = [{
        id: "세탁정보",
        disc: "오늘은 빨래 하기 좋은 날 ~ ",
        imgSrc: "images/life/1.jpg"
    }, {
        id: "생활정보",
        disc: "힘내자",
        imgSrc: "images/life/1.jpg"
    }, {
        id: "생활정보",
        disc: "힘내자",
        imgSrc: "images/life/1.jpg"
    }]

    return (
        <Wrap>
            {datas.map((data, index) =>
                <CardWrap key={index}>
                    <div className="container">
                        <ImgWrap>
                            <img src={data.imgSrc} alt="" />
                        </ImgWrap>
                        <TextBox>
                            <h4>{data.id}</h4>
                            <p>{data.disc}</p>
                        </TextBox>
                    </div>
                </CardWrap>
            )}
        </Wrap>
    )
}

export default MainLifeCard

const Wrap = styled.div`
    display: flex;
    gap: 10px;
    margin-left: 16px;
    overflow-x:scroll;

    &::-webkit-scrollbar {
    display: none; /* 크롬, 사파리, 오페라, 엣지 */
    }
`

const CardWrap = styled.div`
    min-width: 248px;
    background-color: #fff;
    box-shadow: 10px 24px 54px rgba(0, 0, 0, 0.04);
    border-radius: 14px;
    padding: 10px;
    box-sizing: border-box;
    .container {
        display: flex;
        gap:16px;
        align-items: center;
    }
`

const ImgWrap = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 14px;
    background-color: red;
    display: flex;
    overflow: hidden;
    img {
        width: 100%;
    }
`

const TextBox = styled.div`
    h4{
        font-weight: 400;
        font-size: 14px;
        letter-spacing: 0.3px;
        color: #7E7E7E;
    }

    p{
        font-weight: 400;
        font-size: 12px;
        line-height: 18px;
        color: #ACACAC;
    }
`