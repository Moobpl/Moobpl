import React, { useCallback } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Intro() {
  const navigate = useNavigate();
  
  useEffect(()=>{
    setTimeout(()=>{ movePage() }, 2000);
  }, []);

  const movePage = () =>{
    navigate("/login")
  }

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