import React, {useState} from "react";
import { useEffect } from "react";
import styled from "styled-components";
import moment from 'moment'; //momentjs
import 'moment/locale/ko';

const Dday = ({dday}) => {
  const [selectDay, setSelectDay] = useState('');

  const diffDay = () => {
      const dayset = new Date();
      const today = moment(dayset).format('YYYY-MM-DD');

      setSelectDay(moment(today).diff(moment(dday), 'days'));
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
