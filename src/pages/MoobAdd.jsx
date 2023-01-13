import React, { useState } from "react";
import AreaCategory from "../components/category/AreaCategory";


const MoobAdd = ({ list, city, subCategory }) => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(true);
  const [categoryAnimation, setCategoryAnimation] = useState(true);

  const openCategory = () => {
    setIsCategoryOpen(true);
  }

  const closeCategory = () => {
    setCategoryAnimation(false);
    setTimeout(() => {
      setIsCategoryOpen(false);
      setCategoryAnimation(true);
    }, 100);
  }
  return (
    <>
      <div className="SelectCategory" 
        onMouseEnter={openCategory}
      >
        <span>{city}</span>
        <span>{subCategory}</span>
        {isCategoryOpen && (
          <AreaCategory 
            list={list}
            closeCategory={closeCategory}
            categoryAnimation={categoryAnimation}
          />
        )}
      </div>
    </>
  );
};

export default MoobAdd;
