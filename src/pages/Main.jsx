//훅
import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux";

//컴포넌트
import Header from "../components/Header";
import MainCard from "../components/MainCard";
import MainLifeCard from "../components/MainLifeCard";
import MainCityCard from "../components/MainCityCard";
import TopButton from "../components/TopButton";
import Footer from "../components/Footer";
import styled from "styled-components";
import Loading from "../components/Loading"
import MainSlider from "../components/MainSlider";


const Main = () => {
  const { citys, life } = useSelector((state) => state.info)
  const { isUserLoading, me } = useSelector((state) => state.user)
  const navigate = useNavigate();

  useEffect(() => {
    if (!me) {
      navigate('/login')
    }
  }, [me])

  const headstate = true;
  const page = "main"
  const wrap = useRef();
  const newArr = [...citys]
  const newArr2 = [...life]
  const width = 'calc(100% - 48px)'
  const sliceArr = newArr.slice(0, 6)
  const sliceArr2 = newArr2.slice(0, 4)

  const shuffleArray = (arr) => {
    arr.sort(() => Math.random() - 0.5);
    console.log('실행중')
  }

  shuffleArray(sliceArr)
  shuffleArray(sliceArr2)

  return (
    <>
      <Header headstate={headstate} page={page}></Header>
      <Wrap ref={wrap}>
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
            <LifeCardWrap>
              <MainSlider data={sliceArr2}></MainSlider>
            </LifeCardWrap>
          </LifeWrap>

          <CityWrap>
            <div>
              <h2>도시정보</h2>
              <span onClick={() => { navigate("/areainfolist") }}>더 보기</span>
            </div>
            <MainCityCard datas={sliceArr}></MainCityCard>
          </CityWrap>
          <Footer width={width}></Footer>
        </Section>
      </Wrap>
      <TopButton wrap={wrap}></TopButton>
      {isUserLoading ? <Loading /> : null}
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
  }
`

const LifeWrap = styled.div`
    width: calc(100%);
    margin: 31px auto 0px auto;
`

const LifeCardWrap = styled.div`
  margin-left: 24px;
  display: flex;
  gap: 16px;
`

const Subtitle = styled.div`
    width: calc(100% - 48px);
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin: 0 auto;
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
      cursor: pointer;
    }
`

const CityWrap = styled.div`
  width: ${wrapCalc};
  margin: -55px auto 40px auto;
  position: relative;
  z-index: 1;
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
      cursor: pointer;
    }
  }
`