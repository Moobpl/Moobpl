//훅
import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

//컴포넌트
import ButtonSubmit from "../components/ButtonSubmit";
import Header from "../components/Header";
import Loading from "../components/Loading";
import styled from "styled-components";

//리덕스
import { __postUser, clean } from "../redux/modules/userSlice";



const Signup = () => {
  const { isSignupSucess, isSignupError, isUserLoading, me } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const name = "회원가입";
  const headstate = false;

  // 닉네임, 이메일, 비밀번호, 비밀번호 확인
  const [nickName, setNickName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  // 오류메세지 상태저장
  const [nameMessage, setNameMessage] = useState('')
  const [emailMessage, setEmailMessage] = useState('')
  const [passwordMessage, setPasswordMessage] = useState('')
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState('')

  // 유효성 검사
  const [isName, setIsName] = useState(false)
  const [isEmail, setIsEmail] = useState(false)
  const [isPassword, setIsPassword] = useState(false)
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false)



  const onChangeName = useCallback((e) => {
    setNickName(e.target.value)
    if (e.target.value.length < 2 || e.target.value.length > 5) {
      setNameMessage('2글자 이상 5글자 미만으로 입력해주세요.')
      setIsName(false)
    } else {
      setNameMessage('올바른 이름 형식입니다 :)')
      setIsName(true)
    }
  }, [])

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

  const onChangePassword = useCallback((e) => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/
    const passwordCurrent = e.target.value
    setPassword(passwordCurrent)

    if (!passwordRegex.test(passwordCurrent)) {
      setPasswordMessage('숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!')
      setIsPassword(false)
    } else {
      setPasswordMessage('안전한 비밀번호에요')
      setIsPassword(true)
    }
  }, [])


  // 비밀번호 확인
  const onChangePasswordConfirm = useCallback((e) => {
    const passwordConfirmCurrent = e.target.value
    setIsPasswordConfirm(passwordConfirmCurrent)
    setPasswordCheck(e.target.value)
    if (password === passwordConfirmCurrent) {
      setPasswordConfirmMessage('동일한 비밀번호 입니다.)')
      setIsPasswordConfirm(true)
    } else {
      setPasswordConfirmMessage('비밀번호가 다릅니다. 다시 확인해주세요')
      setIsPasswordConfirm(false)
    }
  },
    [password]
  )

  const onSubmit = (e) => {
    e.preventDefault()
    if (nickName.trim() === "" || isName === false) {
      setNameMessage('2글자 이상 5글자 미만으로 입력해주세요.')
      return false
    } else if (email.trim() === "" || isEmail === false) {
      setEmailMessage("이메일를 입력하세요.")
      return false
    } else if (password.trim() === "" || isPassword === false) {
      setPasswordMessage("비밀번호를 입력하세요.")
      return false
    }
    const userInfo = {
      "nickName": nickName,
      "email": email,
      "password": password,
    }
    dispatch(__postUser(userInfo))
  }

  useEffect(() => {
    if (isSignupError) {
      alert(isSignupError)
      dispatch(clean())
    }
  }, [isSignupError, dispatch])

  useEffect(() => {
    if (isSignupSucess === true) {
      alert("회원가입이 완료 되었습니다.")
      dispatch(clean())
      navigate('/login')
    }
  }, [isSignupSucess, dispatch, navigate])

  useEffect(() => {
    if (me) {
      navigate('/main')
    }
  }, [me, navigate])

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
        <form>
          <InputNickName placeholder="닉네임" onChange={onChangeName}></InputNickName>
          {nickName.length > 0 ? <Message className={`message ${isName ? 'success' : 'error'}`}>{nameMessage}</Message> : <Message className={`message error`}>{nameMessage}</Message>}

          <InputNickEmail value={email} placeholder="Email를 입력하세요." onChange={onChangeEmail}></InputNickEmail>
          {email.length > 0 ? <Message className={`message ${isEmail ? 'success' : 'error'}`}>{emailMessage}</Message> : <Message className={`message error`}>{emailMessage}</Message>}

          <InputPassword type="password" placeholder="비밀번호를 입력하세요." onChange={onChangePassword}></InputPassword>
          {password.length > 0 ? <Message className={`message ${isPassword ? 'success' : 'error'}`} >{passwordMessage}</Message> : <Message className={`message error`}>{passwordMessage}</Message>}

          <InputPassword type="password" placeholder="동일한 비밀번호를 입력하세요." onChange={onChangePasswordConfirm}></InputPassword>
          {passwordCheck.length > 0 ? <Message className={`message ${isPasswordConfirm ? 'success' : 'error'}`}>{passwordConfirmMessage}</Message> : <Message className={`message error`}>{passwordConfirmMessage}</Message>}
          <ButtonWrap onClick={onSubmit}>
            <ButtonSubmit buttonName={name}></ButtonSubmit>
          </ButtonWrap>
        </form>
      </Wrap>
      {isUserLoading ? <Loading /> : null}
    </div>

  );
}

export default Signup;

const Wrap = styled.div`
  width: calc(100% - 48px);
  height: 100vh;
  margin: 0 auto;
  position: relative;
  overflow-y: scroll;
  padding: 0px 2px;
  @supports (-webkit-touch-callout: none) { 
    height: -webkit-fill-available;
  }
  &::-webkit-scrollbar {
  display: none; /* 크롬, 사파리, 오페라, 엣지 */
  }
  form{
    height: calc(100vh - 91px - 81px);
    display: flex;
    flex-direction: column;
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
  &:nth-child(8){
    margin-bottom: 17px;
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
  outline: none;
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
  outline: none;
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
  letter-spacing: 3px;
  outline: none;
  &::placeholder {
    color: #BEBEBE;
    letter-spacing: 0px;
  }
`

const ButtonWrap = styled.div`
  width: 100%;
  margin-top: auto;
  bottom: 52px;

  p {
    font-size: 12px;
    font-weight: 500;
    margin-top: 12px;
    text-align: center;
    color: #666366;

    span{
      font-size: 11px;
      color:#1198A9;
    }

  }
`