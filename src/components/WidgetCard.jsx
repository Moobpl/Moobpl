import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "../fonts/Font.css";
import { useNavigate } from "react-router-dom";
import moment from 'moment'; //momentjs
import 'moment/locale/ko';

const WidgetCard = ({ data = [] }) => {
  const [dDay, setDday] = useState('');
  const naviate = useNavigate();

  const diffDay = () => {
    // const selectDay = String(data.date).split('-').map(str => Number(str));

    // const dayset = new Date();
    // const today = moment(dayset).format('YYYY-MM-DD').split('-').map(str => Number(str));

    // const todaySec = moment(today).valueOf();
    // const setdaySec = moment(selectDay).valueOf();
    // setDday(Math.ceil(todaySec - setdaySec) / (1000 * 60 * 60 * 24));
    const selectDay = data.date;
    console.log("셀렉트데이!", selectDay);
    
    const dayset = new Date();
    const today = moment(dayset).format('YYYY-MM-DD');
    console.log("투데이", today);

    setDday(moment(today).diff(moment(selectDay), 'days'));

  }

  useEffect(() => {
    diffDay();
  }, [data])

  return (
    <>
      <WidgetBox style={{backgroundImage:`url("${data.cityImg}")`}}>
        <WidgetContainer>
          <Left>
            <p>체크리스트</p>
            <p onClick={() => naviate(`./checklist`)}>
              {data?.checkList?.length} / 29
            </p>
          </Left>
          <Right>
            {
              dDay < 0
                ? <>
                  <p>이삿날 </p>
                  <p>D{dDay}</p>
                </>
                :
                <>
                  <p>이삿날 </p>
                  <p>D+{dDay}</p>
                </>
            }
          </Right>
        </WidgetContainer>
      </WidgetBox>

    </>
  );
};

const WidgetBox = styled.div`
  width:100%;
  height:200px;
  border-radius: 15px;
  background-image:url("/images/city/jongro.jpg");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  padding:15px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  ::after {
    content: "";
    opacity: 0.4;
    background-color: #000;
    width: 100%;
    height: 100%;
    position: absolute;
  }
`
const WidgetContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  z-index: 1000;
`
const Left = styled.div`
  width: 50%;
  color:#fff;
  text-align: center;
  > p:nth-child(1){
    font-size:12px;
  }
  p:nth-child(2){
    font-size: 42px;
    font-family:'SF Pro Text';
    font-weight: bold;
  }
`
const Right = styled.div`
  width: 50%;
  > p:nth-child(1){
    text-align:center;
    color:#fff;
    font-size: 12px;
  }
  p:nth-child(2){
    text-align:center;
    color:#fff;
    font-size: 42px;
    font-family: 'SF Pro Text';
    font-weight: bold;
    
  }
`

export default WidgetCard;
