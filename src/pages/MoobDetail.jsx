import React, {useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import WidgetCard from "../components/WidgetCard";
import { __getPlan } from "../redux/modules/PlanSlice";
import { useParams } from "react-router-dom";


function MoobDetail() {
  const dispatch = useDispatch();
  
  const { plans } = useSelector((state) => state.plans);
  const { id } = useParams();
  const [myplan, setMyplan] = useState({})

  useEffect(() => {
    dispatch(__getPlan())
  }, []);
  
  useEffect(()=>{
    if(plans){
      const findPlan = plans.find((item) => {
         return item._id == id
      })
      setMyplan(findPlan)
    }
  },[plans]);

  console.log(myplan)
  // console.log(plans);

  return (
    <div>
      <WidgetCard data={myplan}/>
      { myplan.todos?.length == 0 
        ? 
          "일정을 등록하세요" 
        : (<butto></butto>) 
      }
    </div>
  );

}

export default MoobDetail
