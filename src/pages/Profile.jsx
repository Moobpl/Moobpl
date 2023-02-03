// 훅
import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// 컴포넌트
import Header from "../components/Header";
import ButtonSubmit from "../components/ButtonSubmit";
import styled from "styled-components";
import Loading from "../components/Loading";
import ProfileModal from "../components/ProfileModal";

// 리덕스
import { __patchUser, clean } from "../redux/modules/userSlice";

function Profile() {
  const headstate = true
  const name = "수정완료"
  const { me, isUserLoading, isUpdateSucess } = useSelector((state) => state.user)
  const [nickName, setNickName] = useState(me?.nickName)
  const [nameMessage, setNameMessage] = useState('')
  const [modal, setModal] = useState(false)
  const [isName, setIsName] = useState(false)
  const [profile, setProfile] = useState(me?.profile)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!me) {
      navigate('/login')
    }
  }, [me, navigate])

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

  const onEditHandler = (e) => {
    e.preventDefault()
    if (nickName.trim() === "") {
      setNameMessage('2글자 이상 5글자 미만으로 입력해주세요.')
      return false
    }
    dispatch(__patchUser({ nickName, profile }))
  }

  useEffect(() => {
    setProfile(me?.profile)
  }, [me])

  useEffect(() => {
    setNickName(me?.nickName)
  }, [me])

  useEffect(() => {
    if (isUpdateSucess) {
      alert("회원정보가 변경되었습니다.")
      dispatch(clean())
      navigate("/main")
    }
  }, [dispatch, navigate, isUpdateSucess])

  const modalOpen = () => {
    setModal(!modal)
  }

  return (
    <>
      <Header headstate={headstate}></Header>
      <Wrap>
        <TextBox>
          <span>뭅플</span>
          <h1>
            프로필 수정
          </h1>
        </TextBox>
        <Form onSubmit={onEditHandler}>
          <ImgWrap>
            <img src={profile ? profile : `${process.env.PUBLIC_URL}/images/profile/unknown.png`} alt="" />
            <div onClick={modalOpen}>
              <img src={`${process.env.PUBLIC_URL}/images/Asset 3.png`} alt="" />
            </div>
          </ImgWrap>
          <span>{me?.email}</span>
          <input type="text" value={nickName || ""} onChange={onChangeName} />
          {nickName?.length > 0 ? <Message className={`message ${isName ? 'success' : 'error'}`}>{nameMessage}</Message> : <Message className={`message error`}>{nameMessage}</Message>}
          <ButtonWrap onClick={onEditHandler}>
            <ButtonSubmit buttonName={name}></ButtonSubmit>
          </ButtonWrap>
        </Form>
      </Wrap>
      {modal ? <ProfileModal setProfile={setProfile} setModal={setModal} modal={modal} /> : null}
      {isUserLoading ? <Loading /> : null}
    </>
  );
}

export default Profile;

const wrapCalc = "calc(100% - 48px)"

const Wrap = styled.div`
  width: ${wrapCalc};
  height: 100vh;
  margin: 0 auto;
  position: relative;
  overflow-y: scroll;

  &::-webkit-scrollbar {
  display: none; /* 크롬, 사파리, 오페라, 엣지 */
  }
`

const TextBox = styled.div`
  padding-top: 91px;
  margin: 0 auto;
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
  }
`

const Form = styled.form`
  margin-top: 80px;

  > span{
    display: block;
    text-align: center;
    color: #666;
    font-weight: 700;
    margin-top: 20px;
  }

  > input {
    width: 100%;
    background: #F7F7F7;
    border-radius: 14px;
    border: none;
    color: #BEBEBE;
    font-size: 14px;
    padding: 15px 0px;
    text-align: center;
    margin-top: 36px;
  }
`

const ImgWrap = styled.div`
  width: 120px;
  height: 120px;
  margin: 0 auto;
  position: relative;
  >img{
    display: block;
    width: 100%;
  }

  >div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 31px;
    height: 31px;
    background-color: #f9a76f;
    position: absolute;
    bottom: 0px;
    right: 0px;
    border-radius: 100%;
    cursor: pointer;
  }
`

const ButtonWrap = styled.div`
  width: 100%;
  position: absolute;
  bottom: 24px;
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
