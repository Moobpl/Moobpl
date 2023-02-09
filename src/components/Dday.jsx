import React, {useState} from "react";
import { useEffect } from "react";
import dayjs from 'dayjs'; //날짜 포맷해주는 함수
import styled from "styled-components";

const Dday = ({dday}) => {
  const [selectDay, setSelectDay] = useState('');

  const diffDay = () => {
      const selectDay = String(dday).split('-').map(str => Number(str));    
      const dayset = new Date();
      const today = dayjs(dayset).format('YYYY/MM/DD').split('/').map(str => Number(str));
      const todaySec = new Date(today).getTime();
      const setdaySec = new Date(selectDay).getTime();
      setSelectDay(Math.ceil(todaySec-setdaySec) / (1000*60*60*24));
  }
    
  useEffect(()=>{
    diffDay();
  }, [dday]);

  return (
  <DdayText>
    {
      selectDay < 0 
      ? <p>D{selectDay} /</p>
      : <p>D+{selectDay} /</p>
    }    
  </DdayText>
  );
};

export default Dday;

const DdayText = styled.div`
  > p {
    font-family: 'SF Pro Text';
  }
`
