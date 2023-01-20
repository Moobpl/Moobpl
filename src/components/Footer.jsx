import React from 'react'
import styled from 'styled-components'

const Footer = ({width}) => {

  return (
    <Wrap width={width}>
        <FooterButton>
            <div>친구에게 추천할래요</div>
            <div>설문조사 참여하기</div>
        </FooterButton>
        <Info>
            제작자 | 김한빛 위향훈
            <p>copyright © moobpl all rights reserved</p>
        </Info>
    </Wrap>
  )
}

export default Footer

const Wrap = styled.div`
    width: ${(props) => props.width || '100%'};;
    margin: auto auto 24px auto;
`

const FooterButton = styled.div`
    div{
        border-top: 1px solid #efefef;
        padding: 10px;
        text-align: center;
        font-size: 11px;
        font-weight: 100;
        color: #acacac;
        cursor: pointer;
    }
    div:last-child{
        border-bottom: 1px solid #efefef;
    }
`

const Info = styled.div`
    font-size: 11px;
    font-weight: 100;
    margin-top: 10px;
    color: #acacac;
`