import React from 'react'
import styled from 'styled-components'

const MainCityCard = () => {
    const datas = [{
        id: "영등포구",
        disc: "미래도시 영등포"
    },{
        id: "종로구",
        disc: "힘내자"
    },{
        id: "생활정보",
        disc: "힘내자"
    },{
        id: "생활정보",
        disc: "힘내자"
    },{
        id: "생활정보",
        disc: "힘내자"
    },{
        id: "생활정보",
        disc: "힘내자"
    }]

    return (
        <Wrap>
            {datas.map((data, index) =>
                <CardWrap key={index}>
                    <div>
                        <ImgWrap>
                            <img src="" alt="" />
                        </ImgWrap>
                        <h4>{data.id}</h4>
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
    height: 120px;
`