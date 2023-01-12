import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Hamberger from "./Hamberger";

const Header = ({headstate}) => {

  const [open, setOpen] = useState(true)

  const navigate = useNavigate();

  return (
      <HeaderWrap>
        <Container>
          <img src="images/backarrow.png" alt="" onClick={() => { navigate(-1) }} />
          {headstate ? <Menu>
            <span></span>
            <span></span>
            <span></span>
          </Menu> : null }
          
        </Container>
      </HeaderWrap>
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
  background-color: #fff;
  z-index: 999;
`

const Container = styled.div`
  width: calc(100% - 48px);
  display: flex;
  justify-content: space-between;
  align-items: center;

  img{

  }
`

const Menu = styled.div`
  width: 18px;
  height: 16px;
  position: relative;

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