// 훅
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

//컴포넌트
import ButtonSubmit from "../components/ButtonSubmit";
import Loading from "../components/Loading";
import styled from "styled-components";

//리덕스
import { __postLogin, clean } from "../redux/modules/userSlice";


function Login() {
  const name = "로그인"
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const { isLoginError, isUserLoading, me } = useSelector((state) => state.user)

  useEffect(() => {
    if (me) {
      navigate('/main')
    }
  }, [me])

  useEffect(() => {
    if (isLoginError) {
      alert(isLoginError)
      dispatch(clean())
    }
  }, [isLoginError, dispatch])

  const userInfo = {
    email: email,
    password: password,
  }

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(__postLogin(userInfo))
  }


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
        <Form onSubmit={onSubmit}>
          <InputEmail placeholder="Email" value={email} onChange={(e) => { setEmail(e.target.value) }}></InputEmail>
          <InputPassword placeholder="password" type="password" value={password} onChange={(e) => { setPassword(e.target.value) }}></InputPassword>

          <Bottom>
            <ButtonSubmit buttonName={name} onClick={onSubmit}></ButtonSubmit>
            <BottomTextWrap>
              <p>아직 회원이 아니신가요? <span onClick={(e) => {
                e.preventDefault()
                navigate("/signup")
              }}>회원가입</span></p>
            </BottomTextWrap>
          </Bottom>
        </Form>
      </Wrap>
      {isUserLoading ? <Loading /> : null}
    </>
  );
}

export default Login;

const Wrap = styled.div`
  width: calc(100% - 48px);
  height: 100vh;
  margin: 0 auto;
  position: relative;
  overflow: auto;

  &::-webkit-scrollbar {
  display: none; /* 크롬, 사파리, 오페라, 엣지 */
  }
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
const Form = styled.form`
  min-height: calc(100vh - 197px);
  display: flex;
  flex-direction: column;
  overflow: auto;
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

const Bottom = styled.div`
  margin: auto 0px 50px 0px;
`

const BottomTextWrap = styled.div`
  p {
    font-size: 12px;
    font-weight: 500;
    margin-top: 12px;
    text-align: center;
    color: #666666;

    span{
      font-size: 12px;
      color:#1198A9;
      cursor: pointer;
    }

  }
`
