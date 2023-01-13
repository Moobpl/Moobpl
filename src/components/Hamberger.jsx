import React, { useState } from 'react'
import styled from 'styled-components'
import HambergerList from './HambergerList'

const Hamberger = ({ open }) => {
  const [close, setClose] = useState(true)
  const closeHandler = () => {
    setClose(!close)
  }
  return (
    <Wrap className={`${open ? "open" : close ? false : "close"}`}>
      <header>
        <span onClick={closeHandler}></span>
      </header>
      <section>
        <Profile>
          {/* <Photo></Photo> */}
          <h4>닉네임</h4>
        </Profile>
        <Myplan>내 계획 : 0</Myplan>
        <HambergerList margin={"60px"}></HambergerList>
      </section>
    </Wrap>
  )
}

export default Hamberger

const Wrap = styled.div`
    width: 100%;
    min-height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #fff;
    transition: 0.3s;
    z-index: 9999;
    &.close{
      transform: translateX(100%);
    }

    &.open{
      transform: translateX(0%);
    }

    header {
      height: 60px;
    }

    section {
      width: calc(100% - 48px);
      margin: 0 auto;
    }
`

const Profile = styled.div`
  width: 100%;

  h4{
    font-size: 18px;
    font-weight: 500;
    color: #333333;
  }
`

const Myplan = styled.div`
  width: 100%;
  background: #F9A76F;
  border-radius: 7px;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.3px;
  color: #FFFFFF;
  padding: 12px 0px;
  text-align: center;
  margin-top: 28px;
`