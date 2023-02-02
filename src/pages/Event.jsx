// 훅
import React, { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// 컴포넌트
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";

const Event = () => {
  const headstate = true;
  const wrap = useRef();
  const navigate = useNavigate();
  const { me } = useSelector((state) => state.user)

  useEffect(() => {
    if (!me) {
      navigate('/login')
    }
  }, [me, navigate])

  return (
    <>
      <Header headstate={headstate}></Header>
      <Wrap ref={wrap}>
        <TextBox>
          <span>뭅플</span>
          <h1>
            이벤트
          </h1>
        </TextBox>
        <Footer></Footer>
      </Wrap>
    </>
  )
}

export default Event;

const wrapCalc = "calc(100% - 48px)"

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  overflow-y: scroll;

  &::-webkit-scrollbar {
  display: none; /* 크롬, 사파리, 오페라, 엣지 */
  }
`

const TextBox = styled.div`
  padding-top: 91px;
  width: ${wrapCalc};
  margin: 0 auto;
  span{
    font-size: 14px;
    line-height: 25px;
    letter-spacing: 0.5px;
    color: #666666;
  }
  
  h1{
    font-size: 26px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px;
    /* or 154% */
    letter-spacing: 0.5px;
    color: #282B49;
  }
`
