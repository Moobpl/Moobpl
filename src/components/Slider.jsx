import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const Slider = ({data}) => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={2.5}
      style={{paddingBottom: "70px", paddingLeft : "24px", marginTop: "10px"}}
    >
      {
        data.welfare.map((item)=> {
          return <SwiperSlide key={item} style={SlideStyle}><div style={DivStyle}>{item}</div></SwiperSlide>
        })
      }
    </Swiper>
  );
};

export default Slider;

const SlideStyle = {
    backgroundColor: "#fff",
    fontSize: "14px",
    fontWeight: "500",
    lineHeight: "24px",
    color: "#282B49",
    wordBreak: "keep-all",
    boxShadow: "10px 24px 54px rgba(0, 0, 0, 0.05)",
    borderRadius: "16px",
    padding:"15px",
    boxSizing:"border-box",
    cursor: "grab",
    height:"78px"
}

const DivStyle = {
    display:"-webkit-box",
    overflow:"hidden",
    textOverflow: "ellipsis",
    WebkitLineClamp: "2",
    WebkitBoxOrient: "vertical"
}