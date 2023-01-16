import React, {useState, useRef} from 'react';
import styled from "styled-components";

const RegionCategory = ({id, title, subcategory}) => {
  const [active, setActive] = useState("");
  const [height, setHeight] = useState("0px");
  const content = useRef(null);
  const list = useRef(null);
  const toggle = () => {
        setActive( active === "" ? "active" : "" );
        setHeight( active === "active" ? "0px" : `${content.current.scrollHeight}px` );
    };
  return (
    <AccItem className={`item${id} ${active}`}>
        <RegionTab data-index={id} onClick={()=>toggle(id)} ref={list}>
            <p>{id} {title}</p>
        </RegionTab>

        <SubRegTab
              ref={content}
              style={{height : `${height}`}}
        > 
            {subcategory.map((data)=>{
                return(
                  <div>
                    {data.name}
                  </div>
                );
              })
            }
        </SubRegTab>
    </AccItem>
  );
};



const AccItem = styled.div`
  width:100%; 
  max-width:768px;
  margin:0 auto;
  text-align:left; 
  .content{
      
  }
  
`;

const RegionTab = styled.button`
  position:relative;
  width:100%;
  font-size:14px;
  text-align:left;
  border: none;
  color:#666;
  background-color:#fff;
  border-radius: 14px;
  padding: 21px 0px 21px 13px;
  margin-bottom:23px;
`;

const SubRegTab = styled.div`
  overflow:hidden;height:0;transition: height .3s ease;
  
      > div{
        padding:13px 12px;
        background-color:#faf3ef;
        border-radius: 14px;
        font-size:14px;
        color:#7e7e7e;
        margin-bottom:14px;
      }
      &.active{
      background-color:#fff;
      .content{
          height:auto;
      }
  }
`
export default RegionCategory;
