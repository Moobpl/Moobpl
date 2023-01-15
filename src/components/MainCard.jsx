import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const MainCard = () => {
    const navigate = useNavigate();
    return (
        <CardWrap>
            <div>
                <img src="images/Blue Blank Cartoon Calendar.H03.2k.png" alt="" />
                <div>
                    <h2>이사스케줄</h2>
                    <p>일정관리를 시작합니다!</p>
                    <button onClick={() => navigate("/moobadd")}>등록하기</button>
                </div>
            </div>
        </CardWrap>
    )
}

export default MainCard

const CardWrap = styled.div`
    width: calc(100% - 48px);
    height: 127px;
    background: #F9A76F;
    border-radius: 16px;
    margin: 0 auto;
    img {
        width: 140px;
        margin-left:17px;
        margin-bottom:10px;
    }
    > div {
        display: flex;
        height: 100%;
        align-items: center;
        > div {
            h2{
                font-weight: 700;
                font-size: 16px;
                line-height: 24px;
                color: #FFFFFF;
            }
            p{
                font-weight: 400;
                font-size: 12px;
                line-height: 18px;
                color: #FFFFFF;
                margin-top: 4px;
            }
            button {
                font-weight: 500;
                font-size: 12px;
                line-height: 18px;
                background-color: #fff;
                color: #F9A76F;
                border: none;
                border-radius: 100px;
                padding: 5px 24px;
                margin-top: 11px;
            }
        }
    }
`