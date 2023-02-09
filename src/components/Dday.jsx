import React, {useState} from "react";
import { useEffect } from "react";
import styled from "styled-components";
import moment from 'moment'; //momentjs
import 'moment/locale/ko';

const Dday = ({dday}) => {
  const [selectDay, setSelectDay] = useState('');

  const diffDay = () => {
      const selectDay = String(dday).split('-').map(str => Number(str));
      console.log("셀렉트데이!",selectDay)

      const dayset = new Date();
      const today = moment(dayset).format('YYYY-MM-DD').split('-').map(str => Number(str));
      const todaySec = moment(today).valueOf();
      console.log("투데이!", todaySec)

      const setdaySec = moment(selectDay).valueOf();
      console.log("셋데이!", setdaySec)
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
