import React, { useState } from "react";
import styled from "styled-components";
import ButtonSubmit from "../components/ButtonSubmit";
import RegionCategory from "../components/category/RegionCategory";
import Calender from "../components/category/Calender";
import MoobDetail from  "./MoobDetail";
import { AREACATEGORIES } from '../components/category/AREACATEGORIES';

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { __postPlan } from "../redux/modules/PlanSlice";


const MoobAdd = () => {
  const name = "선택 완료"
  const [select, setSelect] = useState(false);
  const [showRegBtn, setShowRegBtn] = useState(false);
  const [showDatBtn, setshowDatBtn] = useState(false);

  const [areaName, setAreaName] = useState("")
  const [date, setDate] = useState("")

  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log("선택지역", areaName);
  
  //지역 등록
  const planInfo = {
    region: areaName,
    date: date,
    todos: [],
    checkList: [],
  }
  
  const onSelectHandler = () => {
    setSelect(true);
    setShowRegBtn(false);
    console.log("지역만 선택 버튼클릭");
  }

  const onTransmitHandler = () => {
    dispatch(__postPlan(planInfo));
    navigate("/MoobDetail/:id");
    console.log("지역&날짜 버튼클릭");
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
                    <RegionContainer>
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
    
    {/* {show && <ButtonWrap
                onClick={(select)=> onSelectHandler(select)}
              >
              <ButtonSubmit
                buttonName={name}
              ></ButtonSubmit>
            </ButtonWrap> 
    } */}

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
