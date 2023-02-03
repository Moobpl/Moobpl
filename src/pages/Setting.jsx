// 훅
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

// 컴포넌트
import Header from "../components/Header";
import styled from "styled-components";


const Setting = () => {
  const headstate = true;
  const navigate = useNavigate();
  const { me } = useSelector((state) => state.user)

  useEffect(() => {
    if (!me) {
      navigate('/login')
    }
  }, [me, navigate])

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
          <dl>
            <dt>사이트 정보</dt>
            <dd>
              <ul style={{cursor:"default"}}>
                <li>버전정보</li>
                <li>1.0</li>
              </ul>
            </dd>
            <dt style={{ marginTop: "24px" }}>고객센터</dt>
            <dd>
              <ul onClick={() => { navigate('./announcement') }}>
                <li>공지사항</li>
                <li><img src={`${process.env.PUBLIC_URL}/images/backarrow.png`} alt="" /></li>
              </ul>
              <ul onClick={() => { alert('서비스 준비중 입니다.') }} >
                <li>자주묻는 질문</li>
                <li><img src={`${process.env.PUBLIC_URL}/images/backarrow.png`} alt="" /></li>
              </ul>
            </dd>
            <dt style={{ marginTop: "24px" }}>서비스약관</dt>
            <dd>
              <ul onClick={() => { navigate('./service') }}>
                <li>서비스 이용약관</li>
                <li><img src={`${process.env.PUBLIC_URL}/images/backarrow.png`} alt="" /></li>
              </ul>
              <ul onClick={() => { navigate('./privacy') }}>
                <li>개인정보 처리방침</li>
                <li><img src={`${process.env.PUBLIC_URL}/images/backarrow.png`} alt="" /></li>
              </ul>
            </dd>
          </dl>
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
  margin-top: 40px;
  ul{
    cursor: pointer;
  }

  dl{
    dt{
      font-weight: 500;
      font-size: 16px;
      color: #282B49;
    }
    dd{
      font-weight: 400;
      font-size: 16px;
      color: #282B49;
      ul{
        display: flex;
        justify-content: space-between;
        border-bottom: 0.5px solid #bcbcbc;
        padding: 15px;

        li{
          img{
            width: 80%;
            transform: rotate(180deg);
            cursor: pointer;
          }
        }
      }
    }
  }
`
