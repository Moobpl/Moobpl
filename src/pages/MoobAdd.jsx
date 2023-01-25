import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import ButtonSubmit from "../components/ButtonSubmit";
import RegionCategory from "../components/category/RegionCategory";
import Calender from "../components/category/Calender";
import { AREACATEGORIES } from '../components/category/AREACATEGORIES';

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __postPlan } from "../redux/modules/PlanSlice";

const MoobAdd = () => {
  const headstate = true;
  const name = "선택 완료"
  const [select, setSelect] = useState(false);
  const [showRegBtn, setShowRegBtn] = useState(false);
  const [showDatBtn, setshowDatBtn] = useState(false);

  const { me } = useSelector((state) => state.user);

  const [areaName, setAreaName] = useState("")
  const [date, setDate] = useState("")

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const planInfo = {
    id: me?.email,
    region: areaName,
    date: date,
    todos: [],
    checkList: [],
  }
  
  const onSelectHandler = () => {
    setSelect(true);
    setShowRegBtn(false);
  }

  const onTransmitHandler = () => {
    dispatch(__postPlan(planInfo));
    navigate("/myplan");
  }

  return (
    <>
    <Header headstate={headstate}></Header>
    <Toptext><p>이사, 어디로 가시나요?</p></Toptext>
    <Wrap>
      {
        select === true 
        ? (
          <Calender
            setDate={setDate}
            setshowDatBtn={setshowDatBtn}
          ></Calender>
          )
        : (
          <>
              {AREACATEGORIES.map((item) => {
                return (
                    
                    <RegionContainer
                      key={item.id}
                    >
                      <RegionCategory
                        key={item.id}
                        title={item.name}
                        subcategory={item.subcategories}
                        setAreaName={setAreaName}
                        setShowRegBtn={setShowRegBtn}
                      />
                    </RegionContainer>
                  );
                })
              }
          </>
        )
      }
    </Wrap>
     {
      showRegBtn === true 
      ? (
        <ButtonWrap
              onClick={(select)=> onSelectHandler(select)}
              >
              <ButtonSubmit
                buttonName={name}
              ></ButtonSubmit>
            </ButtonWrap> 
        )
      : ( showDatBtn === true 
          ? <ButtonWrap
                onClick={(select)=> onTransmitHandler(select)}
              >
              <ButtonSubmit
                buttonName={name}
              ></ButtonSubmit>
            </ButtonWrap> 
          : null
        )
    } 
    </>
  )
};

const Wrap = styled.div`
  width:100%;
  height: 100%;
  padding:60px 24px 0 24px;
  box-sizing: border-box;
  overflow: scroll;
  position:relative;
  &::-webkit-scrollbar {
  display: none; /* 크롬, 사파리, 오페라, 엣지 */
  }
`;

const Toptext = styled.div`
  position: absolute;
  top:20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  p{
    color:#aaa;
  }
`
const RegionContainer = styled.div`

`
const ButtonWrap = styled.div`
  position: absolute;
  width: 100%;
  padding: 0 24px;
  box-sizing: border-box;
  left: 0;
  bottom: 24px;
`

export default MoobAdd;
