//훅
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// 컴포넌트
import Header from '../components/Header';
import styled from 'styled-components';
import Footer from '../components/Footer'

const Privacy = () => {
  const { me } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const headstate = true;

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
          <span>설정</span>
          <h1>
          개인정보 처리방침
          </h1>
        </TextBox>
        <Section>
          <p>
          이 약관은 뭅플이 제공하는 서비스의
          이용과 관련하여 운영자와 이용자와의
          권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.
          </p>

          <dl>
            <dt>수집하는 개인정보</dt>
            <dd>
            회사는 이용자로부터 서비스 이용을 위해
            필요한 최소한의 개인정보를 수집하여 처리하고 있습니다.
            </dd>
          </dl>

          <dl>
            <dt>회원가입 시</dt>
            <dd>
            아이디(이메일 주소), 비밀번호, 이름을 필수항목으로 수집합니다.
            </dd>
          </dl>
          <dl>
            <dt>고객상담 시</dt>
            <dd>
            아이디(이메일 주소), 비밀번호, 이름을 필수항목으로 수집하며, 사진, 휴대폰번호, 지역 정보를 선택적으로 수집합니다.
            </dd>
          </dl>
          <dl>
            <dt>이벤트참여 시</dt>
            <dd>
            아이디(이메일 주소), 비밀번호, 이름을 필수항목으로 수집하며, 사진, 휴대폰번호, 지역 정보를 선택적으로 수집합니다.
            </dd>
          </dl>
        </Section>
        <Footer></Footer>
      </Wrap>
    </>
  )
}

export default Privacy

const wrapCalc = "calc(100% - 48px)"

const Wrap = styled.div`
  width: ${wrapCalc};
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
  p{
    margin-top: 40px;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    text-align: justify;
    letter-spacing: 0.5px;
    color: #999999;
    }

  dl:nth-child(2){
    margin-top: 50px;
    
    dt{
      font-size: 16px;
    }
  }

  dl{
    margin-top: 15px;
    dt{
      font-family: 'Noto Sans KR';
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
      /* identical to box height */

      letter-spacing: 0.5px;

      color: #282B49;
    }
    dd{
      margin-top: 15px;
      font-weight: 400;
      font-size: 12px;
      line-height: 18px;
      /* or 150% */

      text-align: justify;
      letter-spacing: 0.5px;

      color: #999999;
    }
  }
`