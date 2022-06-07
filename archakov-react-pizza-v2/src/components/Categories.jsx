import React, { useState } from "react";

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState(false);
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
        {categoriesNames.map((category) => (
          <li
            onClick={() => setActiveCategory(category)}
            key={category}
            className={activeCategory === category ? "active" : ""}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
