import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getPlan, __deletePlan } from "../redux/modules/PlanSlice";
import Header from "../components/Header";
import { useEffect } from "react";
import { useRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Myplan = () => {
  const headstate = true;
  const dispatch = useDispatch();
  const { plans } = useSelector((state) => state.plans)
  const { me } = useSelector((state) => state.user)

  const wrap = useRef()
  const navigate = useNavigate()
  const [edit, setEdit] = useState(false)

  useEffect(() => {
    dispatch(__getPlan())
  }, [])

  const deleteHandler = (id) => {
    dispatch(__deletePlan(id))
  }

  return (
    <>
      <Header headstate={headstate}></Header>
      <Wrap ref={wrap}>
        <TextBox>
          <span>{me.nickName}님 환영합니다.</span>
          <h1>
            나의 이사일정.<br />
          </h1>
        </TextBox>
        <span onClick={() => setEdit(!edit)}>수정모드</span>
        {plans?.map((item) =>

          <PlanCard key={item._id}>
            <h4>{item.reigon}</h4>
            <span>{item.date}</span>
            {edit ? <button onClick={() => deleteHandler(item._id)}>삭제하기</button> :
              <button onClick={() => navigate(`/moobdetail/${item._id}`)}>자세히보기</button>}
          </PlanCard>

        )}
        {
          plans?.length === 0 ? "일정을 추가해보세요" : null
        }
      </Wrap>
    </>
  )
}

export default Myplan;

const wrapCalc = 'calc(100% - 48px)'

const Wrap = styled.div`
  width: ${wrapCalc};
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
  width: 100%;
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

const PlanCard = styled.div`
  background-color: red;
  border-radius: 16px;
  padding: 23px 15px;
  margin-bottom: 24px;
  >h4{
    width: 10px;
    word-break: keep-all;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
  }

  span{
    display: inline-block;
    font-weight: 400;
    font-size: 12px;
    color: #FFFFFF;
    margin-top: 6px;
  }

  >button {
    border: none;
    background: #F9A76F;
    border-radius: 100px;
    padding: 5px 18px;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    color: #FFFFFF;
    float: right;
  }
`
