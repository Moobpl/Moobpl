import React, { useEffect, useState } from "react";
import ButtonSubmit from "../components/ButtonSubmit";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __postLogin } from "../redux/modules/userSlice";

function Login() {
  const name = "로그인"
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const dispatch = useDispatch();
  const { isLoginError, me, isLoginSucess } = useSelector((state) => state.user)

  const userInfo = {
    email: email,
    password: password,
  }

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(__postLogin(userInfo))
  }

  useEffect(() => {
    if (isLoginSucess) {
      navigate('/main')
    }
  }, [isLoginSucess])

  return (
    <>
      <Wrap>
        <TextBox>
          <span>Hello!</span>
          <h1>
            환영합니다.<br />
            <span>뭅플</span>입니다.
          </h1>
        </TextBox>
        <form>
          <InputEmail placeholder="Email" value={email} onChange={(e) => { setEmail(e.target.value) }}></InputEmail>
          <InputPassword placeholder="password" type="password" value={password} onChange={(e) => { setPassword(e.target.value) }}></InputPassword>

          <ButtonWrap onClick={onSubmit}>
            <ButtonSubmit buttonName={name}></ButtonSubmit>
            <p>아직 회원이 아니신가요? <span onClick={() => { navigate("/signup") }}>회원가입</span></p>
          </ButtonWrap>
        </form>
      </Wrap>
    </>
  );
}

export default Login;

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


const InputEmail = styled.input`
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
