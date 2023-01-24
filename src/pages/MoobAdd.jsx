import React, { useState } from "react";
import styled from "styled-components";
import ButtonSubmit from "../components/ButtonSubmit";
import RegionCategory from "../components/category/RegionCategory";
import Calender from "../components/category/Calender";
import { AREACATEGORIES } from '../components/category/AREACATEGORIES';

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { __postPlan } from "../redux/modules/PlanSlice";
import { useEffect } from "react";

const MoobAdd = () => {
  const name = "선택 완료"
  const [select, setSelect] = useState(false);
  const [showRegBtn, setShowRegBtn] = useState(false);
  const [showDatBtn, setshowDatBtn] = useState(false);

  const [areaName, setAreaName] = useState("")
  const [date, setDate] = useState("")

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const planInfo = {
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
    navigate("/MyPlan");
  }

  return (
    <>
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
  margin-top:15px;
  padding:0 24px;
  box-sizing: border-box;
  overflow: scroll;
  position:relative;
`;
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
