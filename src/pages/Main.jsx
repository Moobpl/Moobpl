import React from "react";
import Header from "../components/Header";
import MainCard from "../components/MainCard";
import MainLifeCard from "../components/MainLifeCard";
import MainCityCard from "../components/MainCityCard";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"

const Main = () => {
  const headstate = true;
  const navigate = useNavigate();
  return (
    <>
    <Header headstate={headstate}></Header>
    <Wrap>
      <Section>
        <h1>
          당신의<br />
          서울살이를 시작합니다.
        </h1>
        <MainCard />

        <LifeWrap>
          <div>
            <h2>생활정보</h2>
            <span onClick={()=>{navigate("/lifeinfolist")}}>더 보기</span>
          </div>
          <MainLifeCard></MainLifeCard>
        </LifeWrap>

        <LifeWrap>
          <div>
            <h2>도시정보</h2>
            <span onClick={()=>{navigate("/areainfolist")}}>더 보기</span>
          </div>
          <MainCityCard></MainCityCard>
        </LifeWrap>
      </Section>
    </Wrap>
    </>
  );
}

export default Main;

const Wrap = styled.div`
  width: calc(100% - 48px);
  min-height: 100vh;
  margin: 0 auto;
  position: relative;
`

const Section = styled.section`
  width: 100%;
  padding-top: 60px;

  h1 {
    font-weight: 700;
    font-size: 24px;
    line-height: 34px;
    letter-spacing: 0.3px;
    color: #666666;
    margin: 26px 0px 19px 0px;
  }
`

const LifeWrap = styled.div`
  margin-top: 31px;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 11px;

    h2{
      font-weight: 500;
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