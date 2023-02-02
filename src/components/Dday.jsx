import React, {useState} from "react";
import { useEffect } from "react";

import dayjs from 'dayjs'; //날짜 포맷해주는 함수

const Dday = ({dday}) => {
  const [selectDay, setSelectDay] = useState('');

  const diffDay = () => {
      const selectDay = String(dday).split('-').map(str => Number(str));
          // console.log("셀렉트데이", selectDay);
          
      const dayset = new Date();
      const today = dayjs(dayset).format('YYYY-MM-DD').split('-').map(str => Number(str));
      // console.log("투데이", today);

      const todaySec = new Date(today).getTime();
      const setdaySec = new Date(selectDay).getTime();
      setSelectDay(Math.ceil(todaySec-setdaySec) / (1000*60*60*24));
  }
    

  useEffect(()=>{
    diffDay();
  }, [dday]);

  return <div>{selectDay}</div>;
};

export default Dday;
