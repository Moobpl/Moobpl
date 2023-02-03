import React, { useState } from "react";
import styled from "styled-components";
import ModalTodo from "./ModalTodo";
import { useDispatch } from "react-redux";
import { __deleteTodos, __deleteTodo } from "../redux/modules/PlanSlice";
import Dday from "./Dday";

const TodoList = ({ todos, data, editMode, setEditMode}) => {
  const dispatch = useDispatch();
  
  const [modalTodoOpen, setModalTodoOpen] = useState(false);
  const [modalId, setModalId] = useState('');

   const modalOpenHandler = (e) => {
    setModalTodoOpen(true);
    setModalId(e.target.name);
  }

  const deleteTodosHandler = (e) => {
    dispatch(__deleteTodos({
      planId: data?._id,
      todosId: e.target.name
    }))
    setEditMode(false);
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
          <TodoWrap
            key={item._id}>
            <AddTodoDate 
              todo={item.todo}
            >              
              <Dday dday={item.date}></Dday><TodoDay>{item.date}</TodoDay>            
              {
                editMode ? <DeleteBtn name={item?._id} onClick={deleteTodosHandler}><span></span></DeleteBtn>
                : null
              }
            </AddTodoDate>
            {item.todo.map((list) => (
                <TodoBox key={list._id}>
                  <div className="boxWrap">
                    <div style={{backgroundColor: `${list.color}`}} >
                      <img src={list.category} alt=""  /> 
                    </div>
                    <dl>
                      <dt>{list.title}</dt>
                      <dd>{list.body}</dd>
                    </dl> 
                  </div>
                  {editMode ? <DeleteBtn value={list?._id} name={item._id} onClick={deleteHandler}><span></span></DeleteBtn> 
                    : null
                  }                
                </TodoBox>
              )
            )}
            {editMode ? null 
              : <AddTodoBtn setModalTodoOpen={setModalTodoOpen} name={item._id} onClick={modalOpenHandler}>할일추가</AddTodoBtn> }
          </TodoWrap>
        ))
      }
      {
        modalTodoOpen ?
          <ModalTodo data={data} modalId={modalId} setModalTodoOpen={setModalTodoOpen}></ModalTodo>
          : null
      }
    </>
  );
};

export default TodoList;


const AddTodoDate = styled.h1`
  display: flex;
  align-items:center;
  gap:10px;
  margin-bottom: 10px;
  line-height: 22px;
  p{
    color:#121212;
    font-size:22px;
  }
  > button{
    margin-top:5px;
  }
`
const TodoDay = styled.span`
    display: inline-block;
    color: #aaa;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: 0.3px;
    vertical-align:bottom;
    margin-top:5px;
`
const TodoWrap = styled.div`
  margin-bottom: 40px;
`
const TodoBox = styled.div`
  background-color:#fff;
  border-radius: 14px;
  padding: 5px;
  box-shadow: 10px 24px 54px rgba(0, 0, 0, 0.04);
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  div.boxWrap {
    display: flex;
    width: 100%;
    overflow: hidden;
    
   > div {
      position: relative;
      border-radius: 14px;
      width:50px; 
      height: 50px;
      margin-right: 15px;
      img{
        display: block;
        position: absolute;
        top:50%;
        left:50%;
        width: 17px;
        transform: translate(-50%, -50%);
      }
    }
   > dl { 
      width: calc(100% - 50px);
      overflow: hidden;
      dt {
          font-size:16px;
          font-weight:500;
          white-space:nowrap;
          overflow: hidden;
          text-overflow:ellipsis;
          color: #121212;
        }
      dd {
          font-size:14px;
          font-weight: 400;
          color:#575757;
          white-space:nowrap;
          overflow: hidden;
          text-overflow:ellipsis;
        }
    }
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
  cursor: pointer;
`
const DeleteBtn = styled.button`
  width: 20px; 
  height: 20px;
  border-radius: 100%;
  border:0;
  outline: 0;
  appearance: none;
  background-color: transparent;
  cursor: pointer;
  background-color:#EB2632;
  position: relative;
  > span {
    position: absolute;
    top:50%; left:50%;
    transform: translate(-50%, -50%);
    display: block;
    width: 8px;
    height: 2px;
    background-color:#fff;
  }
`