// 훅
import React, { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

//컴포넌트
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TopButton from "../components/TopButton";

const LifeInfoDetail = () => {
  const headstate = true;
  const width = 'calc(100% - 48px)'
  const wrap = useRef();
  const navigate = useNavigate();
  const { id } = useParams();
  const { life } = useSelector((state) => state.info);
  const { me } = useSelector((state) => state.user);

  useEffect(() => {
    if (!me) {
      navigate('/login')
    }
  }, [me, navigate])

  const findInfo = life.find((item) => item._id === Number(id))

  return (
    <>
      <Header headstate={headstate} />
      <Wrap ref={wrap}>
        <MainImg src={`${process.env.PUBLIC_URL}/${findInfo.mainImgSrc}`} alt="" />
        <Section>
          <TextBox>
            <span>{findInfo.name}</span>
            <h1>
              {findInfo.disc}
            </h1>
            <p>{findInfo.script}</p>
          </TextBox>
          <StepTitle>차근차근 따라해보세요!</StepTitle>
          {findInfo.step.map((item, index) => {
            return (
              <div key={index}>
                {item.imgSrc ? <img src={`${process.env.PUBLIC_URL}/${item.imgSrc}`} alt="" /> : null}
                <h5>{item.title}</h5>
                <p>{item.body}</p>
              </div>
            )
          })}
        </Section>
        <Footer width={width}></Footer>
      </Wrap>
      <TopButton wrap={wrap}></TopButton>
    </>
  );
}

export default LifeInfoDetail;


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
  @supports (-webkit-touch-callout: none) { 
    height: -webkit-fill-available;
  }
`

const MainImg = styled.img`
  width: 100%;
`

const TextBox = styled.div`
  width: 100%;
  margin-top: 24px;
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

  p{
    font-size: 14px;
    font-weight: 300;
    color: #666;
    line-height: 24px;
    text-align: justify;
    margin-top: 24px;
  }
`

const StepTitle = styled.h2`
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  color: #282B49;
  margin: 32px 0px 12px 0px;
`

const Section = styled.section`
  width: calc(100% - 48px);
  margin: 0 auto;

  div{
    >img{
    width: 100%;
  }

  >h5{
    font-size: 14px;
    font-weight: 500;
    color: #666666;
  }

  >p{
    font-size: 14px;
    font-weight: 300;
    color: #666;
    line-height: 24px;
    margin-bottom: 24px;
  }
  }
 
`
