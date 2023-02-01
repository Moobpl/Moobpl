// 훅
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// 컴포넌트
import styled from "styled-components";


const Intro = () => {
  const navigate = useNavigate();

  

  useEffect(()=>{
    const movePage = () =>{
      navigate("/login")
    }
    setTimeout(()=>{ movePage() }, 2000);
  }, [navigate]);

  return (
    <LogoWrap>
      <Logo />
    </LogoWrap>
  );
}
export default Intro;

const LogoWrap = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Logo = styled.div`
  width: 150px;
  height: 150px;
  background-color: red;
`