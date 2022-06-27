import React, { useState } from "react";

type CategoriesProps = {
  activeCategory: number;
  onChangeCategory: (idx: number) => void;
};

const Categories: React.FC<CategoriesProps> = ({
  activeCategory,
  onChangeCategory,
}) => {
  const categoriesNames = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  return (
    <div className="categories">
      <ul>
        {categoriesNames.map((category, index) => (
          <li
            onClick={() => onChangeCategory(index)}
            key={category}
            className={
              categoriesNames[activeCategory] === category ? "active" : ""
            }
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
