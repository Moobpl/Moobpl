import React, { useRef } from "react";
import Header from "../components/Header";
import styled from "styled-components";
import MainCityCard from "../components/MainCityCard";
import TopButton from "../components/TopButton";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";

function AreaInfoList() {
  const { citys } = useSelector((state) => state.city)
  const wrap = useRef();
  const headstate = true;
  return (
    <>
      <Header headstate={headstate}></Header>
      <Wrap ref={wrap}>
        <TextBox>
          <span>지역정보</span>
          <h1>
            보세요,<br />
            수 많은 도시들을
          </h1>
        </TextBox>
        <CityWrap>
          <MainCityCard datas={citys}></MainCityCard>
        </CityWrap>
        <Footer></Footer>
      </Wrap>
      <TopButton wrap={wrap}></TopButton>
    </>
  );
}

export default AreaInfoList;

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

const CityWrap = styled.div`
  width: ${wrapCalc};
  margin: 45px auto 0px auto;
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