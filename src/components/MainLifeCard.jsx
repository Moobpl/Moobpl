import React from 'react'
import styled from 'styled-components'

const MainLifeCard = () => {
    const datas = [{
        id: "생활정보",
        disc: "힘내자"
    },{
        id: "생활정보",
        disc: "힘내자"
    },{
        id: "생활정보",
        disc: "힘내자"
    }]

    return (
        <Wrap>
            {datas.map((data) =>
                <CardWrap>
                    <div>
                        <div>
                            <img src="" alt="" />
                        </div>
                        <h4>{data.id}</h4>
                        <p>{data.disc}</p>
                    </div>
                </CardWrap>
            )}
        </Wrap>
    )
}

export default MainLifeCard

const Wrap = styled.div`
    
`

const CardWrap = styled.div`
    width: 248px;
    background-color: #fff;
    box-shadow: 10px 24px 54px rgba(0, 0, 0, 0.04);
    border-radius: 14px;
    padding: 10px;
    box-sizing: border-box;
    > div {
        display: flex;
        > div{
            width: 60px;
            height: 60px;
            border-radius: 14px;
            background-color: red;
        }
    }
`