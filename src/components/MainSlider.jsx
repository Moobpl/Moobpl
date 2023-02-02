import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router-dom';

// Import Swiper styles
import styled from 'styled-components';
import 'swiper/css';


const MainSlider = ({ data }) => {
    const navigate =useNavigate();

    return (
        <Swiper
            spaceBetween={10}
            slidesPerView={1.2}
            style={{ paddingBottom: "70px" }}
        >
            {
                data.map((item, index) => {
                    return (
                        <CardWrap key={index} onClick={()=>{navigate(`/lifeinfodetail/${item._id}`)}}>
                            <div className="container">
                                <ImgWrap>
                                    <img src={`${process.env.PUBLIC_URL}/${item.imgSrc}`} alt="" />
                                </ImgWrap>
                                <TextBox>
                                    <h4>{item.name}</h4>
                                    <p>{item.disc}</p>
                                </TextBox>
                            </div>
                        </CardWrap>
                    )
                })
            }
        </Swiper>
    );
};

export default MainSlider


const CardWrap = styled(SwiperSlide)`
    width: 100%;
    background-color: #fff;
    box-shadow: 10px 24px 54px rgba(0, 0, 0, 0.04);
    border-radius: 14px;
    padding: 10px;
    box-sizing: border-box;
    cursor: pointer;
    .container {
        display: flex;
        gap:16px;
        align-items: center;
    }
`

const ImgWrap = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 14px;
    background-color: transparent;
    display: flex;
    overflow: hidden;
    img {
        width: 100%;
    }
`

const TextBox = styled.div`
    h4{
        font-weight: 400;
        font-size: 14px;
        letter-spacing: 0.3px;
        color: #7E7E7E;
    }

    p{
        font-weight: 400;
        font-size: 12px;
        line-height: 18px;
        color: #ACACAC;
    }
`