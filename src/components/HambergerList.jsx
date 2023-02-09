import React,{ useEffect } from 'react'
import styled from 'styled-components'
import { useNavigate, Navigate } from 'react-router-dom'
import { __postLogout } from '../redux/modules/userSlice';
import { useDispatch, useSelector } from 'react-redux';

const HambergerList = ({ margin }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const logoutHandler = () => {
        dispatch(__postLogout())
        navigate("/login");
    }

    const handleResize = () => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`); 
      };

    useEffect(()=>{
        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    },[])

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
            <Ad src={`${process.env.PUBLIC_URL}/images/hamberger/adbanner.png`} alt="" />
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
    height: calc(100vh - 104px - 60px - 28px - 60px);
    
    @supports (-webkit-touch-callout: none) { 
        height: calc(var(--vh) * 100 - 104px - 60px - 28px - 60px);
    }

    display: flex;
    flex-direction: column;
    li{
        display: flex;
        align-items: center;
        margin-bottom: 32px;
        font-weight: 400;
        font-size: 14px;
        letter-spacing: 0.3px;
        color: #666666;
        cursor: pointer;
        div{
            width:32px;
            height: 32px;
            background-color: transparent;
            display: flex;
            justify-content: center;
            align-items: center;

            >img{
                max-width: 21px;
            }
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

const Ad = styled.img`
    display: block;
    margin-top: auto;
`

const Logout = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 17px;
    padding-bottom: 24px;
    cursor: pointer;
    >img {
        margin-right: 13px;
        max-width: 21px;
    }
    >span {
        font-weight: 400;
        font-size: 14px;
        text-align: right;
        letter-spacing: 0.3px;
        color: #666666;
    }
`