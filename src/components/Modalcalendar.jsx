import React from "react";
import styled from "styled-components";
import CalendarModal from "./category/CalendarModal";

import { useEffect, useRef} from "react";
import useOutSideClick from "./useOutSideClick";

const Modalcalendar = ({onClose }) => {
  const modalRef = useRef(null)
  const handleClose = () => {
    onClose?.();
  };

 useOutSideClick(modalRef, handleClose);
 
  return (
    <Overlay>
      <ModalWrap ref={modalRef}>
        <Contents>
          <CalendarModal></CalendarModal>
        </Contents>
      </ModalWrap>
    </Overlay>
  );
};
export default Modalcalendar;

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 9999;
`;

const ModalWrap = styled.div`
  width: 100%;
  height: 600px;
  
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-color: #fff;
  position: relative;
  top: calc(100% - 600px);
  bottom: 0px;  
  overflow: scroll;
  &::-webkit-scrollbar {
  display: none; /* 크롬, 사파리, 오페라, 엣지 */
  }
`;

const Contents = styled.div`
  margin: 50px 30px;
  h1 {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 60px;
  }
  img {
    margin-top: 60px;
    width: 300px;
  }
`;