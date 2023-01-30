import { Calendar } from 'react-date-range';
import React,{useState}  from 'react';
import ko from 'date-fns/locale/ko';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css';
import './Calender.style.css'

import dayjs from 'dayjs'; //날짜 포맷해주는 함수

const Calender = ({setDate, setshowDatBtn}) => {

  const [pickDate, setPickDate] = useState(new Date());

  const handleSelect = (pickDate) => {
    // console.log(pickDate); 
    setPickDate(pickDate);
    setDate(pickDate);
    setshowDatBtn(true);
  }
  
  return (
    <>
      <Calendar className="calendar"
        locale={ko}
        months={4}
        color={['#f9a76f']}
        pickDate={pickDate}
        onChange={(pickDate) => handleSelect(dayjs(pickDate).format('YYYY-MM-DD'))}
      />
        
    </>
  );
}

export default Calender; 
