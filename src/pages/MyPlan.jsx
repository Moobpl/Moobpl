import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getPlan } from "../redux/modules/postSlice";
import Header from "../components/Header";
import { useEffect } from "react";
import { useRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Myplan = () => {
  const headstate = true;
  const dispatch = useDispatch();
  const { plan } = useSelector((state) => state.post)
  const { me } = useSelector((state) => state.user)
  const wrap = useRef()
  const navigate = useNavigate()
  useEffect(() => {
    dispatch(__getPlan())
  }, [])

  return (
    <>
      <Header headstate={headstate}></Header>
      <Wrap ref={wrap}>
        <TextBox>
          <span>{me.nickName}님 환영합니다.</span>
          <h1>
            환영합니다.<br />
            뭅플입니다.
          </h1>
        </TextBox>
        {plan?.map((item) => {
          return (
            <div>
              <h4>{item.reigon}</h4>
              <span>{item.date}</span>
              <p>{item.checkList.length} / 10</p>
              <button onClick={() => navigate(`/moobdetail/${item._id}`)}>자세히보기</button>
            </div>
          )
        })}
      </Wrap>
    </>
  )
}

export default Myplan;

const wrapCalc = 'calc(100% - 48px)'

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  overflow-y: scroll;

  &::-webkit-scrollbar {
  display: none; /* 크롬, 사파리, 오페라, 엣지 */
  }
`

const TextBox = styled.div`
  padding-top: 86px;
  width: ${wrapCalc};
  margin: 0 auto;
  margin-bottom: 19px;

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
