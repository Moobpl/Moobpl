import React, { useState, useEffect } from "react";
import styled from "styled-components";

import dayjs from 'dayjs'; //날짜 포맷해주는 함수

const WidgetCard = ({ data=[]}) => {
  const [dDay, setDday] = useState('');

  const diffDay = () => {
    const selectDay = String(data.date).split('-').map(str => Number(str));
    // console.log("설정날짜 찾기 자리값", selectDay);

    const dayset = new Date();
    const today = dayjs(dayset).format('YYYY-MM-DD').split('-').map(str => Number(str));
    // console.log("오늘날짜", today);

    const todaySec =  new Date(today).getTime();
    const setdaySec = new Date(selectDay).getTime();

    // console.log(Math.sign(Math.ceil(setdaySec-todaySec) / (1000*60*60*24)));
    setDday(Math.ceil(todaySec-setdaySec) / (1000*60*60*24));
  }

  useEffect(()=>{
    diffDay();
  }, [data])

  return (
    <>
      <WidgetBox>
        <WidgetContainer>
          <Left>
            <p>체크리스트</p>
            <p>
              {data?.checkList?.length} / 29
            </p>
          </Left>
          <Right>
            {
              dDay < 0 
               ?<>
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
  background-blend-mode:multiply;
  padding:15px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`
const WidgetContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
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
    font-family: 'SF Pro Text';
    font-weight: 600;
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
    font-weight: 600;
    
  }
`

export default WidgetCard;
