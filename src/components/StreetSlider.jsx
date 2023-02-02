import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import styled from 'styled-components';

const StreetSlider = ({ data }) => {

  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={2.5}
      style={{ paddingBottom: "70px", paddingLeft: "24px", marginTop: "10px" }}
    >
      {
        data.street.map((item, index) => {
          return (
            <SlideStyle key={index}>
              <ImgWrap>
                <img src={`${process.env.PUBLIC_URL}/${item.imgSrc}`} alt="" />
              </ImgWrap>
              <h5 style={DivStyle}>{item.title}</h5>
              <span style={DivStyle}>{item.address}</span>
            </SlideStyle>
          )
        })
      }
    </Swiper>
  );
};

export default StreetSlider;

const SlideStyle = styled(SwiperSlide)`
  >h5{
    font-size: 14px;
    font-weight: 400;
    color: #7e7e7e;
    margin-top: 5px;
  }
  >span{
    display: block;
    font-weight: 400;
    font-size: 12px;
    color: #acacac;
  }
`

const ImgWrap = styled.div`
  width: 100%;
  background-color: blue;
  border-radius: 10px;
  overflow: hidden;
  >img{
    display: block;
    width: 100%;
  }
`

const DivStyle = {
  display: "-webkit-box",
  overflow: "hidden",
  textOverflow: "ellipsis",
  webkitLineClamp: "2",
  webkitBoxOrient: "vertical"
}