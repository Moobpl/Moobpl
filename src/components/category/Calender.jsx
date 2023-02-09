import { Calendar } from 'react-date-range';
import React,{useState}  from 'react';
import ko from 'date-fns/locale/ko';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css';
import './Calender.style.css'
import moment from 'moment'; //momentjs
import 'moment/locale/ko';

const Calender = ({setDate, setshowDatBtn}) => {
  const [pickDate, setPickDate] = useState(new Date());

  const handleSelect = (pickDate) => {
    setPickDate(pickDate);
    setDate(pickDate);
    setshowDatBtn(true);
  }
  
  return (
    <>
      <Calendar className="calendar"
        locale={ko}
        months={4}
        color={'#f9a76f'}
        pickDate={pickDate}
        onChange={(pickDate) => handleSelect(moment(pickDate).format('YYYY,MM,DD'))}
      />
        
    </>
  );
}

export default Calender; 
