// 훅
import React, { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'

// 컴포넌트
import styled from 'styled-components'
import Header from '../components/Header'
import ButtonSubmit from '../components/ButtonSubmit'

// 리덕스
import { __getPlan, __patchCheckList } from '../redux/modules/PlanSlice'


const CheckList = () => {
    const dispatch = useDispatch();
    const { plans } = useSelector((state) => state.plans)
    const { me } = useSelector((state) => state.user)
    const { id } = useParams()
    const navigate = useNavigate();
    const [isChecked, setIsChecked] = useState(false) // 체크 여부
    const [checkedItems, setCheckedItems] = useState([])// 체크된 요소들
    const name = '저장완료';
    const content = useRef();
    const findCheckList = plans.find((item) => item._id === id)
    //useEffect 목록
    useEffect(() => {
        dispatch(__getPlan())
    }, [dispatch]);

    useEffect(() => {
        if (findCheckList) {
            const newArr = findCheckList?.checkList
            setCheckedItems([...newArr])
        }
    }, [findCheckList])

    useEffect(()=>{
        if(!me){
            navigate('/login')
        }
    },[me, navigate])
    // 쿼리스트링에 맞는 체크리스트 값 가져오기

    //보여질 데이터 목록
    const ListData = [
        {
            title: "이사일 확정",
            menu: [
                { id: 1, name: "이사업체 선정후 계약" },
                { id: 2, name: "이사할 집 점검(누수, 냉난방, 창문 등)" },
                { id: 3, name: "사용하지 않는 물품 정리" },

            ]
        },
        {
            title: "이사 1주전",
            menu: [
                { id: 4, name: "자녀 전한수속" },
                { id: 5, name: "가전/가구 폐기물 스티커 구입" },
                { id: 6, name: "전화, 은행, 인터넷, 신용카드, 우편물 등 이전신청" },
                { id: 7, name: "수도료, 전기료, 공과금 및 아파트 관리비 납부, 확인" },
                { id: 8, name: "세탁소 등 이용품목 수령 및 확인" },
                { id: 9, name: "가구/가전 이전설치업체 이용시 사전예약" },
                { id: 10, name: "엘리베이터 사용가능유무 확인 및 사용시 사전예약" },

            ]
        },
        {
            title: "이사 3일전",
            menu: [
                { id: 11, name: "이사할 집 배치도 구상 및 작성" },
                { id: 12, name: "가스차단 사전예약 (이사당일 9시)" },
                { id: 13, name: "쓰레기 봉투 준비 (50L 1~2개)" },
                { id: 14, name: "도시가스, 가스레인지 분리예약" },
                { id: 15, name: "냉장고 및 세탁기 물빼기" },
            ]
        },
        {
            title: "이사 전날",
            menu: [
                { id: 16, name: "냉장고 음식 분류하여 처리" },
                { id: 17, name: "사전제품 A/S 연락" },
                { id: 18, name: "은행잔금 확인 및 이체한도 증액" },
                { id: 19, name: "이사당일 사용물품 별도포장" },
                { id: 20, name: "이사업체 통화하여 밀정 재확인 및 변동 준비사항 점검" },
                { id: 21, name: "고가귀중품 및 이사당일 필요제품 별도보관" },
            ]
        },
        {
            title: "이사 당일",
            menu: [
                { id: 22, name: "집 청소와 비품점검" },
                { id: 23, name: "가스, 전기, 수도요금 검침 및 정산" },
                { id: 24, name: "아프트 관리비 정산" },
                { id: 25, name: "이삿짐 반출확인 및 열쇠반납" },
                { id: 26, name: "이삿짐 확인 및 이사요금 정산" },
                { id: 27, name: "가스, 전기, 수도요금 검침 및 사용량확인" },
                { id: 28, name: "전입수속 및 전학수속" },
                { id: 29, name: "임대차 계약서 확정일자" },
            ]
        }
    ]

    //이벤트 함수
    const checkHandler = (e) => {
        setIsChecked(!isChecked)
        checkedItemHandler(e.target.value, e.target.checked)
    }

    const checkedItemHandler = (id, isChecked) => {
        if (isChecked) { // 체크 되었을때
            checkedItems.push(id) // 체크시 삽입
            setCheckedItems(checkedItems)
        } else if (!isChecked && checkedItems.includes(id)) {
            setCheckedItems(checkedItems.filter((item) => item !== id))
        }
        return checkedItems;
    }

    const onSubmit = () => {
        let newArr = checkedItems.filter((item) => { return item !== undefined })
        console.log(newArr)
        dispatch(__patchCheckList({
            _id: findCheckList._id,
            checkList: newArr,
        }))
        navigate(-1)
    }

    const openHandler = (e) => {
        e.currentTarget.nextElementSibling.classList.toggle('open')
    }
    return (
        <>
            <Header />
            <Wrap>
                <TextBox>
                    <span>체크리스트</span>
                    <h1>
                        하나씩,<br />
                        천천히 준비해 보세요
                    </h1>
                </TextBox>
                {ListData.map((item, index) => (
                    <ListWrap key={index}>
                        <ListTitle onClick={openHandler}>
                            {item.title}
                            <img src={`${process.env.PUBLIC_URL}/images/toggleArrow.png`} alt="" />
                        </ListTitle>
                        <SubMenu ref={content}>
                            {item.menu.map((child) => (
                                <label key={child.id}>
                                    <input
                                        type="checkbox"
                                        checked={checkedItems.includes(child.name) ? true : false}
                                        value={child.name}
                                        onChange={(e) => checkHandler(e)}
                                    />
                                    <div>
                                        <h4>{child.name}</h4>
                                        <p>{child.name}</p>
                                    </div>
                                </label>
                            ))}
                        </SubMenu>
                    </ListWrap>
                ))}
                <div onClick={onSubmit} style={{ marginTop: "auto", marginBottom: "24px" }}>
                    <ButtonSubmit buttonName={name}></ButtonSubmit>
                </div>
            </Wrap>
        </>
    )
}

export default CheckList

const Wrap = styled.div`
    width: calc(100% - 48px);
    height: 100%;
    box-sizing: border-box;
    overflow: scroll;
    position:relative;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  &::-webkit-scrollbar {
    display: none; /* 크롬, 사파리, 오페라, 엣지 */
  }
`;

const TextBox = styled.div`
  padding-top: 86px;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 19px;
  span{
    font-size: 14px;
    line-height: 25px;
    letter-spacing: 0.5px;
    color: #666666;
  }
  
  h1{
    font-size: 26px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px;
    /* or 154% */
    letter-spacing: 0.5px;
    color: #282B49;
  }
`

const ListWrap = styled.ul`
    padding: 20px 0px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.165px;
    color: #666666;
    border-bottom: 0.5px solid #BCBCBC;
`

const ListTitle = styled.li`
    display: block;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img{
        display: block;
        width: 9px;
    }
`

const SubMenu = styled.div`
    max-height: 0;
    overflow:hidden;
    transition: max-height .3s ease;
    &.open{
        max-height: 500px;
    }
    > label {
        display: flex;
        padding: 20px 0px;

        input[type="checkbox"]{
            border: 0;
        }

        > div {
            margin-left: 22px;

            > h4{
                font-weight: 400;
                font-size: 13px;
                line-height: 18px;
                letter-spacing: -0.165px;
                color: #666666;
            }

            > p {
                font-weight: 400;
                font-size: 11px;
                line-height: 15px;
                letter-spacing: -0.165px;
                color: #999999;
            }
        }
    }
`