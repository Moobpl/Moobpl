import React, { useEffect } from "react";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { __getPlan } from "../redux/modules/PlanSlice";
import { useNavigate } from "react-router-dom";

const Myplan = () => {
  const headstate = true;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { plans, isLoading } = useSelector((state) => state.plans)
  //useSelector는 state가져오는거니까 {}안에는 initialstae에 들어있는 값이랑 똑같이 써줘야한다
  console.log(plans)
  console.log(isLoading)

  useEffect(() => {
    dispatch(__getPlan())
  }, [])
  
  return (
    <>
      {/* <Header headstate={headstate}></Header> */}
      <div>
        {plans.map((item) => {
          return (
            <div key={item._id} onClick={()=>navigate(`/moobdetail/${item._id}`)}>
              <p>{item.id}</p>
              <p>{item.reigon}</p>
              <p>{item.date}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Myplan;
