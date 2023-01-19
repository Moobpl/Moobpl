import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import ButtonSubmit from "../components/ButtonSubmit";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { __patchUser } from "../redux/modules/userSlice";

function Profile() {
  const headstate = true
  const name = "수정완료"
  const { me } = useSelector((state) => state.user)
  const [nickname, setNickname] = useState(me.nickName)
  const dispatch = useDispatch();
  useEffect(() => {
    setNickname(me.nickName)
  }, [me])

  const onEditHandler = (e) => {
    e.preventDefault()
    dispatch(__patchUser({nickname}))
    window.location.reload()
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
        <Form>
          <ImgWrap></ImgWrap>
          <span>{me.email}</span>
          <input type="text" value={nickname} onChange={(e) => { setNickname(e.target.value) }} />
          <ButtonWrap onClick={onEditHandler}>
            <ButtonSubmit buttonName={name}></ButtonSubmit>
          </ButtonWrap>
        </Form>
      </Wrap>
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
  }
`

const ImgWrap = styled.div`
  width: 120px;
  height: 120px;
`

const ButtonWrap = styled.div`
  width: 100%;
  position: absolute;
  bottom: 24px;
`
