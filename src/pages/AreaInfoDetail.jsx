// 훅
import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

// 컴포넌트
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import StreetSlider from "../components/StreetSlider"
import Slider from "../components/Slider"
import TopButton from "../components/TopButton";

function AreaInfoDetail() {
  const headstate = true;
  const navigate = useNavigate();
  const wrap = useRef()
  const { citys } = useSelector((state) => state.info)
  const { me } = useSelector((state) => state.user)
  const { id } = useParams()

  const width = 'calc(100% - 48px)'
  const findCity = citys.find((item) => {
    return item._id === Number(id)
  })

  useEffect(() => {
    if (!me) {
      navigate('/login')
    }
  }, [me, navigate])

  return (
    <>
      <Header headstate={headstate}></Header>
      <Wrap ref={wrap}>
        <MainImg>
          <img src={`${process.env.PUBLIC_URL}/${findCity.imgSrc[0]}`} alt="" />
        </MainImg>
        <Section>
          <h2>{findCity.disc}</h2>
          <h2>{findCity.name}</h2>
          <MainScript>{findCity.script}</MainScript>
        </Section>
        <Section>
          <span>계절별로 알아보는<br />{findCity.name} 날씨</span>
          <ImgWrap>
            <img src={`${process.env.PUBLIC_URL}/${findCity.imgSrc[1]}`} alt="" />
          </ImgWrap>
          <MainScript>{findCity.weather}</MainScript>
        </Section>
        <SlideWrap>
          <span>{findCity.name}의 대표 상권</span>
          <StreetSlider data={findCity}></StreetSlider>
          <MainScript style={{ width: "calc(100% - 48px)", margin: "0 auto", marginTop: "-55px" }}>{findCity.streetText}</MainScript>
        </SlideWrap>
        <SlideWrap style={{ marginTop: "24px" }}>
          <span>{findCity.name} 청년혜택 보기</span>
          <Slider data={findCity}></Slider>
          <DeatailText><a href="https://www.youthcenter.go.kr/regionPlcyUnif/regionPlcyUnifList.do?bizId=&srchYgmnSpceId=&srchCtpvAreaCd=&srchWord=&srchRegion=003002001" rel="noopener noreferrer" target={"_blank"}>자세히 알아보기</a></DeatailText>
        </SlideWrap>
        <Footer width={width}></Footer>
      </Wrap>
      <TopButton wrap={wrap}></TopButton>
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
  padding-top: 60px;
  box-sizing: border-box;
  &::-webkit-scrollbar {
  display: none; /* 크롬, 사파리, 오페라, 엣지 */
  }
`

const DeatailText = styled.div`
  display: block;
  text-align: right;
  margin: -55px 24px 24px 0px;
  color: blue;
  font-size: 12px;
  text-decoration: underline;
  position: relative;
  font-weight: 400;
  z-index: 9;
`

const MainImg = styled.div`
  width: 100%;
  height: 200px;
  background-color: transparent;
  overflow: hidden;

  >img{
    width: 100%;
    display: block;
    object-fit: fill;
  }
`

const ImgWrap = styled.div`
background-color: transparent;
  >img{
    width: 100%;
    display: block;
    margin-top: 10px;
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
    line-height: 21px;
    color: #282B49;
  }
`

const SlideWrap = styled.div`
  width: 100%;
  >span{
    display: block;
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    color: #282B49;
    margin-left: 24px;
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