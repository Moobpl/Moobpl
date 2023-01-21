import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import styled from 'styled-components';

const Slider = ({data}) => {
    console.log(data)
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={2.5}
    >
      <SwiperSlide style={slideStyle}>
        <img src="" alt="" />
      </SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  );
};

export default Slider;

const slideStyle = {
    backgroundColor: "#fff",
    height: "120px",
}