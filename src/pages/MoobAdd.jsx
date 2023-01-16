import React from "react";
import styled from "styled-components";
import RegionCategory from "../components/category/RegionCategory";
import {AREACATEGORIES} from '../components/category/AREACATEGORIES';

const MoobAddPlus = () => {
  return (
    <Wrap>
      {AREACATEGORIES.map((item) => {
          return(
            <>
              <RegionCategory
                key={item.id}
                title={item.name}
                subcategory={item.subcategories}
              >
              </RegionCategory>
            </>
          );
        })
      }
    </Wrap>
  )
};

const Wrap = styled.div`
  width:100%;
  margin-top:15px;
  padding:0 24px;
  box-sizing: border-box;
  overflow-y: hidden;
`;

export default MoobAddPlus;
