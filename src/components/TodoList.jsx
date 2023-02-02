import React, { useState } from "react";
import styled from "styled-components";
import ModalTodo from "./ModalTodo";
import { useDispatch } from "react-redux";
import { __deleteTodos, __deleteTodo } from "../redux/modules/PlanSlice";
import Dday from "./Dday";

const TodoList = ({ todos, data }) => {
  const [modalTodoOpen, setModalTodoOpen] = useState(false);
  const [modalId, setModalId] = useState('');
  const [editMode, setEditMode] = useState(false);
  
  const dispatch = useDispatch();

  const editModeHandler = (e) => {
    e.preventDefault();
    setEditMode(true);
  }
  
  const editCancleHandler = () =>{
    setEditMode(false);
  }

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
    <EditBtnWrap>
      {
        editMode ? <EditFalsebtn editMode={editMode} onClick={editCancleHandler}><span>완료</span></EditFalsebtn> 
        : 
        <EditTruebtn editMode={editMode} onClick={editModeHandler}>
          <span></span>  
          <span></span>  
          <span></span>  
        </EditTruebtn> 
      }
    </EditBtnWrap>
      
      {todos?.map((item) => (
          <TodoWrap>
            <AddTodoDate 
              key={item._id}
              todo={item.todo}
            >              
              <Dday dday={item.date}></Dday> / <span>{item.date}</span>            
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
              : <AddTodoBtn name={item._id} onClick={modalOpenHandler}>할일추가</AddTodoBtn> }
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
  align-items: center;
  gap:10px;
  margin-bottom: 10px;
  p{
    color:#121212;
    font-size:18px;
  }
  span { 
    color: #aaa;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: 0.3px;
  }
`
const TodoWrap = styled.div`
  margin-bottom: 15px;
`
const TodoBox = styled.div`
  background-color:#fff;
  border-radius: 14px;
  padding: 5px;
  box-shadow: 10px 24px 54px rgba(0, 0, 0, 0.04);
  margin-bottom: 10px;
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
        }
      dd {
          font-size:14px;
          font-weight: 400;
          color:#121212;
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
  margin-top:15px;
  cursor: pointer;
`
const EditBtnWrap = styled.div`
  margin-top:10px;
  > button {
    margin-left: auto;
    border:0;
    outline: 0;
    appearance: none;
    background-color: transparent;
    cursor: pointer;
  }
`
const EditFalsebtn = styled.button`
  display: flex;
  span {
    color: #57b0fb;
  }
`
const EditTruebtn = styled.button`
  display: flex;
  gap: 6px;
  > span {
    display: block;
    width: 4px;
    height: 4px;
    border-radius: 100%;
    background-color:#000;
  }
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