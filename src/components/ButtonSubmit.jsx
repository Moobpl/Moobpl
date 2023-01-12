import React from "react";
import styled from "styled-components";

const ButtonSubmit = ({buttonName}) => {
  return (
    <Button>{buttonName}</Button>
  );
};

export default ButtonSubmit;

const Button = styled.button`
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  border: none;
  border-radius: 100px;
  background-color: #f9a76f;
  color: #fff;
  text-align: center;
  line-height: 50px;
  font-size: 14px; 
  font-weight: 600;
  font-style: normal;
`