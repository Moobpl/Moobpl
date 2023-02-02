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
            style={{ paddingBottom: "70px", marginTop: "10px" }}
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
    width: calc(50% - 7.5px);
    background: #FFFFFF;
    box-shadow: 10px 24px 54px rgba(0, 0, 0, 0.05);
    border-radius: 16px;
    padding:8px;
    box-sizing: border-box;
    cursor: pointer;
    &:hover{
        box-shadow: 10px 24px 54px rgba(0, 0, 0, 0.10);
    }
    h4{
        font-weight: 400;
        font-size: 14px;
        line-height: 21px;
        letter-spacing: 0.3px;
        color: #7E7E7E;
        margin-top: 6px;
    }

    p{
        width: 100%;
        font-weight: 400;
        font-size: 12px;
        line-height: 18px;
        color: #ACACAC;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .container{
        display: flex;
    }
`

const ImgWrap = styled.div`
    width: 60px;
    border-radius: 16px;
    overflow: hidden;
    img{
        display: block;
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