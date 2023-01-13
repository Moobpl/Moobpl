import React, { useState } from "react";
import { useNavigate} from "react-router-dom";
import styled from "styled-components";
import { AREACATEGORIES } from "./AREACATEGORIES";

const AreaCategory = ({ list, closeCategory, categoryAnimation }) => {
  const [currentCity, setCurrentCity] = useState(1);

  const subCategories = AREACATEGORIES.find(
    category => category.id === currentCity
  ).subcategories;

  const navigate = useNavigate();

  const moveToCategory = id => {
    navigate(`/${id}`);
  }

  return (
    <S.AreaCategory>
      <S.Cities>
        {AREACATEGORIES.map(city => {
          return(
            <div
              key={city.id}
              onMouseEnter={() => setCurrentCity(city.id)}
              isSelected={currentCity === city.id}
            >
              <span>{city.name}</span>
              {currentCity === city.id && (
                <span>
                </span>
              )}
            </div>
          );
        })
        }
      </S.Cities>
      <S.SubCategories>
        {subCategories.map(subCategory => {
          return(
            <div
              key={subCategory.subCategoryId}
              isSelected={parseInt(list) === subCategory.subCategoryId}
              onClick={() => moveToCategory(subCategory.subCategoryId)}
            >
              {subCategory.name}
            </div>
          );
        })}
      </S.SubCategories>
    </S.AreaCategory>
  );
};

const S = {
  AreaCategory: styled.div`
    height: 555px;
    background-color: #fbfbfc;
    border: none;
    color: black;
  `,
  Cities: styled.ul`
    width: 168px;
    height: 100%;
    padding: 23px 10px 0 36px;
  `,
  SubCategories: styled.ul`
    width: 302px;
    height: 100%;
    padding: 23px 0 0 36px;
  `,
  Category: styled.li`
    width: 100%;
    height: 27px;
    margin-bottom: 5px;
    font-size: 13px;
    font-weight: 100;
    cursor: pointer;
  `,
};


export default AreaCategory;
