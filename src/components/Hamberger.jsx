import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import HambergerList from './HambergerList'

import { __getPlan } from '../redux/modules/PlanSlice'

const Hamberger = ({ open, openHandler }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user)
  const { plans } = useSelector((state) => state.plans)

  useEffect(() => {
    dispatch(__getPlan())
  }, [dispatch])

  return (
    <Wrap className={`${open}`}>
      <header>
        <div>
          <img src={`${process.env.PUBLIC_URL}/images/hamberger/1x/Asset 7.png`} alt="" onClick={() => { openHandler("close") }} />
        </div>
      </header>
      <section>
        <Container>
          <Profile>
            <Photo><img src={ me?.profile === undefined ? `${process.env.PUBLIC_URL}/images/unknown.png` : me.profile } alt="" /></Photo>
            <h4>{me?.nickName}</h4>
          </Profile>
          <Myplan onClick={() => { navigate("/myplan") }}>{`내 계획 : ${plans?.length}`}</Myplan>
          <HambergerList margin={"60px"}></HambergerList>
        </Container>
      </section>
    </Wrap>
  )
}

export default Hamberger

const Wrap = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #fff;
    transition: 0.6s;
    z-index: 9999;
    transform: translateX(100%);

    &.close{
      transform: translateX(100%);
    }

    &.open{
      transform: translateX(0%);
    }

    header {
      width: 100%;
      height: 60px;
      position: fixed;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      background-color: #fff;

      >div{
        width: calc(100% - 48px);
        margin: 0 auto;
        >img{
          display: block;
          width: 14px;
          height: 14px;
          float: right;
          cursor: pointer;
        }
      }
    }

    section {
      height: 100vh;
      overflow-y: auto;
    }
`

const Container = styled.div`
    width: calc(100% - 48px);
    margin: 0 auto;
    padding-top: 60px;
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
  overflow: hidden;
  >img{
    display: block;
    width: 100%;
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
  cursor: pointer;
`