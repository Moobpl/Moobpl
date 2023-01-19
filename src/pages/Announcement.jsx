import React from 'react'
import Header from '../components/Header'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Footer from '../components/Footer';

const Announcement = () => {
  const headstate = true;
  const { post } = useSelector((state) => state.info)
  const newArr = [...post]
  newArr.reverse().map((item) => item)
  const navigate = useNavigate();

  return (
    <>
      <Header headstate={headstate}></Header>
      <Wrap>
        <TextBox>
          <span>설정</span>
          <h1>
            공지사항
          </h1>
        </TextBox>
        <Section>
          {post.map((item) => {
            return (
              <ListCard onClick={() => { navigate(`./${item._id}`) }}>
                <h5>{item.title}</h5>
                <span>{item.date}</span>
              </ListCard>
            )
          })}
        </Section>
        <Footer></Footer>
      </Wrap>
    </>
  )
}

export default Announcement

const wrapCalc = "calc(100% - 48px)"

const Wrap = styled.div`
  width: ${wrapCalc};
  height: 100vh;
  margin: 0 auto;
  position: relative;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  &::-webkit-scrollbar {
  display: none; /* 크롬, 사파리, 오페라, 엣지 */
  }
`

const TextBox = styled.div`
  padding-top: 91px;
  width: 100%;
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

const Section = styled.section`
  margin-top: 52px;
`

const ListCard = styled.div`
  padding: 19px 0px 26px 0px;
  border-bottom: 0.5px solid #bcbcbc;
  cursor: pointer;
  h5{
    font-weight: 400;
    font-size: 16px;
    color: #3C3C3C;
    white-space: pre-line;
  }

  span{
    display: block;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: 0.5px;
    color: #999999;
  }
`