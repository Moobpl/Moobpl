import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const MainCityCard = ({datas}) => {
    const navigate = useNavigate()
    const arr = datas
    console.log(arr)
    return (
        <Wrap>
            {arr.map((data, index) =>
                <CardWrap key={index} onClick={()=>{navigate(`/areainfodetail/${data._id}`)}}>
                    <div>
                        <ImgWrap>
                            <img src={data.imgSrc} alt="" />
                        </ImgWrap>
                        <h4>{data.name}</h4>
                        <p>{data.disc}</p>
                    </div>
                </CardWrap>
            )}
        </Wrap>
    )
}

export default MainCityCard

const Wrap = styled.div`
    flex-wrap: wrap;
    gap: 15px;
`

const CardWrap = styled.div`
    width: calc(50% - 7.5px);
    background: #FFFFFF;
    box-shadow: 10px 24px 54px rgba(0, 0, 0, 0.05);
    border-radius: 16px;
    padding:8px;
    box-sizing: border-box;

    h4{
        font-weight: 500;
        font-size: 14px;
        line-height: 21px;
        letter-spacing: 0.3px;
        color: #7E7E7E;
        margin-top: 6px;
    }

    p{
        font-weight: 400;
        font-size: 12px;
        line-height: 18px;
        color: #ACACAC;
    }
`

const ImgWrap = styled.div`
    width: 100%;
    border-radius: 16px;
    overflow: hidden;
    img{
        display: block;
        width: 100%;
    }
`