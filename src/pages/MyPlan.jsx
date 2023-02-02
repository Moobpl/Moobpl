// 훅
import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// 컴포넌트
import Header from "../components/Header";
import Loading from "../components/Loading";
import styled from "styled-components";

// 리덕스
import { __getPlan, __deletePlan } from "../redux/modules/PlanSlice";

const Myplan = () => {
  const headstate = true;
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false)
  const { plans, isPlansLoading } = useSelector((state) => state.plans)
  const { me } = useSelector((state) => state.user)
  const wrap = useRef()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(__getPlan())
  }, [plans])

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
        <Edit onClick={() => setEdit(!edit)}>
          <span></span>
          <span></span>
          <span></span>
        </Edit>
        {plans?.map((item) =>

          <PlanCard style={{backgroundImage:`url("${item.cityImg}")`}} key={item._id}>
            <h4>{item.reigon}</h4>
            <span>{item.date}</span>
            {edit ? <button onClick={() => deleteHandler(item._id)}>삭제하기</button> :
              <button onClick={() => navigate(`/moobdetail/${item._id}`)}>자세히보기</button>}
          </PlanCard>

        )}
        {
          plans?.length === 0 ?
            <InfoText>
              일정을 추가해보세요
            </InfoText>
            : null
        }
      </Wrap>
      {isPlansLoading ? <Loading /> : null}
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

const Edit = styled.div`
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
  gap: 6px;
  margin-bottom: 12px;

  span{
    display: block;
    width: 4px;
    height: 4px;
    background-color: #121212;
    border-radius: 100%;
  }
`

const PlanCard = styled.div`
  background-size: cover;
  background-position: center center;
  border-radius: 16px;
  padding: 23px 15px;
  margin-bottom: 24px;
  box-sizing: border-box;
  width: 100%;
  min-height: 120px;
  position: relative;
  overflow: hidden;
  ::before {
    content: "";
    opacity: 0.4;
    background-color: #000;
    width: 100%;
    height: 100%;
    position: absolute;
    top:0; left: 0;
  }

  > h4{
    z-index: 10000;
    width: 10px;
    word-break: keep-all;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
    position: relative;
  }

  span{
    display: inline-block;
    font-weight: 400;
    font-size: 12px;
    color: #FFFFFF;
    margin-top: 6px;
    z-index: 1000;
    position: relative;
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
    z-index: 1000;
    position: relative;
  }
`

const InfoText = styled.div`
  display: block;
  position: absolute;
  width: 100%;
  top:50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 300;
  font-size: 18px;
  text-align: center;
  color: #ACACAC;
`
