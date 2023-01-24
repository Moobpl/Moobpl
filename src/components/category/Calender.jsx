import { Calendar } from 'react-date-range';
// import { Component } from 'react';
import React  from 'react';
import ko from 'date-fns/locale/ko';
import 'react-date-range/dist/styles.css'; // main style file 
import 'react-date-range/dist/theme/default.css'; // theme css file

const Calender = ({setDate, setshowDatBtn}) => {

  const handleSelect = (date) => {
    console.log(date); // native Date object
    setDate(date);
    setshowDatBtn(true);
  }

  return (
      <Calendar
        locale={ko}
        months={4}
        date={new Date()}
        onChange={(date) => handleSelect(date)}
      />
  );
}

export default Calender; 
