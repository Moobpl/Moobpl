import React from "react";
import Header from "../components/Header";
import MainCard from "../components/MainCard";
import styled from "styled-components";

const Main = () => {
  const headstate = true;

  return (
    <Wrap>
      <Header headstate={headstate}></Header>
      <Section>
        <h1>
          당신의<br />
          서울살이를 시작합니다.
        </h1>
        <MainCard />
      </Section>
    </Wrap>
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
    /* or 142% */

    letter-spacing: 0.3px;

    color: #666666;
    margin: 26px 0px 19px 0px;
  }
`