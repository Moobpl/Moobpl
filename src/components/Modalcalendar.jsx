import React, {useState, useEffect} from "react";
import styled from "styled-components";
import { useRef} from "react";
import useOutSideClick from "./hooks/useOutSideClick";

import { Calendar } from 'react-date-range';
import ko from 'date-fns/locale/ko';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css';
import './category/Calender.style.css'

import {__patchTodos} from "../redux/modules/PlanSlice";
import { useDispatch, useSelector} from 'react-redux';
import { useParams } from "react-router-dom";

import dayjs from 'dayjs';

const Modalcalendar = ({onClose }) => {
  const modalRef = useRef(null)
  const handleClose = () => {
    onClose?.();
  };

 useOutSideClick(modalRef, handleClose);
 
 const dispatch = useDispatch();
  const { plan } = useSelector((state) => state.post);
  // console.log("플랜", plan);
  const { id } = useParams();
  const [todoDate, setTodoDate] = useState("");

  useEffect(()=>{
    if(plan){
      const findTodo= plan.find((item) => {
         return item._id === id
      })
      setTodoDate(findTodo);
    }
  }, [plan]);

  // console.log(todoDate);

   const handleSelect = (todoDate) => {
    
    setTodoDate(todoDate);
    // console.log("투두데이트",todoDate); 
    dispatch(__patchTodos({
      _id: id,
      date: todoDate,
      todo: [],
    }));

  }

  return (
    <Overlay>
      <ModalWrap ref={modalRef}>
        <Contents>
          <Calendar className="calendar"
            locale={ko}
            months={4}
            color={["#f9a76f"]}
            todoDate={todoDate}
            onChange={(todoDate) => handleSelect(dayjs(todoDate).format('YYYY-MM-DD'))}
          />
        </Contents>
      </ModalWrap>
    </Overlay>
  );
};
export default Modalcalendar;

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 9999;
`;

const ModalWrap = styled.div`
  width: 100%;
  height: 600px;
  
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-color: #fff;
  position: relative;
  top: calc(100% - 600px);
  bottom: 0px;  
  overflow: scroll;
  &::-webkit-scrollbar {
  display: none; /* 크롬, 사파리, 오페라, 엣지 */
  }
`;

const Contents = styled.div`
  margin: 50px 30px;
  h1 {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 60px;
  }
  img {
    margin-top: 60px;
    width: 300px;
  }
`;
