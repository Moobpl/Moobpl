import React, {useState, useEffect} from "react";
import styled from "styled-components";
import dayjs from 'dayjs';
import ModalTodo from "./ModalTodo";

const TodoList = ({todos}) => {
  console.log(todos);

  const [modalTodoOpen, setModalTodoOpen] = useState(false);

  const [todoDate, setTodoDate] = useState([]);

  const [modalId, setModalId] = useState('');

  useEffect(()=>{
    if(todos) {
      todos.map((item) => todoDate.push((item.date)))
    }
  }, [todos]);

  const dayset = new Date();
  const today = dayjs(dayset).format('YYYY-MM-DD').split('-').map(str => Number(str));
  console.log("오늘날짜", today);

  const modalOpenHandler = (e) => {
    
    setModalTodoOpen(true);
    setModalId(e.target.name);
  }


  return (
    <>
      {
        todos?.map((item) => {
          return(
            <>
                <AddTodoDate 
                  key={item._id}
                >
                  / <span>{item?.date}</span>
                </AddTodoDate>
                <AddTodoBtn name={item._id} onClick={modalOpenHandler}>할일추가</AddTodoBtn>
            </>
          )
        })
      }
      {
        modalTodoOpen ? 
        <ModalTodo modalId={modalId}></ModalTodo>
        : null
      }
      
    </>
  );
};

export default TodoList;

const AddTodoDate = styled.h1 `
  
  span { 
    color: #aaa;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: 0.3px;
  }
`

const AddTodoBtn = styled.button`
  box-sizing: border-box;
  width: 100%;
  height: 37px;
  left: 24px;
  top: 649px;
  background: #FFFFFF;
  border: 1px solid #F2F2F2;
  border-radius: 14px;
  color:#aaa;
  margin-top:15px;
  cursor: pointer;
`