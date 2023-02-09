// 훅
import React, { useRef, useEffect} from 'react'
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

// 컴포넌트
import Header from '../components/Header'
import styled from 'styled-components';
import TopButton from '../components/TopButton';
import Footer from '../components/Footer';

const AnnouncementDetail = () => {
  const headstate = true;
  const wrap = useRef()
  const width = 'calc(100% - 48px)'
  const { id } = useParams()
  const navigate = useNavigate();
  const { post } = useSelector((state) => state.info)
  const { me } = useSelector((state) => state.user)
  
  const findPost = post.find((item) => {
    return item._id === Number(id)
  })

  useEffect(()=>{
    if(!me){
      navigate('/login')
    }
  },[me, navigate])
  
  return (
    <>
      <Header headstate={headstate}></Header>
      <Wrap ref={wrap}>
        <TextBox>
          <h1>
            {findPost.title}
          </h1>
          <span>{findPost.date}</span>
          <TextScript>{findPost.script}</TextScript>
        </TextBox>
        <Footer width={width}></Footer>
      </Wrap>
      <TopButton wrap={wrap}></TopButton>
    </>
  )
}

export default AnnouncementDetail


const wrapCalc = "calc(100% - 48px)"

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &::-webkit-scrollbar {
  display: none; /* 크롬, 사파리, 오페라, 엣지 */
  }
  @supports (-webkit-touch-callout: none) { 
    height: -webkit-fill-available;
  }
`

const TextBox = styled.div`
  padding-top: 91px;
  width: ${wrapCalc};
  margin: 0 auto 40px auto;
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
    word-break: keep-all;
  }
`

const TextScript = styled.p`
    margin-top: 48px;
    white-space: pre-line;
    font-weight: 400;
    font-size: 14px;
    color: #666666;
`