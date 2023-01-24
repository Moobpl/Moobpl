import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    citys: [
        {
            _id: 1,
            name: "서울특별시",
            disc: "대한민국의 심장",
            script: `서울은 대한민국의 수도이며 과거 백제, 조선의 수도로 시대에 따라 위례성, 한산, 한성, 한양, 양주, 남경, 경성 등 여러 명칭으로 불렸습니다.
            암사동 선사주거지를 통해 알 수 있듯 서울은 신석기시대부터 사람들이 거주했고, 삼국시대, 고려, 조선을 거쳐 약 2000년의 역사를 지닌 곳입니다.
            `,
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

    life: [
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
    ],

    post: [
        {
            _id: 1,
            title: "뭅플 사이트를 오픈하였습니다.",
            script: `안녕하세요. 뭅플입니다.\n
            여러분의 많은 관심 부탁드립니다.\n
            많은 분들이 기다렸던 그런 어플
            드디어 소개 됩니다.\n
            이제 여러분의 설레는 멋진 일정을
            만들어보세요.
            `,
            date: "2023.01.19"
        },
    ]
};

const infoSlice = createSlice({
    name: "info",
    initialState,
    reducers: {},
    extraReducers: {
    }
});

export const { } = infoSlice.actions;
export default infoSlice.reducer;