import { Calendar } from 'react-date-range';
import React,{useState, useEffect}  from 'react';
import ko from 'date-fns/locale/ko';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css';
import './Calender.style.css'
import {__patchTodos} from "../../redux/modules/todoSlice";
import { useDispatch, useSelector} from 'react-redux';
import { useParams } from "react-router-dom";
import dayjs from 'dayjs'; //날짜 포맷해주는 함수


const CalendarModal = () => {
  const dispatch = useDispatch();
  const { plans } = useSelector((state) => state.plans);
  const { id } = useParams();
  const [todoDate, setTodoDate] = useState("");

  useEffect(()=>{
    if(plans){
      const findTodo= plans.find((item) => {
         return item._id == id
      })
      setTodoDate(findTodo)
    }
  },[plans]);

  console.log(todoDate);

  const todosInfo = {
    date: todoDate,
    todo:[]
  }

  const handleSelect = (todoDate) => {
    console.log("투두데이트",todoDate); 
    setTodoDate(todoDate);
    dispatch(__patchTodos({
            todosInfo
        }))
  }
  
  return (
    <>
      <Calendar className="calendar"
        locale={ko}
        months={4}
        color={["#f9a76f"]}
        todoDate={todoDate}
        onChange={(todoDate) => handleSelect(dayjs(todoDate).format('YYYY-MM-DD'))}
      />
        
    </>
  );
}

export default CalendarModal; 
