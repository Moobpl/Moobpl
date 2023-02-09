
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useRef } from "react";
import useOutSideClick from "./hooks/useOutSideClick";

import { Calendar } from 'react-date-range';
import ko from 'date-fns/locale/ko';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import './category/Calender.style.css'

import { __patchTodos } from "../redux/modules/PlanSlice";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import ButtonSubmit from "./ButtonSubmit";
import moment from 'moment'; //momentjs
import 'moment/locale/ko';

const Modalcalendar = ({ onClose }) => {
  const modalRef = useRef(null)
  const handleClose = () => {
    onClose?.();
  };

  useOutSideClick(modalRef, handleClose);
  
  const dispatch = useDispatch();
  const { plan } = useSelector((state) => state.plans);

  const { id } = useParams();
  const [todoDate, setTodoDate] = useState("");
  const [selectTodoDate, setSelectTodoDate] = useState(false);
  const name = "선택완료"

  // console.log("모달캘린더 투두데이트",todoDate)

  useEffect(() => {
    if (plan) {
      const findTodo = plan.find((item) => {
        return item._id === id
      })
      setTodoDate(findTodo);
    }
  }, [plan]);

  // console.log(todoDate);
  
  const handleSelect = (todoDate) => {
    setTodoDate(todoDate);
    setSelectTodoDate(true);
  }

  const buttonHandler = (todoDate) => {
    setTodoDate(todoDate);
    dispatch(__patchTodos({
      _id: id,
      date: todoDate,
      todo: [],
    }));
    handleClose(onClose?.());
  }

  return (
    <Overlay>
      <ModalWrap ref={modalRef}>
        <Contents>
          <Calendar className="calendar"
            locale={ko}
            months={4}
            color={"#f9a76f"}
            todoDate={todoDate}
            onChange={(todoDate) => handleSelect(moment(todoDate).format('YYYY-MM-DD'))}
          />
          {selectTodoDate === true ? 
            <ButtonWrap onClick={()=>buttonHandler(todoDate)}>
              <ButtonSubmit buttonName={name}></ButtonSubmit>
            </ButtonWrap>
           : null
          } 
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
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(3.5px);
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
  display: none;
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

const ButtonWrap = styled.div`
  position: sticky;
  width: 100%;
  
  box-sizing: border-box;
  left: 0;
  bottom: 24px; 
  z-index: 9999;
`