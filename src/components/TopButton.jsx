import React, { useState, useEffect} from 'react'
import styled from 'styled-components';

const TopButton = ({wrap}) => {
    const [showButton, setShowButton] = useState(false);

    const scrollToTop = () => {
        wrap.current.scroll({
            top: 0,
            behavior: 'smooth'
        })

    }
    useEffect(() => {
        const scrollWrap = wrap.current
        
        const handleShowButton = () => {
            const nowwrap = wrap.current.scrollTop
            if (nowwrap > 1) {
                setShowButton(true)
            } else {
                setShowButton(false)
            }
        }
        scrollWrap.addEventListener("scroll", handleShowButton)
        return () => {
            scrollWrap.removeEventListener("scroll", handleShowButton)
        }
    }, [wrap]) 
    

    return showButton && (
        <ButtonWrap className="scroll__container">
            <button id="top" type="button" onClick={scrollToTop}></button>
        </ButtonWrap>

    )
}

export default TopButton

const ButtonWrap = styled.div`
    position: absolute;
    bottom: 24px;
    right: 24px;
    button {
        width: 50px;
        height: 50px;
        border-radius: 100%;
        border: none;
        background-color: #F9A76F;
    }
`