import React, { useState } from 'react';
import dayjs from 'dayjs';
import { useEffect } from 'react';

const DayCalc = ({ date }) => {
  const [dDay, setDday] = useState('')
  const diffDay = () => {
    const selectDay = String(date).split('-').map(str => Number(str));
    const dayset = new Date();
    const today = dayjs(dayset).format('YYYY-MM-DD').split('-').map(str => Number(str));
    const todaySec = new Date(today).getTime();
    const setdaySec = new Date(selectDay).getTime();

    // console.log(Math.sign(Math.ceil(setdaySec - todaySec) / (1000 * 60 * 60 * 24)));
    setDday(Math.ceil(todaySec - setdaySec) / (1000 * 60 * 60 * 24))
  }

  useEffect(()=>{
    diffDay()
  },[diffDay])
  return (
    <div>
      D{dDay}
    </div>
  )
}
export default DayCalc