import React from "react";

type CategoriesProps = {
  activeCategory: string;
  onChangeCategory: (idx: string) => void;
};

const Categories: React.FC<CategoriesProps> = ({
  activeCategory,
  onChangeCategory,
}) => {
  const categoriesNames = [
    "All",
    "Meat",
    "Vegetarian",
    "Gril",
    "Hot",
    "Closed",
  ];
  return (
    <div className="categories">
      <ul>
        {categoriesNames.map((category, index) => (
          <li
            onClick={() => onChangeCategory(`${index}`)}
            key={category}
            className={
              categoriesNames[Number(activeCategory)] === category
                ? "active"
                : ""
            }
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(Categories);
