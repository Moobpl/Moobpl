import React, {useState} from "react";
import { useEffect } from "react";
import dayjs from 'dayjs'; //날짜 포맷해주는 함수

const Dday = ({dday}) => {
  const [selectDay, setSelectDay] = useState('');

  const diffDay = () => {
      const selectDay = String(dday).split('-').map(str => Number(str));    
      const dayset = new Date();
      const today = dayjs(dayset).format('YYYY-MM-DD').split('-').map(str => Number(str));
      const todaySec = new Date(today).getTime();
      const setdaySec = new Date(selectDay).getTime();
      setSelectDay(Math.ceil(todaySec-setdaySec) / (1000*60*60*24));
  }
    
  useEffect(()=>{
    diffDay();
  }, [dday]);

  return <div><p>D{selectDay} /</p></div>;
};

export default Dday;

