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
