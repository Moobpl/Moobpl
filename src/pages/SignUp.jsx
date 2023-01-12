import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ButtonSubmit from "../components/ButtonSubmit";
import Header from "../components/Header";

function Signup() {
  const name = "회원가입"
  const headstate = false;
  const [nickName, setNickName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  useEffect(() => {

  }, [])

  const onSubmit = () => {
    if(nickName.trim() === ""){
      alert("닉네임을 입력하세요.")
      return false;
    } else if (email.trim() === ""){
      alert("이메일을 입력하세요.")
      return false;
    } else if (password.trim() === "") {
      alert("비밀번호를 입력하세요.")
      return false;
    } else if (passwordCheck !== password) {
      alert("동일한 비밀번호를 입력하세요.")
      return false;
    }
  }
  return (
    <div>
      <Header headstate={headstate}></Header>
      <Wrap>
        <TextBox>
          <span>Hello!</span>
          <h1>
            회원가입
          </h1>
        </TextBox>
        <InputNickName placeholder="닉네임" value={nickName} onChange={(e) => { setNickName(e.target.value) }}></InputNickName>
        <InputNickEmail placeholder="Email를 입력하세요." value={email} onChange={(e) => { setEmail(e.target.value) }}></InputNickEmail>
        <InputPassword placeholder="비밀번호를 입력하세요." value={password} onChange={(e) => { setPassword(e.target.value) }}></InputPassword>
        <InputPassword placeholder="동일한 비밀번호를 입력하세요." value={passwordCheck} onChange={(e) => { setPasswordCheck(e.target.value) }}></InputPassword>

        <ButtonWrap onClick={onSubmit}>
          <ButtonSubmit buttonName={name}></ButtonSubmit>
        </ButtonWrap>
      </Wrap>
    </div>
  );
}

export default Signup;

const Wrap = styled.div`
  width: calc(100% - 48px);
  min-height: 100vh;
  margin: 0 auto;
  position: relative;
`


const TextBox = styled.div`
  padding-top: 91px;
  span{
    font-size: 14px;
    line-height: 25px;
    letter-spacing: 0.5px;
    color: #666666;
  }
  
  h1{
    font-size: 26px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px;
    /* or 154% */
    letter-spacing: 0.5px;
    color: #282B49;

    span{
      font-size: 26px;
      font-style: normal;
      font-weight: 700;
      line-height: 40px;
      /* or 154% */
      letter-spacing: 0.5px;
      color: #f9a76f;
    }

  }
`
const InputNickName = styled.input`
  width: 100%;
  font-size: 14px;
  font-weight: 500;
  color: #666;
  background: #F7F7F7;
  border-radius: 14px;
  border: none;
  padding: 15px;
  box-sizing: border-box;
  margin-top: 81px;

  &::placeholder {
    color: #BEBEBE;
  }
`

const InputNickEmail = styled.input`
  width: 100%;
  font-size: 14px;
  font-weight: 500;
  color: #666;
  background: #F7F7F7;
  border-radius: 14px;
  border: none;
  padding: 15px;
  box-sizing: border-box;
  margin-top: 51px;

  &::placeholder {
    color: #BEBEBE;
  }
`

const InputPassword = styled.input`
  width: 100%;
  font-size: 14px;
  font-weight: 500;
  color: #666;
  background: #F7F7F7;
  border-radius: 14px;
  border: none;
  padding: 15px;
  box-sizing: border-box;
  margin-top: 12px;

  &::placeholder {
    color: #BEBEBE;
  }
`

const ButtonWrap = styled.div`
  width: 100%;
  position: absolute;
  bottom: 52px;

  p {
    font-size: 12px;
    font-weight: 500;
    margin-top: 12px;
    text-align: center;
    color: #666666;

    span{
      font-size: 12px;
      color:#1198A9;
    }

  }
`