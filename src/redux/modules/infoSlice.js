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
            weather: `서울은 전세계에서 가장 연교차가 큰 대도시 중 하나이다.
            봄에는 이동성 고기압으로 서풍이 불거나 4~5월에 오호츠크해 기단을 받아 고온건조한 날씨가 나타난다. 봄비 적당히 온 뒤 맑게 개서 일조시간이 많고 온난한 날씨가 이어진다.
            여름에는 북태평양 기단의 영향으로 강수가 집중되므로 매우 습하고 덥다.
            가을의 경우 늦더위와 북쪽의 한기의 남하 등으로 인하여 굉장히 짧으며 타지역에 비하여 10월, 11월 까지는 서울이 타 중부지역보다는 확연히 온도가 높다.
            겨울의 경우
            `,
            imgSrc: ["images/city/seoul.jpg", "images/city/seoul/weather.jpg"],
            welfare: [
                "서울시 학자금대출 신용회복(신용유의자 해제) 지원사업",
                "서울시 청년월세지원 사업",
                "2022 서울시 희망두배 청년통장",
                "서울 영테크 지원사업",
                "서울 우수인재 장학금",
                "서울시 학자금 대출이자 지원",
                "역세권 청년주택 공급",
            ],
        }, {
            _id: 2,
            name: "인천광역시",
            disc: "인천의꿈, 대한민국의 미래도시",
            imgSrc: "images/city/incheon.jpg",
            welfare: [
                "기존주택 매입 임대",
                "약정형(소규모)매입임대주택사업",
                "인천 재직청년 드림포인트",
                "대학생 학자금 대출이자 지원",
                "인천 드림 For 청년통장",
                "인천형 청년 월세 한시 특별지원사업",
            ],
        }, {
            _id: 3,
            name: "제주특별자치시",
            disc: "제주도의 행정도시",
            imgSrc: "images/city/jeju.jpg",
            welfare: [
                "학자금 대출이자 지원사업",
                "주택 연월세 자금 대출이자 지원",
                "탐라영재관 운영",
                "학자금 대출 신용회복 지원사업",
            ],
        }, {
            _id: 4,
            name: "광주광역시",
            disc: "호남 최대도시",
            imgSrc: "images/city/gwangju.jpg",
            welfare:[
                "청년 주거급여 지원",
                "(청년금융복지지원)광주청년 드림은행",
                "청년저축계좌",
                "2022년 2차 청년맞춤형 주택임차보증금 이자지원",
                "청년월세 한시 특별지원",
                "남도학숙 운영 지원",
            ]
        }, {
            _id: 5,
            name: "세종특별자치시",
            disc: "행정도시",
            imgSrc: "images/city/sejong.jpg",
            welfare:[
                "세종청년적금",
                "세종형 쉐어하우스 청년임대주택 보급",
                "출산축하금 지원",
                "첫만남 이용권 지원",
            ]
        }, {
            _id: 6,
            name: "수원특례시",
            disc: "경기도청 소재지, 경기도 최대도시",
            imgSrc: "images/city/suwon.jpg",
            welfare:[
                "경기도 청년면접수당",
                "2022년 경기도 청년 기본소득(4분기)",
                "청년 월세 지원",
                "양평愛 청년 통장",
                "경기 행복주택 임대보증금 이자지원사업",
            ]
        }, {
            _id: 7,
            name: "대전광역시",
            disc: "충청권 제1의 도시, 영·호남을 잇는 교통의 요지",
            imgSrc: "images/city/daejeon.jpg",
            welfare:[
                "대전 청년내일희망카드(청년취업희망카드)",
                "대전청년하우스 조성",
            ]
        }, {
            _id: 8,
            name: "부산광역시",
            disc: "국내 최대국제무역항이 있는 제1의 항구도시, 경상권 최대 도시",
            imgSrc: "images/city/boosan.jpg",
            welfare: [
                "부산 청년희망 신용(상담 및 채무 조정비용 지원)",
                "청년 전월세 중개보수 지원",
                "2022년 부산청년 기쁨 두배 통장 사업",
            ],
        }, {
            _id: 9,
            name: "대구광역시",
            disc: "국내 최대국제무역항이 있는 제1의 항구도시, 경상권 최대 도시",
            imgSrc: "images/city/boosan.jpg",
            welfare: [
                "청년매입임대주택사업",
                "2022 대구 청년희망적금(2차)",
                "청년내일저축계좌",
                "청년행복주택사업",
            ],
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