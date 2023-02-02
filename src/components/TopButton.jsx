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
            <div id="top" onClick={scrollToTop}><img src={`${process.env.PUBLIC_URL}/images/up.png`} alt="" /></div>
        </ButtonWrap>

    )
}

export default TopButton

const ButtonWrap = styled.div`
    position: absolute;
    bottom: 24px;
    right: 24px;
    z-index: 9998;
    div {
        width: 50px;
        height: 50px;
        border-radius: 100%;
        border: none;
        background-color: #F9A76F;
        display: flex;
        justify-content: center;
        align-items: center;
        >img{
            display: block;
            width: 18px;
        }
    }
`