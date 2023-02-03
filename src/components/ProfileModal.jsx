import React from 'react'
import styled from 'styled-components'

const ProfileModal = ({setProfile, setModal, modal}) => {

    const onClickHandler = (e) =>{
        console.log(e.target.src)
        setProfile(e.target.src)
    }

    return (
        <Wrap onClick={()=> setModal(!modal)}>
            <ul>
                <li onClick={onClickHandler}>
                    <img src={`${process.env.PUBLIC_URL}/images/profile1.png`} alt="" />
                </li>
                <li onClick={onClickHandler}>
                    <img src={`${process.env.PUBLIC_URL}/images/profile1.png`} alt="" />
                </li>
                <li onClick={onClickHandler}>
                    <img src={`${process.env.PUBLIC_URL}/images/profile1.png`} alt="" />
                </li>
                <li onClick={onClickHandler}>
                    <img src={`${process.env.PUBLIC_URL}/images/profile1.png`} alt="" />
                </li>
            </ul>
        </Wrap>
    )
}

export default ProfileModal

const Wrap = styled.div`
    width: 100%;
    height: 100vh;
    /* background-color: red; */
    background: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(3.5px);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
    ul{
        display: flex;
        padding: 20px;
        li{
            img{
                display: block;
                width: 100%;
            }
        }
    }
`