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
      <>
        
        <Wrap onClick={() => setModal(!modal)}>
           
            <div>
              <h3>프로필 캐릭터를 선택해주세요</h3>
              <ul>
                  {profileList.map((item, index) => {
                      return (
                          <li key={index} onClick={onClickHandler}><img src={`${process.env.PUBLIC_URL}/images/profile/${item}`} alt="" /></li>
                      )
                  })}
              </ul>
            </div>
        </Wrap>
      </>
    )
}

export default ProfileModal

const Wrap = styled.div`
    width: 100%;
    height: 100%;
    /* background-color: red; */
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(3.5px);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;

    > div {
      

      h3 {
        text-align: center;
        color:#fff;
      }
      ul{
        display: flex;
        flex-wrap: wrap;
        padding: 20px;
          li{
              width: 35%;
              margin:7%;
              cursor: pointer;
              border-radius: 100%;
              &:hover img {
                transform: scale(1.2);
                transition: all ease 0.3s;
              }
              img{
                  display: block;
                  width: 100%;
              }
          }
      }
    }
    
`