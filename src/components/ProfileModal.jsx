import React from 'react'
import styled from 'styled-components'

const ProfileModal = ({ setProfile, setModal, modal }) => {

    const onClickHandler = (e) => {
        setProfile(e.target.src)
    }

    const profileList = [
        "1.png",
        "2.png",
        "3.png",
        "4.png",
        "5.png",
        "6.png",
    ]

    return (
        <Wrap onClick={() => setModal(!modal)}>
            <ul>
                {profileList.map((item, index) => {
                    return (
                        <li key={index} onClick={onClickHandler}><img src={`${process.env.PUBLIC_URL}/images/profile/${item}`} alt="" /></li>
                    )
                })}
            </ul>
        </Wrap>
    )
}

export default ProfileModal

const Wrap = styled.div`
    width: 100%;
    min-height: 100vh;
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
            width: 50%;
            img{
                display: block;
                width: 100%;
            }
        }
    }
`