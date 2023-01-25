import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'

const ModalTodo = () => {
    const [open, setOpen] = useState(true)
    const closeHandler = () =>{
        setOpen(!open)
    }
    return (
        <>
        {
            open ? <Form>
                        <label htmlFor="">제목</label>
                        <input type="text" placeholder='제목을 입력하세요.' />
                        <label htmlFor="">내용</label>
                        <input type="text" placeholder='내용을 입력하세요.' />
                        <h4>카테고리</h4>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                        <ButtonWrap>
                            <Button onClick={closeHandler}>취소</Button>
                            <Button>확인</Button>
                        </ButtonWrap>
                    </Form>
                    : null
        }
        </>
    )
}

export default ModalTodo

const Form = styled.form`
    padding: 24px;
    border-radius: 18px;
    background: #F9F9F9;
    > input {
        display: block;
        background: #FFFFFF;
        border: 1px solid #EDEDED;
        border-radius: 10px;
        width: 100%;
        padding: 12px;
        box-sizing: border-box;
        margin: 11px 0px 24px 0px;

        &:placeholder{
            font-weight: 400;
            color: #D1D1D1;
        }
    }

    > label {
        font-weight: 400;
        font-size: 14px;
        letter-spacing: 1px;
        color: #666666;
    }

    >h4 {
        font-weight: 400;
        font-size: 14px;
        letter-spacing: 1px;
        color: #666666;
    }

    >ul{
        display: flex;
        justify-content: space-between;
        margin-top: 11px;
        >li {
            width: 42px;
            height: 42px;
            background-color: red;
        }
    }
`

const ButtonWrap = styled.div`
    width: 100%;
    display: flex;
    gap: 9px;
    margin-top: 35px;

    button:nth-child(1){
        border: 1px solid #666666;
        border-radius: 100px;
        background-color: #ffffff;
        color: #666666;
        transition: all 0.3s;
        &:hover{
            background-color: #666666;
            color:#ffffff;
        }
    }

    button:nth-child(2){
        border: none;
        border-radius: 100px;
        background: #F9A76F;
        color: #ffffff;
    }
`

const Button = styled.button`
    width: 50%;
    display: block;
    padding: 8px 0px;
    border-radius: 100px;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.3px;
    cursor: pointer;
`