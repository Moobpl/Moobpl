import React, { useEffect } from "react";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { __getPlan } from "../redux/modules/PlanSlice";

const Myplan = () => {
  const headstate = true;
  const dispatch = useDispatch();
  const { plans } = useSelector((state) => state.plans)
  //useSelector는 state가져오는거니까 {}안에는 initialstae에 들어있는 값이랑 똑같이 써줘야한다
  console.log(plans)

  // eslint-disable-next-line no-undef
  useEffect(() => {
    dispatch(__getPlan())
  }, [])

  return (
    <>
      <Header headstate={headstate}></Header>
    </>
  )
}

export default Myplan;
