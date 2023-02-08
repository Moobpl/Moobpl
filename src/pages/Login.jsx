// 훅
import React, { useEffect, useState, useCallback } from "react";
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
  const [emailMessage, setEmailMessage] = useState('')
  const [isEmail, setIsEmail] = useState(false)
  const [password, setPassword] = useState("")
  const [passwordMessage, setPasswordMessage] = useState('')
  const { isLoginError, isUserLoading, me } = useSelector((state) => state.user)

  useEffect(() => {
    if (me) {
      navigate('/main')
    }
  }, [me, navigate])

  useEffect(() => {
    if (isLoginError) {
      alert(isLoginError)
      dispatch(clean())
    }
  }, [isLoginError, dispatch])

  const onChangeEmail = useCallback((e) => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
    const emailCurrent = e.target.value
    setEmail(e.target.value)

    if (!emailRegex.test(emailCurrent)) {
      setEmailMessage('올바른 형식이 아닙니다.')
      setIsEmail(false)
    } else {
      setEmailMessage('올바른 이메일 형식입니다.)')
      setIsEmail(true)
    }
  }, [])

  const userInfo = {
    email: email,
    password: password,
  }
  const onSubmit = (e) => {
    e.preventDefault();

    if (email.trim() === "" || isEmail === false) {
      setEmailMessage("이메일를 올바르게 입력하세요.")
      return false;
    } else if (password.trim() === "") {
      setPasswordMessage('비밀번호를 입력하세요.')
      return false;
    }
    

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
          <InputEmail placeholder="Email" value={email} onChange={onChangeEmail}></InputEmail>
          {email.length > 0 ? <Message className={`message ${isEmail ? 'success' : 'error'}`}>{emailMessage}</Message> : <Message className={`message error`}>{emailMessage}</Message>}
          <InputPassword autoComplete="on" placeholder="password" type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} autocomplete="on"></InputPassword>
          {password.length > 0 ? null : <Message className={`message error`}>{passwordMessage}</Message>}
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
  overflow-y: auto;
  @supports (-webkit-touch-callout: none) { 
    height: -webkit-fill-available;
  }
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
  outline: none;
  &::placeholder {
    color: #BEBEBE;
  }
  &:focus{
    &::placeholder {
      color: #f9a76f;
    }
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
  outline: none;
  &::placeholder {
    color: #BEBEBE;
  }
  &:focus{
    &::placeholder {
      color: #f9a76f;
    }
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

const Message = styled.span`
  display: block;
  font-weight: 500;
  font-size: 12px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -1px;
  margin-top: 5px;
  &.success {
    color: #5cb85d;
  }
  &.error {
    color: #ff2727;
  }
`
