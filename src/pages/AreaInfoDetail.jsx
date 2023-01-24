import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Slider from "../components/Slider"

function AreaInfoDetail() {
  const headstate = true;
  const { citys } = useSelector((state) => state.info)
  const { id } = useParams()
  const width = 'calc(100% - 48px)'
  const findCity = citys.find((item) => {
    return item._id == id
  })
  
  return (
    <>
      <Header headstate={headstate}></Header>
      <Wrap>
        <MainImg>
          <img src={`${process.env.PUBLIC_URL}/${findCity.imgSrc}`} alt="" />
        </MainImg>
        <Section>
          <h2>{findCity.disc}</h2>
          <h2>{findCity.name}</h2>
          <MainScript>{findCity.script}</MainScript>
          <span>{findCity.name} 한눈에 보기</span>
          <Slider data={findCity}></Slider>
        </Section>
        <Footer width={width}></Footer>
      </Wrap>
    </>
  );
}

export default AreaInfoDetail;

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  &::-webkit-scrollbar {
  display: none; /* 크롬, 사파리, 오페라, 엣지 */
  }
`

const MainImg = styled.div`
  width: 100%;
  height: 200px;
  background-color: red;
  padding-top: 60px;
  overflow: hidden;

  >img{
    width: 100%;
    object-fit: fill;
  }
`

const Section = styled.section`
  width: calc(100% - 48px);
  margin: 24px auto;

  >h2{
    color: #282B49;
  }

  >span{
    display: block;
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    color: #282B49;
    margin-top: 24px;
  }
`

const MainScript = styled.p`
  font-size: 14px;
  font-weight: 300;
  color: #666;
  line-height: 24px;
  text-align: justify;
  margin-top: 24px;
`

const Window = styled.div`
  
`

const Slide = styled.ul`
  display: flex;
  flex: none;
  gap: 10px;
  li{
    min-width: 200px;
    height: 200px;
    background-color: pink;
  }
`