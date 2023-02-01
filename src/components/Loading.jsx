import React from 'react'
import styled from 'styled-components'

const Loading = () => {
    return (
        <Wrap>
            <div className="spinner"></div>
        </Wrap>
    )
}

export default Loading

const Wrap = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;

    .spinner {
        min-width: 40px;
        min-height: 40px;
        border: 5px solid #92929219;
        border-right: 5px solid #1198A9;
        border-radius: 50%;
        animation: spinner 1s linear infinite;
    }
    
    @keyframes spinner {
    from {
        transform: rotate(0deg);
    } to {
        transform: rotate(360deg);
    }
    }
`