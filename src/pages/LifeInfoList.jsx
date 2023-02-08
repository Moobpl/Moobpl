// 훅
import React, { useRef, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// 컴포넌트
import Header from '../components/Header';
import MainLifeCard from '../components/MainLifeCard';
import Footer from '../components/Footer';
import TopButton from '../components/TopButton';
import styled from 'styled-components';

const LifeInfoList = () => {
  const { life } = useSelector((state) => state.info)
  const { me } = useSelector((state) => state.user)
  const navigate = useNavigate();
  const headstate = true;
  const wrap = useRef();
  const width = 'calc(100% - 48px)'

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
          <span>생활정보</span>
          <h1>
            톡톡!<br />
            생활정보
          </h1>
        </TextBox>
        <LifeWrap>
          <MainLifeCard datas={life}></MainLifeCard>
        </LifeWrap>
        <Footer width={width}></Footer>
      </Wrap>
      <TopButton wrap={wrap}></TopButton>
    </>
  )
}

export default LifeInfoList

const wrapCalc = "calc(100% - 48px)"

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  @supports (-webkit-touch-callout: none) { 
    height: -webkit-fill-available;
  }
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

const LifeWrap = styled.div`
  width: ${wrapCalc};
  margin: 45px auto 40px auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
`