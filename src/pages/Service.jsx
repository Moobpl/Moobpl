//훅
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// 컴포넌트
import Header from '../components/Header';
import styled from 'styled-components';
import Footer from '../components/Footer'

const Service = () => {
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
            서비스 이용약관
          </h1>
        </TextBox>
        <Section>
          <dl>
            <dt>제 1 조 (목적)</dt>
            <dd>
              이 약관은 뭅플이 제공하는
              서비스의 이용과 관련하여 운영자와 이용자와의 권리,
              의무 및 책임사항, 기타 필요한 사항을 규정함을
              목적으로 합니다.
            </dd>
          </dl>

          <dl>
            <dt>제 2 조 (회원정보의 변경)</dt>
            <dd>
            1. “회원”은 개인정보관리화면을 통하여 언제든지
            본인의 개인정보를 열람하고 수정할 수 있습니다.
            다만, 서비스 관리를 위해 필요한 아이디 등은 수정이 불가능합니다.
            </dd>
            <dd>
              2. “회원”은 회원가입신청 시 기재한 사항이 변경되었을 경우
              온라인으로 수정을 하거나 전자우편
              기타 방법으로 “회사”에 대하여 그 변경사항을 알려야 합니다.
            </dd>
            <dd>
            3. 제2항의 변경사항을 “회사”에
            알리지 않아 발생한 불이익에 대하여 “회사”는 책임지지 않습니다.
            </dd>
          </dl>

          <dl>
            <dt>제 3 조 (개인정보보호 의무)</dt>
            <dd>
            3. “회사”는 “정보통신망법” 등 관계 법령이 정하는
            바에 따라 “이용자”의 개인정보를 보호하기 위해 노력합니다.
            개인정보의 보호 및 사용에 대해서는 관련법 및 “회사”의
            개인정보처리방침이 적용됩니다. 다만, “회사”의 공식 사이트 이외의 링크된
            사이트에서는 “회사”의 개인정보처리방침이 적용되지 않습니다.
            </dd>
          </dl>
        </Section>
        <Footer></Footer>
      </Wrap>
    </>
  )
}

export default Service

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
  
  dl{
    margin-top: 50px;
    dt{
      font-family: 'Noto Sans KR';
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      /* identical to box height */

      letter-spacing: 0.5px;

      color: #282B49;
    }
    dd{
      margin-top: 9px;
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