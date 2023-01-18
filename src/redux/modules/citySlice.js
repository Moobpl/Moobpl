import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    citys: [
        {
            _id: 1,
            name: "서울특별시",
            disc: "대한민국의 심장",
            imgSrc: "images/city/seoul.jpg"
        }, {
            _id: 2,
            name: "인천광역시",
            disc: "인천의꿈, 대한민국의 미래도시",
            imgSrc: "images/city/incheon.jpg"
        }, {
            _id: 3,
            name: "제주특별자치시",
            disc: "제주도의 행정도시",
            imgSrc: "images/city/jeju.jpg"
        }, {
            _id: 4,
            name: "광주광역시",
            disc: "호남 최대도시",
            imgSrc: "images/city/gwangju.jpg"
        }, {
            _id: 5,
            name: "세종특별자치시",
            disc: "행정도시",
            imgSrc: "images/city/sejong.jpg"
        }, {
            _id: 6,
            name: "수원특례시",
            disc: "경기도청 소재지, 경기도 최대도시",
            imgSrc: "images/city/suwon.jpg"
        }, {
            _id: 7,
            name: "대전광역시",
            disc: "충청권 제1의 도시, 영·호남을 잇는 교통의 요지",
            imgSrc: "images/city/daejeon.jpg"
        }, {
            _id: 8,
            name: "부산광역시",
            disc: "국내 최대국제무역항이 있는 제1의 항구도시, 경상권 최대 도시",
            imgSrc: "images/city/boosan.jpg"
        }
    ],

    life:[
        {
            _id: 1,
            name: "세탁정보",
            disc: "오늘은 빨래하기 좋은날",
            imgSrc: "images/life/1.jpg"
        },
        {
            _id: 2,
            name: "도배정보",
            disc: "셀프 인테리어의 시작",
            imgSrc: "images/life/2.jpg"
        },
        {
            _id: 1,
            name: "세탁정보",
            disc: "오늘은 빨래하기 좋은날",
            imgSrc: "images/life/1.jpg"
        },
        {
            _id: 2,
            name: "도배정보",
            disc: "셀프 인테리어의 시작",
            imgSrc: "images/life/2.jpg"
        },
        {
            _id: 1,
            name: "세탁정보",
            disc: "오늘은 빨래하기 좋은날",
            imgSrc: "images/life/1.jpg"
        },
        {
            _id: 2,
            name: "도배정보",
            disc: "셀프 인테리어의 시작",
            imgSrc: "images/life/2.jpg"
        },
    ]
};

const citySlice = createSlice({
    name: "city",
    initialState,
    reducers: {},
    extraReducers: {
    }
});

export const {} = citySlice.actions;
export default citySlice.reducer;