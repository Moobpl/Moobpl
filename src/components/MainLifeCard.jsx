import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const MainLifeCard = ({datas}) => {
    const navigate = useNavigate()
    return (
        <>
        {datas.map((data, index) =>
            <CardWrap key={index} onClick={()=>{navigate(`/lifeinfodetail/${data._id}`)}}>
                <div className="container">
                    <ImgWrap>
                        <img src={`${process.env.PUBLIC_URL}/${data.imgSrc}`} alt="" />
                    </ImgWrap>
                    <TextBox>
                        <h4>{data.name}</h4>
                        <p>{data.disc}</p>
                    </TextBox>
                </div>
            </CardWrap>
        )}
        </>
    )
}

export default MainLifeCard

const CardWrap = styled.div`
    width: 100%;
    background-color: #fff;
    box-shadow: 10px 24px 54px rgba(0, 0, 0, 0.04);
    border-radius: 14px;
    padding: 10px;
    box-sizing: border-box;
    cursor: pointer;
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