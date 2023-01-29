import React, { useState, useEffect } from "react";
import styled from "styled-components";
import dayjs from 'dayjs';
import ModalTodo from "./ModalTodo";
import { useSelector, useDispatch } from "react-redux";
import { __deleteTodos, __deleteTodo } from "../redux/modules/PlanSlice";


const TodoList = ({ todos, data }) => {
  const [modalTodoOpen, setModalTodoOpen] = useState(false);
  const { plans } = useSelector((state) => state.plans);
  const [todoDate, setTodoDate] = useState([]);

  console.log(todos);
  //투두스와 투두아이디
  const [todosId, setTodosId] = useState('');
  const [todoId, setTodoId] = useState('');

  const [modalId, setModalId] = useState('');
  const dispatch = useDispatch();


  useEffect(() => {
    if (todos) {
      //todos.map((item) => todoDate.push((item.date)));

    }
  }, [todos]
  );

  const delId = {
    planId: data?._id,
    todosId: todosId,
  }

  const dayset = new Date();
  const today = dayjs(dayset).format('YYYY-MM-DD').split('-').map(str => Number(str));

  const modalOpenHandler = (e) => {
    setModalTodoOpen(true);
    setModalId(e.target.name);
  }

  const deleteTodosHandler = (e) => {
    dispatch(__deleteTodos({
      planId: data?._id,
      todosId: e.target.name
    }))
  }
  const deleteHandler = (e) => {
 
    dispatch(__deleteTodo({
      planId: data?._id,
      todosId: e.target.name,
      _id: e.target.value
    }));
  }

  return (
    <>
      {todos?.map((item) => (
        <>
          <AddTodoDate
            key={item._id}
            todo={item.todo}
          >
            / <span>{item?.date}</span>
            <button name={item?._id} onClick={deleteTodosHandler}>날짜삭제</button>
          </AddTodoDate>

          {item.todo.map((list) => (
            <ul key={list._id} >
              <li>
                {list.title} {list.body}
                <button value={list?._id} name={item._id} onClick={deleteHandler}>삭제</button>
              </li>

            </ul>
          ))}
          <AddTodoBtn name={item._id} onClick={modalOpenHandler}>할일추가</AddTodoBtn>
        </>
      ))}
      {
        modalTodoOpen ?
          <ModalTodo data={data} modalId={modalId}></ModalTodo>
          : null
      }
    </>
  );
};

export default TodoList;

const AddTodoDate = styled.h1`
  
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