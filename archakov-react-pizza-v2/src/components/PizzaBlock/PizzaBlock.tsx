import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addCartItem } from "../../Redux/slices/cartSlice";

type PizzaBlockProps = {
  id: number;
  imageUrl: string;
  title: string;
  price: number;
  sizes: number[];
};

const PizzaBlock: React.FC<PizzaBlockProps> = ({
  id,
  imageUrl,
  title,
  price,
  sizes,
}) => {
  const typeNames = ["тонкое", "традиционное"];
  const [activeType, setActiveType] = useState(typeNames[0]);
  const [activeSize, setActiveSize] = useState(sizes[0]);

  const countPerId = useSelector(
    (state: any) => state.cartReducer.countById[id]
  );

  const dispatch = useDispatch();

  const addItemToCartHandler = () => {
    const addedItem = {
      id,
      title,
      imageUrl,
      price,
      typeName: activeType,
      size: activeSize,
      countPerType: 1,
    };
    dispatch(addCartItem(addedItem));
  };

  return (
    <div className="pizza-block">
      <Link to={`/pizza/${id}`}>
        <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      </Link>
      <h4 className="pizza-block__title">{title}</h4>
      <div className="pizza-block__selector">
        <ul>
          {typeNames.map((type) => (
            <li
              onClick={() => setActiveType(type)}
              key={type}
              className={activeType === type ? "active" : ""}
            >
              {type}
            </li>
          ))}
        </ul>
        <ul>
          {sizes.map((size) => (
            <li
              onClick={() => setActiveSize(size)}
              key={size}
              className={activeSize === size ? "active" : ""}
            >
              {size}
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} ₽</div>
        <div
          onClick={addItemToCartHandler}
          className="button button--outline button--add"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          {countPerId && <i>{countPerId}</i>}
        </div>
      </div>
    </div>
  );
};

export default PizzaBlock;
