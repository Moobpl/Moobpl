import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";

function AreaInfoDetail() {
  const headstate = true;
  const { citys } = useSelector((state) => state.city)
  const { id } = useParams()
  
  const findCity = citys.find((item) => {
    return item._id == id
  })

  console.log(findCity)
  return (
    <>
      <Header headstate={headstate}></Header>
      <MainImg></MainImg>
      <h2>{findCity.disc}</h2>
    </>
  );
}

export default AreaInfoDetail;

const MainImg = styled.div`
  width: 100%;
  height: 200px;
  background-color: red;
`