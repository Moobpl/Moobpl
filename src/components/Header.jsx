import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import Hamberger from "../components/Hamberger";

const Header = ({ headstate, page }) => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState("close");

  const openHandler = (text) => {
    setMenuOpen(text);
  }

  const location = useLocation();

  return (
    <>
      <HeaderWrap>
        <Container>
          {
            page ?
              <Logo src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="" /> : <img src={`${process.env.PUBLIC_URL}/images/backarrow.png`} alt="" onClick={() => { location.pathname === "/myplan" ? navigate("/main") : navigate(-1) }} />
          }
          {headstate ?
            <Menu onClick={() => { openHandler("open") }}>
              <span></span>
              <span></span>
              <span></span>
            </Menu> : null}
        </Container>
      </HeaderWrap>
      {headstate ? <Hamberger open={menuOpen} openHandler={openHandler}></Hamberger> : null}
      {menuOpen === "open" ? <BackWrap /> : null}
    </>
  );
};

export default Header;

const HeaderWrap = styled.header`
  max-width: 375px;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  position: fixed;
  background-color: #FBFBFC;
  z-index: 998;
  overflow: hidden;
`

const Container = styled.div`
  width: calc(100% - 48px);
  display: flex;
  justify-content: space-between;
  align-items: center;

  img{
    cursor: pointer;
  }
`

const Logo = styled.img`
  display: block;
  width: 75px;
`

const Menu = styled.div`
  width: 18px;
  height: 16px;
  position: relative;
  cursor: pointer;

  span{
    display: block;
    width: 100%;
    height: 1.5px;
    border-radius: 5px;
    background-color: #121212;
    transform: matrix(-1, 0, 0, 1, 0, 0);
  }
  span:first-child{
    width: 12px;
  }

  span:nth-child(2){
    position: absolute;
    bottom: 7.25px;
  }

  span:last-child{
    width: 12px;
    position: absolute;
    bottom: 0px;
    right: 0;
  }
`

const BackWrap = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(3.5px);
  position: absolute;
  z-index: 998;
`