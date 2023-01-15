import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import HambergerList from './HambergerList'

const Hamberger = ({ open, openHandler }) => {
  const [close, setClose] = useState(false)
  const [className, setClassname] = useState("")

  return (
    <Wrap className={`${open}`}>
      <header>
        <img src="images/hamberger/1x/Asset 7.png" alt="" onClick={()=>{openHandler("close")}} />
      </header>
      <section>
        <Profile>
          <Photo></Photo>
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
    transform: translateX(100%);

    &.close{
      transform: translateX(100%);
    }

    &.open{
      transform: translateX(0%);
    }

    header {
      width: calc(100% - 48px);
      height: 60px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin: 0 auto;
      >img{
        display: block;
        width: 14px;
        height: 14px;
      }
    }

    section {
      width: calc(100% - 48px);
      margin: 0 auto;
    }
`

const Profile = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  h4{
    margin-left: 30px;
    font-size: 18px;
    font-weight: 500;
    color: #333333;
  }
`

const Photo = styled.div`
  width: 60px;
  height: 60px;
  background-color: #666666;
  border-radius: 100%;
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