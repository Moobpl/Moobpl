import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { __patchTodo } from "../redux/modules/PlanSlice";

const ModalTodo = ({modalTodoOpen, setModalTodoOpen, modalId, data}) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const [todosId, setTodosId] = useState("")
  console.log("투두스아이디", todosId);

  useEffect(()=>{
    if(modalId){
      console.log(modalId);
      setTodosId(modalId);
    }
  }, [modalId]);
  
  //todos 배열안 요소인 _id 랑 modalId가 같으면 
  //새로운 state로 담아준다.  
  //그 새로운 state값이 todoInfo의 _id가 된다.
  // console.log("투두스어딨니???",todos);
  // console.log("모달아이디",modalId);

  const todoInfo = {
    //todos의 id를 찾아야 하니까
    //컴포넌트에서는 todos의 id를 찾아서 보내주고 
    //db에서는 todo의 아이디를 생성해준다 ...
    planId: data?._id,
    _id: todosId,
    title: title,
    body: body,
    category: "카테고리"
  }

  const closeHandler = () =>{
    setModalTodoOpen(!modalTodoOpen)
  }

  const onTransmitHandler =(event)=> {
    event.preventDefault();
    dispatch(__patchTodo(todoInfo));
  }

  return (
    <>
       <Form onSubmit={onTransmitHandler}>
            <label htmlFor="">제목</label>
            <input type="text" placeholder='제목을 입력하세요.' 
              onChange={(event) => {
                const {value} = event.target;
                setTitle(value);
              }}
            />
            <label htmlFor="">내용</label>
            <input type="text" placeholder='내용을 입력하세요.' 
              onChange={(event) => {
                const {value} = event.target;
                setBody(value);
              }}
            />
            <h4>카테고리</h4>
            <ul>
              <li>청소</li>
              <li>보수</li>
              <li>비용</li>
              <li>세탁</li>
              <li>도배</li>
            </ul>
            <ButtonWrap>
              <Button onClick={closeHandler}>취소</Button>
              <Button type="submit">확인</Button>
            </ButtonWrap>
       </Form>
    </>
    )
  }                                   

export default ModalTodo

const Form = styled.form`
  padding: 24px;
  border-radius: 18px;
  background: #F9F9F9;
  > input {
  display: block;
  background: #FFFFFF;
  border: 1px solid #EDEDED;
  border-radius: 10px;
  width: 100%;
  padding: 12px;
  box-sizing: border-box;
  margin: 11px 0px 24px 0px;

  &:placeholder{
  font-weight: 400;
  color: #D1D1D1;
  }
  }

  > label {
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 1px;
  color: #666666;
  }

  >h4 {
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 1px;
  color: #666666;
  }

  >ul{
  display: flex;
  justify-content: space-between;
  margin-top: 11px;
  >li {
  width: 42px;
  height: 42px;
  background-color: red;
  }
  }
`

const ButtonWrap = styled.div`
  width: 100%;
  display: flex;
  gap: 9px;
  margin-top: 35px;

  button:nth-child(1){
  border: 1px solid #666666;
  border-radius: 100px;
  background-color: #ffffff;
  color: #666666;
  transition: all 0.3s;
  &:hover{
  background-color: #666666;
  color:#ffffff;
  }
  }

  button:nth-child(2){
  border: none;
  border-radius: 100px;
  background: #F9A76F;
  color: #ffffff;
  }
`

const Button = styled.button`
  width: 50%;
  display: block;
  padding: 8px 0px;
  border-radius: 100px;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.3px;
  cursor: pointer;
`