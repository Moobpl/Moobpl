// 훅
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

// 컴포넌트
import styled from "styled-components";
import Header from "../components/Header";
import TodoList from "../components/TodoList";
import WidgetCard from "../components/WidgetCard";
import Modalcalendar from "../components/Modalcalendar";
import Loading from "../components/Loading";

// 리덕스
import { __getPlan } from "../redux/modules/PlanSlice";

function MoobDetail({data}) {
  const headstate = true;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { plans, isPlansLoading } = useSelector((state) => state.plans);
  const { me } = useSelector((state) => state.user)
  const { id } = useParams();

  const [myplan, setMyplan] = useState({})
  const [isOpen, setIsOpen] = useState(false);
  
  const [todos, setTodos] = useState([]);
  const [editMode, setEditMode] = useState(false);
  
  const editModeHandler = (e) => {
    e.preventDefault();
    setEditMode(true);
  }
  
  const editCancleHandler = () =>{
    setEditMode(false);
  }

  useEffect(() => {
    dispatch(__getPlan())
  }, [dispatch]);

  useEffect(()=>{
    if(!me){
      navigate('/login')
    }
  }, [me, navigate])

  useEffect(() => {
    if (plans) {
      const findPlan = plans.find((item) => {
        return item._id === id
      })
      setMyplan(findPlan);
      setTodos(findPlan?.todos);
    }
  }, [id, plans]);

  return (
    <>
      <Header headstate={headstate}></Header>

      <Wrap>
        <WidgetCard data={myplan} />
        {myplan?.todos?.length === 0
          ?
          <Addinfotext>
            <p>
              <img src="/images/add_icon.png" alt=""/>
              일정을 등록하세요
              </p>
            </Addinfotext>
          : 
            <EditBtnWrap>
              {
                editMode ? 
                <EditFalsebtn onClick={editCancleHandler}><span>완료</span></EditFalsebtn>
                : 
                <EditTruebtn onClick={editModeHandler}>
                  <span></span>  
                  <span></span>  
                  <span></span>  
                </EditTruebtn> 
              }
            </EditBtnWrap> 
        }
        <TodoList
          key={todos?._id}
          todos={todos}
          data={myplan}
          editMode={editMode} setEditMode={setEditMode}>
        </TodoList>

        <AddBtn onClick={() => setIsOpen(true)}><img src="/images/add.png" /></AddBtn>
        {
          isOpen && (
            <Modalcalendar
              open={isOpen}
              onClose={() => { setIsOpen(false) }}
            />
          )
        }
      </Wrap>
      {isPlansLoading ? <Loading /> : null}
    </>
  );
}

export default MoobDetail;

const Wrap = styled.div`
  width:100%;
  height: 100vh;
  // position: relative;
  padding:60px 24px 0 24px;
  box-sizing: border-box;
  overflow: scroll;
  &::-webkit-scrollbar {
  display: none;
  }

  @supports (-webkit-touch-callout: none) { 
    height: -webkit-fill-available;
  }
`;
const Addinfotext = styled.div`
  text-align: center;
  width: 100%;
  height: calc(100% - 200px);
  @supports (-webkit-touch-callout: none) { 
    min-height: -webkit-fill-available;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  > p {
    font-size: 18px;
    color:#acacac;
    img { 
      max-width: 43px;
      display: block;      
      margin: 0 auto;
    }
  }
`
const AddBtn = styled.button`
  border:none;
  width: 50px;
  height: 50px;
  color:#fff;
  font-size:30px;
  text-align: center;
  border-radius: 100%;
  background-color: #F9A76F;
  position: absolute;
  right:24px;
  bottom:24px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9998;
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