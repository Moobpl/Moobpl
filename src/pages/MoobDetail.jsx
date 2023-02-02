// 훅
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Navigate, useNavigate } from "react-router-dom";

// 컴포넌트
import styled from "styled-components";
import Header from "../components/Header";
import TodoList from "../components/TodoList";
import WidgetCard from "../components/WidgetCard";
import Modalcalendar from "../components/Modalcalendar";
import Loading from "../components/Loading";

// 리덕스
import { __getPlan } from "../redux/modules/PlanSlice";

function MoobDetail() {
  const headstate = true;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { plans, isPlansLoading } = useSelector((state) => state.plans);
  const { me } = useSelector((state) => state.user)
  const { id } = useParams();

  const [myplan, setMyplan] = useState({})
  const [isOpen, setIsOpen] = useState(false);

  const [todos, setTodos] = useState([]);
  const [dDay, setDday] = useState('');

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
        return item._id == id
      })
      setMyplan(findPlan);
      // console.log("왓이즈마이플랜",myplan._id);
      setTodos(findPlan?.todos);
    }
  }, [plans]);

  return (
    <>
      <Header headstate={headstate}></Header>

      <Wrap>
        <WidgetCard data={myplan} />
        {myplan?.todos?.length === 0
          ?
          <Addinfotext>
            <p>
              <img src="/images/add_icon.png" alt="" />
              일정을 등록하세요
            </p>
          </Addinfotext>
          : ""
        }
        <TodoList
          key={todos?._id}
          todos={todos}
          data={myplan}
        >
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
  height: 100%;
  padding:60px 24px 0 24px;
  box-sizing: border-box;
  overflow: scroll;
  position:relative;
  &::-webkit-scrollbar {
  display: none;
  }
`;
const Addinfotext = styled.div`
  text-align: center;
  width: 100%;
  height: calc(100% - 200px);
  display: flex;
  justify-content: center;
  align-items: center;
  > p {
    font-size: 18px;
    color:#acacac;
    img { 
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
`
