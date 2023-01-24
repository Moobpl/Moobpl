import React from "react";
import styled from "styled-components";

const WidgetCard = () => {
  return (
    <Wrap>
      <WidgetBox>
        <WidgetContainer>
          <Left>
            하이  
          </Left>
          <Right>
            헬로
          </Right>
        </WidgetContainer>
      </WidgetBox>
    </Wrap>
  );
};


const Wrap = styled.div`
  padding: 0 24px;
`
const WidgetBox = styled.div`
  width:100%;
  height:200px;
  border-radius: 15px;
  background-color:#000;
  padding:15px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`
const WidgetContainer = styled.div`
  width: 100%;
  height: auto;
  background-color:#fff;
  display: flex;
`
const Left = styled.div`
  width: 50%;
  
  background-color:#eee;
`
const Right = styled.div`
  width: 50%;
  background-color:red;
`

export default WidgetCard;
