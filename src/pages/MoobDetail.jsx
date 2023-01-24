import React, { useRef } from 'react'
import CheckList from "../components/CheckList";
import Header from '../components/Header';
import styled from 'styled-components';

const MoobDetail = () => {
  const headstate = true;
  const wrap = useRef();
  
  return (
    <>
      <Header headstate={headstate}></Header>
      <Wrap ref={wrap}>
        <TextBox>
          <span>체크리스트</span>
          <h1>
          하나씩,<br />
          천천히 준비해 보세요
          </h1>
        </TextBox>
        <CheckList></CheckList>
      </Wrap>
    </>
  )
}

export default MoobDetail

const wrapCalc = 'calc(100% - 48px)'

const Wrap = styled.div`
  width: ${wrapCalc};
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
  width: 100%;
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