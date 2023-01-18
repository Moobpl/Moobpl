import React from "react";
import Header from "../components/Header";
import styled from "styled-components";

const Setting = () => {
  const headstate = true;
  return (
    <>
      <Header headstate={headstate}></Header>
      <Wrap>
        <TextBox>
          <span>뭅플</span>
          <h1>
            설정
          </h1>
        </TextBox>
        <Section>
          <h5>어플리케이션 정보</h5>
        </Section>
      </Wrap>
    </>
  );
}

export default Setting;


const wrapCalc = "calc(100% - 48px)"

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

const Section = styled.section`
  height: 100px;
  margin-top: 40px;
  background-color: red;
`
