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
            `,
            imgSrc: ["images/city/seoul/seoul.jpg", "images/city/seoul/weather.jpg"],
            welfare: [
                "서울시 학자금대출 신용회복(신용유의자 해제) 지원사업",
                "서울시 청년월세지원 사업",
                "2022 서울시 희망두배 청년통장",
                "서울 영테크 지원사업",
                "서울 우수인재 장학금",
                "서울시 학자금 대출이자 지원",
                "역세권 청년주택 공급",
            ],
            street: [
                {
                    imgSrc: "images/city/seoul/hongdae-shopping-street.jpg",
                    title: "홍대 쇼핑거리",
                    address: "서울시 마포구"
                },
                {
                    imgSrc: "images/city/seoul/Myeongdong-Seoul-shopping-district.jpg",
                    title: "명동 거리",
                    address: "서울시 중구"
                },
                {
                    imgSrc: "images/city/seoul/gangnam.jpg",
                    title: "강남역",
                    address: "서울시 강남구"
                },
                {
                    imgSrc: "images/city/seoul/yeongdeungpo.jpg",
                    title: "영등포 타임스퀘어",
                    address: "서울시 영등포구"
                },
                {
                    imgSrc: "images/city/seoul/garosugil.jpg",
                    title: "가로수길",
                    address: "서울시 강남구"
                },
                {
                    imgSrc: "images/city/seoul/dongdaemun.jpg",
                    title: "동대문",
                    address: "서울시 동대문구"
                }
            ],
            streetText: `서울은 대한민국의 수도 답게 굉장히 많은 곳에 상권이 분포 되어있다.
            서울의 상권은 인지도가 높은 명동, 홍대 강남 영등포, 가로수길 등 다양하며 굉장히 많은 인파들이 오가는 곳입니다.`
        },
        {
            _id: 2,
            name: "인천광역시",
            disc: "인천의꿈, 대한민국의 미래도시",
            script: `인천광역시는 지금 동북아시아의 중심도시로 세계를 향해 웅비하고 있다.
            서울의 관문으로서 항만·상업도시를 이루어 온 원인천에다가 농·공업도시 부평을 아우르고,
            이어 농·수산과 문화·관광의 보고(寶庫) 강화와 옹진 등을 합하면서 동북아시아의 허브(Hub) 공항을 더하여,
            명실상부한 한반도의 거대한 관문이자 국제적 물류중심지, 산업·정보단지, 관광·휴양단지로 비약적인 성장을 기하고 있는 것이다.
            지난 날의 인천(원인천)과는 완연히 다른 새로운 차원의 국제도시로 변화하고 있다.
            `,
            weather: `인천의 경우 서울과는 다르게 인천은
            대륙성 기후에 속하면서도 해안에 위치하여 다른 내륙지방보다는 해양성 기후의 특성도 일부 가지고 있어서,
            기온의 연교차가 적은 편이다.
            인천은 봄인 2~4월 경에 풍속이 가장 강하며, 가을에는 풍속이 약하다.
            4월부터 안개 발생일수가 증가하기 시작하여 여름인 5,6월에 가장 많으며  8월 부터 급격히 줄어든다. 
            `,
            imgSrc: ["images/city/incheon/incheon.jpg", "images/city/incheon/weather.jpg"],
            welfare: [
                "기존주택 매입 임대",
                "약정형(소규모)매입임대주택사업",
                "인천 재직청년 드림포인트",
                "대학생 학자금 대출이자 지원",
                "인천 드림 For 청년통장",
                "인천형 청년 월세 한시 특별지원사업",
            ],
            street: [
                {
                    imgSrc: "images/city/incheon/Chinatown1200.jpg",
                    title: "인천 차이나타운",
                    address: "인천 중구"
                },
                {
                    imgSrc: "images/city/incheon/d6743951277050acae0b235d1bb99f5b4545a0aa73b7fc4f3d150207c6a5706df9c8bdfdf588276ed6aaf50a1e6a1f0247a127ae2cd379193b561475d5a273430115ed36fa226bba173461fb1409a8c3032ef8e8ec20574d367c.jpg",
                    title: "주안역 남부",
                    address: "인천시 미추홀구"
                },
                {
                    imgSrc: "images/city/incheon/guwoldongrodeogeori_005.jpg",
                    title: "구월동 로데오거리",
                    address: "인천시 남동구"
                },
                {
                    imgSrc: "images/city/incheon/mosaW5ZVte.jpg",
                    title: "부평 문화/테마의 거리",
                    address: "인천시 부평구"
                },
            ],
            streetText: `인천광역시의 특징은 번화가의 상당수가 역주변으로 해서 발달되었다는 것이 특징이며,
            서울과는 다르게 많은 신도시건설로 인하여 신도시 주변의 상권이 발전 되었다는 점이다.`
        }, {
            _id: 3,
            name: "제주특별자치시",
            disc:"대한민국 최대의 섬",
            script: `대한민국 최남단에 있는 광역자치체.
            한국에서 가장 큰 섬이다. 동아시권으로 봐도 상당히 큰 섬이다. 2010년대에 들어서 TV 및 영화 프로그램을 통하여
            많이 소개가 된 이후로 젊은이들의 관광 및 한달살기 등 도시를 벗어나 은퇴한 중년부부 등 여러 사람들이 제주로 모이고 있다.
            `,
            weather: `제주 지방은 북반구 중위도 지역의 대륙 동안에 위치하고 있어서 계절 변화가 뚜렷한 동안 기후의 특징이 잘 나타난다.
            또한 한반도 서남 해상의 절해고도라는 지리적 위치 때문에 일기의 변화가 뚜렷하며, 다른 지방에 비하여 제주 지역은 겨울이 짧고 여름이 긴 편이다.
            겨울철에는 우리나라의 다른 지역과 같이 강한 북서 계절풍의 영향을 받으며, 여름철에는 남서·남동 계절풍의 영향을 받는다.
            섬의 중앙에 한라산이 있어서 지역별로 기후의 특성에 미치는 영향이 크다.
            여름철에는 장마 전선에 의해 강수량이 많고 여름철과 가을철에 태풍의 의해서도 강수량이 많은편이다.
            최한월인 1월에 평균 기온은 5.6℃이다. 한국의 남쪽인 만큼 중부권에 비하여 매우 따듯한 편이다.
            `,
            imgSrc: ["images/city/jeju/jeju.jpg", "images/city/jeju/weather.jpg"],
            welfare: [
                "학자금 대출이자 지원사업",
                "주택 연월세 자금 대출이자 지원",
                "탐라영재관 운영",
                "학자금 대출 신용회복 지원사업",
            ],
            street: [
                {
                    imgSrc: "images/city/jeju/newjeju.jpg",
                    title: "제원사거리",
                    address: "제주시 애월읍"
                },
                {
                    imgSrc: "images/city/jeju/_MG_1808_(Web).jpg",
                    title: "광양사거리",
                    address: "제주시 이도일동"
                },
                {
                    imgSrc: "images/city/jeju/DSC00943.jpg",
                    title: "중앙로",
                    address: "제주시 일도일동"
                },
            ],
            streetText: `흔히 신제주라 불리우는 연동, 노형동을 아우르는 번화가 또 제주시청 맞은 편에 위치한 광양사거리가 있다 제주시내에 있는 가장 대표적인 상권이며,
            수백년 동안 제주의 중심지 였던 중앙로가 있는데 신제주, 제주시청의 주도권을 내준 뒤 전형적인 구도심이 되었다.`
        }, {
            _id: 4,
            name: "광주광역시",
            disc: "호남 최대도시",
            script: `광주는 국토 서남권 산업경제 및 중추관리의 중심지로서 기능적 역할을 가지고 있으며, 특히 인접 시·군(나주, 담양, 화순, 함평, 장성)과 빛고을 중추도시생활권을 구성하여 중추업무, 교육 및 과학기술, 첨단산업, 문화, 서비스 기능 등의 연계협력을 통한 시너지 효과를 도모하고 있다.
            앞으로 광주는 광주 미래먹거리를 책임질 미래 모빌리티 MoT산업, 인공지능, 에너지·수소, 의료·헬스케어, 문화콘텐츠, 관광산업 등을 집중 육성하여 4차 산업혁명을 선도하는 새로운 광주시대로 발돋움해 나갈 예정이다.`,
            weather: `광주지방의 기후 특성은 서해안형과 내륙형의 중간형으로 대체로 서해안형에 가까운 특성을 보이고 있다. 겨울에는 몽고부근에서 그 세력을 우리나라 쪽으로 확장하는 한랭한 대륙성 고기압의 영향으로 3한 4온의 날씨를 보이며, 여름에는 북태평양 동부에 중심을 두고 그 세력을 아시아쪽으로 확장하는 북태평양 고기압의 영향으로 무더우나 초여름과 늦여름에는 장마기가 있어 호우에 의한 기상재해가 발생하며, 태풍은 연간 한두번 영향을 미친다. 봄과 가을에는 중국에서 이동하는 이동성고기압의 영향으로 건조하고 맑은 날이 많다.
            2021년 연평균기온 15.1℃, 연평균 최고기온은 20.3℃를 기록하며 1973년 이후 가장 기온이 높았다. 계절별로는 봄철(3~5월)과 가을철(9~11월) 높은 기온을 기록함에 따라 2021년에도 기후변화로 인한 온난화 경향을 이어갔다. 또한 고온으로 인해 광주 벚꽃 개화일(3월 18일, 평년 대비 13일이 빠름)이 1939년 관측 이래 83년 만에 가장 빨랐다.
            연중 총강수량은 1,303.8mm로 5월에는 대기 상층에 찬 공기가 위치하며 불안정으로 인한 낙뢰도 잦았으며, 3일에 한번 꼴로 비가 내렸다. 6월 북태평양고기압이 늦게 북상한 후 7월 빠른 속도로 확장하여 장마기간(17일/평년 31.4일)이 역대 다섯 번째로 짧았다.
            `,
            imgSrc: ["images/city/gwangju/gwangju.jpg", "images/city/gwangju/weather.jpg"],
            welfare: [
                "청년 주거급여 지원",
                "(청년금융복지지원)광주청년 드림은행",
                "청년저축계좌",
                "2022년 2차 청년맞춤형 주택임차보증금 이자지원",
                "청년월세 한시 특별지원",
                "남도학숙 운영 지원",
            ],
            street: [
                {
                    imgSrc: "images/city/gwangju/224991_78731_4917.jpg",
                    title: "충장로",
                    address: "광주광역시 동구"
                },
                {
                    imgSrc: "images/city/gwangju/224991_78731_4912.jpg",
                    title: "금남로",
                    address: "광주광역시 동구"
                },
                {
                    imgSrc: "images/city/gwangju/224991_78731_4913.jpg",
                    title: "수완지구",
                    address: "광주광역시 광산구"
                },
            ],
            streetText: `예로부터 충장로와 금남로 주변이 쇼핑 중심지이다.
            충장로는 서울의 명동과 분위기가 비슷하다. 백화점은 광천동 버스터미널쪽에 사람들이 많이 즐비해 있으며 신도심인 광산구 수완지구에 복합쇼핑몰이 입점되어있다.`
        }, {
            _id: 5,
            name: "세종특별자치시",
            disc: "행정도시",
            script: `2000년대는 세종특별자치시[행정중심복합도시] 태동의 시기이다.
            2002년 노무현 대통령 후보의 공약으로 시작된 ‘충청권 신행정수도’ 공약은 충청권의 관심을 집중시켰다.
            2004년 여러 후보지 중에서 연기군 지역이 최종 결정되었다. 그러나 ‘신행정수도특별법’이 위헌으로 결정되면서 파장이 일었다.
            이후 충청권의 반발에 부닥치면서 2005년 ‘신행정수도 후속대책을 위한 연기·공주지역 행정중심복합도시 건설을 위한 특별법’이 국회에서 가결되었다.
            이후 이명박 정부에서 ‘세종시 수정안’이 제기되는 등 우여곡절을 겪었다.
            2010년대는 세종특별자치시 출범의 시대이다. 2012년 7월 1일 세종특별자치시가 정식으로 출범하였다.`,
            weather: `북반구 극동지역에 위치한 우리나라는 온대성 기후에 속하여 봄, 여름, 가을, 겨울이 뚜렷한 사계절을 보인다.
            연평균 기온은 6.6~16.6℃로 지역차가 큰 편이다. 산악지대를 제외하면 10~16℃이다. 연 강수량은 남부지방이 1,500㎜ 정도이고 중부지방이 1,300㎜ 정도이다.
            연 강수량의 50~60%가 여름에 내린다. 바람은 북서 계절풍이 남서 계절풍보다 강하다.
            세종 지역은 같은 위도상의 해안지방에 비해 겨울 기온이 낮고 기온의 연교차가 큰 내륙성 기후의 특징을 지니고 있다.
            2013년 기준 세종특별자치시의 연평균 기온은 13.1℃이다. 8월에 27.8℃로 가장 높고 1월에 -2.6℃로 가장 낮다.
            평균 최고기온은 32.1℃, 평균 최저기온은 –7.5℃이다. 연 강수량은 2013년 기준 1,120.2㎜이다. 7월 강수량이 218.7㎜로 가장 많다.
            습도는 73.2%, 일조시간은 2,513.1hr, 풍속은 1.6㎧이다.`,
            imgSrc: ["images/city/sejong/sejong.jpg", "images/city/sejong/weather.jpg"],
            welfare: [
                "세종청년적금",
                "세종형 쉐어하우스 청년임대주택 보급",
                "출산축하금 지원",
                "첫만남 이용권 지원",
            ],
            street: [
                {
                    imgSrc: "images/city/sejong/224991_78731_123.jpg",
                    title: "고려대학교 세종캠퍼스",
                    address: "인천 중구"
                },
                {
                    imgSrc: "images/city/sejong/714099_316663_76.jpg",
                    title: "정부세종청사",
                    address: "인천시 미추홀구"
                },
            ],
            streetText: `정부청사등 정부 주요시설들이 세종시로 이전됨에 따라 공무원분들이 근무하는 정부세종청사 부근이나 고려대학교 세종캠퍼스 주변 등이 많이 거론된다.
            세종특별자치시는 지금현재에도 개발진행중이기 때문에 아직더 지켜보아야 할 곳 들이 있다.`
        }, {
            _id: 6,
            name: "수원특례시",
            disc: "경기도 최대도시",
            script: `경기도 중남부에 위치한 특례시. 전국 7위의 대도시이자 경기도청 소재지, 경기도 최대도시이며, 전국 기초단체 중에서 가장 인구가 많다은 도시이다.
            수원시는 2002년 인구 100만명을 넘었지만, 1997년 울산이 광역시로 승격된 이후, 광역시는 설치되지 않았스비다.
            2022년 1월 13일 지방자치법 전부개정시행 후 수원특례시가 출범 했다.
            `,
            weather: `서울과 인접된 만큼 서울과 기후가 상당히 비슷하다 기온차가 심하고 서울보다 기온이 약간 낮은 특성을 띈다.
            2000년대부터 대도시화로 인한 본격적인 열섬 현상이 생기면서 서울 못지 않은 평균을 기록하기도 한다.`,
            imgSrc: ["images/city/suwon/suwon.jpg", "images/city/suwon/weather.jpg"],
            welfare: [
                "경기도 청년면접수당",
                "2022년 경기도 청년 기본소득(4분기)",
                "청년 월세 지원",
                "양평愛 청년 통장",
                "경기 행복주택 임대보증금 이자지원사업",
            ],
            street: [
                {
                    imgSrc: "images/city/suwon/suwonstation.jpg",
                    title: "수원역",
                    address: "수원시 팔달구"
                },
                {
                    imgSrc: "images/city/suwon/9917203A5E09E2A424.jpg",
                    title: "영통",
                    address: "수원시 영통구"
                },
                {
                    imgSrc: "images/city/suwon/ingye.jpg",
                    title: "인계동",
                    address: "수원시 팔달구"
                },
            ],
            streetText: `대도시인 만큼 상권도 서울 못지않게 크고 많은편이다.
            크게 5가지구 상권으로 나눌 수 있는데 수원역이 있는 팔달구가 속해있는 원도심권 영통구의 동수원
            장안구의 북수원권 권선구의 남수원권 권선구 서부의 서수원권이 있다.`
        },
        {
            _id: 7,
            name: "대전광역시",
            disc: "충청권 제1의 도시",
            script:`충청권 제1의 도시로 중부지방과 영·호남을 잇는 교통의 요지이자 대덕연구개발특구(대덕연구단지), 국제과학비즈니스벨트가 조성된 한국 최대의 과학·연구도시이다. 또한 4년제 대학만 13곳이 소재한 교육도시이다.
            그와 동시에 정부대전청사와 다수의 국가기관 본사가 자리해 세종시 못지않은 행정도시이다.
            또한 자운대와 육군군수사령부, 국방과학연구소, 국군간호사관학교가 자리해 군사도시의 기능도 수행하고 있다.`,
            weather:`대전은 지리적으로 북반구의 극동지역, 한반도의 중부지방에 위치하며 서울에서 남으로 167.3km, 부산에서는 238.2km에 위치하고 있다. 또한 공주와의 경계에 계룡산(845m), 청주시와의 경계에 대청댐이 있으며, 대전광역시를 중심으로 동쪽에는 식장산, 서쪽에는 구봉산, 남쪽에는 보문산, 북쪽에는 계족산의 연봉에 둘러 쌓여있는 분지형태의 도시이다.
            평년값은 1991년부터 2020년까지의 평년값을 말하며 대전의 연평균 기온은 13.1˚C, 연평균 강수량은 1,458.7mm 이다.
            가장 무더운 달인 8월 월평균기온 26˚C, 가장 추운 달인 1월의 월평균기온 -1.0˚C, 연교차는 27˚C로 여름은 덥고 겨울에는 추운 대륙성 기후특성을 나타내고 있다. 극값으로는 최고기온이 39.4˚C(2018. 8. 15), 최저기온은 -19.0˚C(1969. 2. 6)를 나타내었다.
            강수량은 연평균이 1,458.7mm이며 계절적으로 연강수량의 57%가 여름철에 내리고, 5%는 겨울에 내리며, 일강수량의 최대값은 303.3mm(1987. 7. 22)이었다.
            바람은 일반적으로 북서계절풍이 남서계절풍보다 강하고, 특히 겨울철에는 북서풍이 불며, 운량은 7월에 많고 10월에는 적게 나타난다. 계절관측으로는 첫서리는 10월 24일, 첫얼음은 10월 31일, 첫눈은 11월 20일에 관측되었다.`,
            imgSrc: ["images/city/daejeon/daejeon.jpg", "images/city/daejeon/weather.jpg"],
            welfare: [
                "대전 청년내일희망카드(청년취업희망카드)",
                "대전청년하우스 조성",
            ],
            street: [
                {
                    imgSrc: "images/city/daejeon/Daejeon_Terminal_Complex_Main.jpg",
                    title: "대전 복합 터미널",
                    address: "대전광역시 동구"
                },
                {
                    imgSrc: "images/city/daejeon/1200px-Joongangro_jst_2.jpg",
                    title: "중앙로",
                    address: "대전광역시 중구"
                },
                {
                    imgSrc: "images/city/daejeon/photo-1523731407965-2430cd12f5e4.jpg",
                    title: "둔산동",
                    address: "대전광역시 서구"
                },
            ],
            streetText: `대전의 양대 상권은 소위 '으능정이'라고 불리는 중앙로 상권과 이후 들어선 둔산 상권으로 양분되며, 그 외 관광지로 오랫동안 독자적인 상권을 형성해 온 유성온천 상권이 있다. 2010년대 들어 대전복합터미널 개발로 유흥가 위주던 주변 상권이 환골탈태하였으며, 신세계가 입주한 대전 사이언스콤플렉스 일대도 주목받고 있다.`
        },
        {
            _id: 8,
            name: "부산광역시",
            disc: "국내 최대국제무역항이 있는 경상권 최대 도시",
            script:`대한민국 제2의 도시이자 대한민국 최초의 직할시 · 광역시이고 국내 최대국제무역항이 있는 제1의 항구도시, 경상권 최대 도시, 제1의 해양교통과 제2의 항공교통 김해국제공항[19] 타이틀 등을 보유한 도시이기도 하다. 지역 내 문화 컨텐츠로는 대한민국 아시아 최대의 영화제인 부산국제영화제를 비롯해
            G-STAR, 부산국제모터쇼, 부산불꽃축제, 부산항 불꽃축제, 부산 비엔날레, 부산 원아시아 페스티벌, 자갈치 축제, 부산 해맞이 축제 등이 유명하다.`,
            weather:`부산은 봄이 115일 정도로 매우길며 여름 역시 4개월 정도로 상당히 긴 편이다. 특히 9월에는 식는 속도가 느려 내륙보다 기온이 높으며 따라서 10월쯤이 되어서야 가을이 시작된다.
            겨울은 50일 남짓하다. 어떤 해에는 부산에서 크리스마스는 기상학적 가을인 적도 있었다.
            `,
            imgSrc: ["images/city/busan/busan.jpg", "images/city/busan/weather.jpg"],
            welfare: [
                "부산 청년희망 신용(상담 및 채무 조정비용 지원)",
                "청년 전월세 중개보수 지원",
                "2022년 부산청년 기쁨 두배 통장 사업",
            ],
            street: [
                {
                    imgSrc: "images/city/busan/abad285f3607973f1c96a8661aa8b17402c21351629310206992cdb50b06effa2a909ccac3c3f756d61528ae957f8ac1c6f7f6a590ec15ca913352eaef9e76c5cdf7e1ac267f5cc2fb56415db71a97ad8cd197dec873d8d414.jpg",
                    title: "서면",
                    address: "부산광역시 부산진구"
                },
                {
                    imgSrc: "images/city/busan/4fb8ca9fc7e71b2f75d1e733c7af0d87d779e2a47ab5c552fb38bbf74bdbd1d999e9ffc58b51f195b8553a83ac187a6d17ac2f92b0b97e8817e2610ddb66a2246464e8d872a12c264f0c5ea677388a65d2e512218d6a9abc20fb.jpg",
                    title: "남포",
                    address: "부산광역시 중구"
                },
            ],
            streetText: `부산은 1990년대 중반까지 중형급의 백화점 개점이 진척되기는 하였지만 백화점 집중도는 도시 외형에 비하여 상당히 낮은 수준이었다. 따라서 백화점이 획기적인 상권의 변화를 유인해 내기에는 미흡하였다. 이런 상황에서 개점한 현대 백화점과 롯데 백화점은 강력한 소비자 흡인력을 바탕으로 그동안 완만하게 진행되어 오던 부산 상권의 변화를 촉진시켰다. 또 부산 상권의 중심을 중구 광복동과 남포동에서 부산진구 서면 중심으로 옮겨 놓은 분수령이 되었다.`
        },
        {
            _id: 9,
            name: "울산광역시",
            disc: "공업도시",
            script:`대한민국 동남부에 있는 광역자치단체. 부산광역시와 인천광역시에 이은 대한민국 제3의 항구도시이자 해안도시이다.
            한반도 최대 공업 도시이기도 하다.
            `,
            weather:`한반도에서 가장 온난한 지역 중 하나이다. 겨울은 중부 지방은 물론 남부 지방에서도 온난한 편, 겨울이 온난해서 눈이 잘 안오는 지역이다.
            여름철 폭염도 그렇게 심한 지역이 아니다.
            `,
            imgSrc: ["images/city/ulsan/ulsan.jpg", "images/city/ulsan/weather.jpeg"],
            welfare: [
                "울산형 청년수당",
                "근로복지공단 울산 청년 공유형",
                "신혼부부 가구 주거비 지원",
                "2022년 울산 청년가구 주거비 지원사업",
                "2022년 예술인 창작안정 융자 이자지원 사업",
                "2022 울산청년 구직지원금 지원",
            ],
            street: [
                {
                    imgSrc: "images/city/ulsan/212851_120466_454.jpg",
                    title: "울산대",
                    address: "울산광역시 남구"
                },
                {
                    imgSrc: "images/city/ulsan/Untitled-1-Recovered.jpg",
                    title: "삼산",
                    address: "울산광역시 남구"
                },
                {
                    imgSrc: "images/city/ulsan/8696b366-dfbc-47e0-8607-afcec6edb51e.jpg",
                    title: "공업탑",
                    address: "울산광역시 남구"
                },
                {
                    imgSrc: "images/city/ulsan/108928_110325_1135.jpg",
                    title: "혁신도시",
                    address: "울산광역시 중구"
                },
            ],
            streetText: `인구대비 대형 마트수가 많은 지역이다. 울산시외버스터미널 롯데백화점 울산점이 있는 울산 삼산이나 울산대 주변 상권이 많이 형성 되어있다. 혁신도시로 지정되어 개발 중인 곳으로 수도권
            에서 이전한 공공기관이 입주한 곳이 있다.
            `
        },
        {
            _id: 10,
            name: "대구광역시",
            disc: "경상도의 중심",
            script:`경상도의 중앙에 있는 광역시. 대구권과 대경권의 중심이자 최대도시.
            대구광역시 자체 인구로는 서울특별시, 부산광역시, 인천광역시에 이어 대한민국 4위[10], 도시권 인구로는 수도권, 부산·울산권에 이어 대한민국 3위라고 볼수있다.`,
            weather:`대구는 한국 내에서 제일 더운 지역으로 알려져 있다.
            여름철 더위와 함께 대구 기후의 특징 중에서 손에 꼽을 만한 다른 한 가지는 비도 잘 안 오고, 눈도 잘 안 오는 소우지(小雨地)라는 점이다.
            봄에도 상당히 더운데 서풍이 잦아서 대구의 경우 더 덥거나 일교차가 매우 크기도 한다.
            여름이 상당히 긴 편으로 매우 덥다.
            가을철에는 내륙이라 대구만큼 기온이 높은 지역보다는 빨리 식기는 한다.
            겨울철 강수량이 특히 적어서 눈도 적지만 한번 내리면 폭설이 되어 내린다.`,
            imgSrc: ["images/city/daegu/daegu.jpg", "images/city/daegu/weather.jpg"],
            welfare: [
                "청년매입임대주택사업",
                "2022 대구 청년희망적금(2차)",
                "청년내일저축계좌",
                "청년행복주택사업",
            ],
            street: [
                {
                    imgSrc: "images/city/daegu/dongsung.jpg",
                    title: "동성로",
                    address: "대구광역시 중구"
                },
                {
                    imgSrc: "images/city/daegu/jungang.jpg",
                    title: "중앙로",
                    address: "대구광역시 중구"
                },
            ],
            streetText: `1개 도심(중구), 4개 부도심(동대구, 칠곡지구, 성서지구, 현풍),
            5개 성장유도거점(서대구, 월배지구·화원읍, 수성구, 안심지구, 이시아폴리스·금호워터폴리스)과 대학가를 중심으로 크고 작은 번화가가 발달해 있지만,
            뭐니뭐니 해도 동성로, 반월당, 대구역을 중심으로 한 도심에 가장 큰 번화가가 형성돼 있다.
            또한 재래시장이 잘 활성되어 있어서 언제나 젊은이를 포함한 많은 사람들이 이용하며, 특히 서문시장은 조선 중기 때부터 전국 3대 시장 타이틀을 지켜오고 있다.`
        }
    ],

    life: [
        {
            _id: 1,
            name: "도배정보",
            disc: "셀프 인테리어의 시작",
            script: `인테리어를 할때 가장 많이 변화를 일키는것이 바로 벽지이다.
            도배는 생각보다 쉽지는 않은데, 업체에 맞기기엔 비용이 부담스럽다면 하나하나 읽어보며 천천히 따라해보자!`,
            imgSrc: "images/life/painting/cardimg.jpg",
            mainImgSrc: "images/life/painting/img.png",
            step:[
                {
                    imgSrc:"images/life/painting/step1.jpg",
                    title:"Step1. 벽지 및 재료선정 ",
                    body:`벽지규격 \n: 대부분 한 롤에 폭은 1m 내외, 길이는 10~20m\n소요량산출\n: 대체로 방바닥 면적 3~4배\n: 도배할 4면의 벽과 천장에서 문과 창을 감안 \n`,
                },
                {
                    imgSrc:"images/life/painting/step2.jpg",
                    title:"Step2. 현장점검 ",
                    body:`작업환경, 벽면의 상태, 전기용수문제 점검`,
                },
                {
                    imgSrc:"images/life/painting/step3.jpg",
                    title:"Step3. 재료 및 도구의 점검 ",
                    body:`도구 점검\n도배풀 확인\n도배지 점검\n초배지 점검`,
                },
                {
                    imgSrc:"images/life/painting/step4.jpg",
                    title:"Step4. 도배할 벽면 점검",
                    body:`벽면의 치수, 수평, 수직, 건조 상태, 오염상태\n조명 기구 및 스위치 커버 점검\n`,
                },
                {
                    imgSrc:"images/life/painting/step5.jpg",
                    title:"Step5. 벽면 분할 계획",
                    body:`수직, 수평을 정확하게 측정\n벽면 분할\n`,
                },
                {
                    title:"Step6. 초배 ",
                    body:`전면 풀칠하여 바르기(밀착 초배)\n모서리만 풀칠하여 바르기(공간 초배)`,
                },
                {
                    imgSrc:"images/life/painting/step7.jpg",
                    title:"Step7. 벽지의 최종 점검",
                    body:`작업환경, 벽면의 상태, 전기용수문제 점검 `,
                },
                {
                    imgSrc:"images/life/painting/step8.jpg",
                    title:"Step8. 재단",
                    body:`벽지 재단\n길이 재단`,
                },
                {
                    title:"Step9. 풀칠 ",
                    body:`풀의 배합\n앞쪽에 풀이 묻는 등 오염주의`,
                },
                {
                    imgSrc:"images/life/painting/step10.jpg",
                    title:"Step10. 잠재우기 ",
                    body:`풀칠한 부분 접어 벽지에 풀이 머금게 하는 작업\n재료, 날씨, 습도를 감안`,
                },
                {
                    imgSrc:"images/life/painting/step11.jpg",
                    title:"Step11. 도배지 바르기",
                    body:`무늬맞춤\n이음매 처리\n끝마무리(상하 마무리, 조명, 전기, 스위치)`,
                },
                {
                    title:"Step12. 정리 및 점검",
                    body:`용구 및 재료 정리\n터짐을 방지하기 위해 서서히 건조`,
                },
            ]
        },
        {
            _id: 2,
            name: "요리정보",
            disc: "자취러 된장찌개 만들기",
            script: `된장과 소금, 기타 부재료를 썰어 넣고 물만 붓고 끓여도 먹을만한 음식이 되는 된장찌개,
            하지만 맛있게 만들기가 까다로운 음식 중 하나, 자취생들이 쉬이 실패하는 요리 중 하나, 레시피를 보고 한번 따라 만들어보자.`,
            imgSrc: "images/life/cook/cardimg.jpg",
            mainImgSrc: "images/life/cook/main.jpg",
            step:[
                {
                    imgSrc:"images/life/cook/step1.jpg",
                    title:"Step1. 육수준비",
                    body:`멸치육수 : 마른팬에 멸치를 넣고 볶다가 물 4컵 다시마를 넣고 중불에 끓으면 약불로 줄여 약 10분 정도 끓인다.`,
                },
                {
                    imgSrc:"images/life/cook/step2.jpg",
                    title:"Step2. 재료손질",
                    body:`육수 끓는 동안 재료 손질-두부 호박은 약간 도톰하게 썰고 양파 청양고추 대파 송송 썬다.`,
                },
                {
                    imgSrc:"images/life/cook/step3.jpg",
                    title:"Step3. 해감",
                    body:`해감한 바지락을 준비합니다.`,
                },
                {
                    imgSrc:"images/life/cook/step4.jpg",
                    title:"Step4. 재료넣기",
                    body:`끓인 육수3컵을 냄비에 부어 바지락을 넣고 한번 끓여 조개는 건져 두고 육수는 한번 걸러 사용합니다. 걸러준 육수에 된장은 체에 밭쳐 넣어주고 쌈장 두부 마늘 양파 고춧가루를 넣고 약 3~4분 끓인다.`,
                },
                {
                    imgSrc:"images/life/cook/step5.jpg",
                    title:"Step5. 바지락",
                    body:`끓인 바지락에 약간의 육수를 부어 줍니다`,
                },
                {
                    imgSrc:"images/life/cook/step6.jpg",
                    title:"Step6. 애호박 넣기",
                    body:`애호박을 넣어 끓여줍니다`,
                },
                {
                    imgSrc:"images/life/cook/step7.jpg",
                    title:"Step7. 재료넣기",
                    body:`마지막에 건져둔 바지락 대파 청양고추를 넣어 한번 끓여주세요`,
                },
                {
                    imgSrc:"images/life/cook/step8.jpg",
                    title:"Step8. 마무리",
                    body:`뚝배기에 담아 뜨겁게 한번 끓여내고 호박은 살캉 할때 불을 꺼주세요.`,
                },
            ]
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