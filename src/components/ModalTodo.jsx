import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { __patchTodo } from "../redux/modules/PlanSlice";

const ModalTodo = ({setModalTodoOpen, modalId, data}) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [category, setCategory] = useState("");
  const [color, setColor] = useState("");
  const [todosId, setTodosId] = useState("")
  const [selected, setSelected] = useState("");
  useEffect(()=>{
    if(modalId){
      setTodosId(modalId);
    }
  }, [modalId]);
  
  const categoryList = [
    { id:"1", imgSrc:"images/category/clean.png", name:"청소", color:"#668BA4"},
    { id:"2", imgSrc:"images/category/repair.png", name:"수리", color:"#F8A66F"},
    { id:"3", imgSrc:"images/category/papering.png", name:"도배", color:"#DDE0AB"},
    { id:"4", imgSrc:"images/category/reservation.png", name:"예약", color:"#EF5B5B"},
    { id:"5", imgSrc:"images/category/payment.png", name:"비용", color:"#57B0FB"}
  ]

  const todoInfo = {
    planId: data?._id,
    _id: todosId,
    title: title,
    body: body,
    category: category, 
    color: color
  }
  
  const closeHandler = () =>{
    setModalTodoOpen(false);
  }

  const onTransmitHandler = (event)=> {
    event.preventDefault();
    if (title === ""){
     return alert("제목을 입력해주세요.");
    } else if (body === "") {
      return alert("내용을 입력해주세요.");
    } else if (category === "") {
      return alert("카테고리를 선택해주세요.")
    }
    dispatch(__patchTodo(todoInfo));
    setModalTodoOpen(false);
  }

  return (
    <Overlay>
      <ModalWrap>
        <Form onSubmit={onTransmitHandler}>
          <label htmlFor="">제목</label>
          <input type="text" placeholder='제목을 입력하세요.' 
            onChange={(event) => {
              const {value} = event.target;
              setTitle(value);
            }}
          />
          <label htmlFor="">내용</label>
          <textarea rows={4} type="text" placeholder='내용을 입력하세요.' 
            onChange={(event) => {
              const {value} = event.target;
              setBody(value);
            }}
          />
          <h4>카테고리</h4>
          <ul>
          {categoryList.map((item) => {
            return(
                <li
                  className={selected === item.id ? "is-click" : null}
                  key={item.name}
                  style={{backgroundColor:`${item.color}`}}
                  onClick={(event)=> {
                    const {name, alt} = event.target;
                    event.preventDefault();
                    setCategory(name);
                    setColor(alt);
                    if(item.id === selected) {
                      selected("");
                      console.log(selected);
                    } else {
                       setSelected(item.id);
                    }
                  }}
                  selected
                >
                  <img src={`${process.env.PUBLIC_URL}/${item.imgSrc}`} alt={item.color} name={`${process.env.PUBLIC_URL}/${item.imgSrc}`}/>
                </li>
                )
              })
            }
          </ul>
          <ButtonWrap>
            <Button type="button" onClick={closeHandler}>취소</Button>
            <Button type="submit">확인</Button>
          </ButtonWrap>
        </Form>
      </ModalWrap>
    </Overlay>
    )
  }                                   

export default ModalTodo

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
  padding:0 20px;
  box-sizing: border-box;
  overflow: scroll;
  &::-webkit-scrollbar {
  display: none;
  }
`;

const ModalWrap = styled.div`
  width: 100%;
  box-sizing: border-box;
  border-radius:15px;
  background: #F9F9F9;
  position: relative;
  top: 50%;
  left:50%;
  transform: translate(-50%, -50%);

`;

const Form = styled.form`
  padding: 24px;
  border-radius: 18px;
  
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
  > textarea {
    display: block;
    background: #FFFFFF;
    border: 1px solid #EDEDED;
    border-radius: 10px;
    width: 100%;
    padding: 12px;
    box-sizing: border-box;
    margin: 11px 0px 24px 0px;
    resize: none;
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
    margin-bottom: 11px;
  }
  > ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
    li {
      position: relative;
      width: 42px; 
      height: 42px;
      border-radius: 10px;
      cursor:pointer;
      box-sizing: border-box;
      overflow: hidden;
      &.is-click {
        transform: scale(1.3);
      }
      img {
        position: absolute;
         display: block; 
         width: 15px;
        padding:20px;
        top:50%;
        left:50%;
        transform:translate(-50%, -50%);
      }
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
  cursor:pointer;
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