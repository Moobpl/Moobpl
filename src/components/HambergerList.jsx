import React from 'react'
import styled from 'styled-components'
import { useNavigate, Navigate } from 'react-router-dom'
import { __postLogout } from '../redux/modules/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const HambergerList = ({ margin }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const logoutHandler = () => {
        dispatch(__postLogout())
        navigate("/login");
    }

    return (
        <Wrap margin={"60px"}>
            <li onClick={() => { navigate("/areainfolist") }}>
                <div><img src={`${process.env.PUBLIC_URL}/images/hamberger/1x/Asset 1.png`} alt="" /></div>
                <span>도시정보</span>
            </li>
            <li onClick={() => { navigate("/lifeinfolist") }}>
                <div><img src={`${process.env.PUBLIC_URL}/images/hamberger/1x/Asset 2.png`} alt="" /></div>
                <span>생활정보</span>
            </li>
            <li onClick={() => { navigate("/event") }}>
                <div><img src={`${process.env.PUBLIC_URL}/images/hamberger/1x/Asset 3.png`} alt="" /></div>
                <span>이벤트</span>
            </li>
            <li onClick={() => { navigate("/setting") }}>
                <div><img src={`${process.env.PUBLIC_URL}/images/hamberger/1x/Asset 4.png`} alt="" /></div>
                <span>설정</span>
            </li>
            <li onClick={() => { navigate("/profile") }}>
                <div><img src={`${process.env.PUBLIC_URL}/images/hamberger/1x/Asset 5.png`} alt="" /></div>
                <span>프로필 수정</span>
            </li>
            <img src={`${process.env.PUBLIC_URL}/images/hamberger/adbanner.png`} alt="" />
            <Logout className="logout" onClick={logoutHandler}>
                <img src={`${process.env.PUBLIC_URL}/images/hamberger/1x/Asset 6.png`} alt="" />
                <span>로그아웃</span>
            </Logout>
        </Wrap>
    )
}

export default HambergerList

const Wrap = styled.ul`
    margin-top: ${props => props.margin};
    li{
        display: flex;
        align-items: center;
        margin-bottom: 32px;
        font-weight: 400;
        font-size: 14px;
        letter-spacing: 0.3px;
        color: #666666;
        div{
            width:32px;
            height: 32px;
            background-color: transparent;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        span{
            display: block;
            margin-left:14px;
        }
    }

    >img{
        width: 100%;
    }
`

const Logout = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 17px;
    >img {
        margin-right: 13px;
    }
    >span {
        font-weight: 400;
        font-size: 14px;
        text-align: right;
        letter-spacing: 0.3px;
        color: #666666;
    }
`