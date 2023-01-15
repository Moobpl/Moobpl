import React, { useCallback } from "react";
import Header from "../components/Header";
import MainCard from "../components/MainCard";
import MainLifeCard from "../components/MainLifeCard";
import MainCityCard from "../components/MainCityCard";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"

const Main = () => {
  const headstate = true;
  const navigate = useNavigate();
  const datas = [{
    _id : 1,
    name: "서울시",
    disc: "미래도시 영등포",
    imgSrc: "images/city/seoul.jpg"
  }, {
    _id : 2,
    name: "인천시",
    disc: "힘내자",
    imgSrc: "images/city/yeongdeungpo.png"
  }, {
    _id : 3,
    name: "제주시",
    disc: "힘내자",
    imgSrc: "images/city/jeju.jpg"
  }, {
    _id : 4,
    name: "광주시",
    disc: "힘내자",
    imgSrc: "images/city/yeongdeungpo.png"
  }, {
    _id : 5,
    name: "세종시",
    disc: "힘내자",
    imgSrc: "images/city/suwon.jpg"
  }, {
    _id : 6,
    name: "수원시",
    disc: "힘내자",
    imgSrc: "images/city/suwon.jpg"
  }]
  
  const newData = datas.slice(0, 4)

  console.log(newData)
  const shuffleArray = useCallback((arr)=>{
    arr.sort(() => Math.random() - 0.5);
      console.log("hello")
  },[])

  shuffleArray(newData)

  return (
    <>
      <Header headstate={headstate}></Header>
      <Wrap>
        <Section>
          <TextBox>
            <span>뭅플</span>
            <h1>
              이사를 함께하다.
            </h1>
          </TextBox>
          <MainCard />

          <LifeWrap>
            <Subtitle>
              <h2>생활정보</h2>
              <span onClick={() => { navigate("/lifeinfolist") }}>더 보기</span>
            </Subtitle>
            <MainLifeCard></MainLifeCard>
          </LifeWrap>

          <CityWrap>
            <div>
              <h2>도시정보</h2>
              <span onClick={() => { navigate("/areainfolist") }}>더 보기</span>
            </div>
            <MainCityCard datas={newData}></MainCityCard>
          </CityWrap>
        </Section>
      </Wrap>
    </>
  );
}

export default Main;

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

const Section = styled.section`
  width: 100%;
`

const TextBox = styled.div`
  padding-top: 86px;
  width: ${wrapCalc};
  margin: 0 auto;
  margin-bottom: 19px;
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

    span{
      font-size: 26px;
      font-style: normal;
      font-weight: 700;
      line-height: 40px;
      /* or 154% */
      letter-spacing: 0.5px;
      color: #f9a76f;
    }

  }
`

const LifeWrap = styled.div`
    width: calc(100%);
    margin: 31px auto 0px auto;
  /* margin-top: 31px; */
`

const Subtitle = styled.div`
    width: calc(100% - 48px);
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin: 0 auto;

    h2{
      font-weight: 400;
      font-size: 18px;
      line-height: 27px;
      letter-spacing: 0.3px;
      color: #666666;
    }

    span{
      font-weight: 400;
      font-size: 12px;
      line-height: 18px;
      color: #BEBEBE;
    }
`

const CityWrap = styled.div`
  width: ${wrapCalc};
  margin: 15px auto 0px auto;
  > div {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 11px;

    h2{
      font-weight: 400;
      font-size: 18px;
      line-height: 27px;
      letter-spacing: 0.3px;
      color: #666666;
    }

    span{
      font-weight: 400;
      font-size: 12px;
      line-height: 18px;
      color: #BEBEBE;
    }
  }
`