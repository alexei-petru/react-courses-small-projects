import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import MinusSvg from "../assets/MinusSvg";
import PlusSvg from "../assets/PlusSvg";
import { addCartItem, decreaseCartItem } from "../Redux/slices/cartSlice";

type CartItemProps = {
  id: string;
  price: number;
  title: string;
  imageUrl: string;
  countPerType: number;
  size: number;
  typeName: string;
};

const CartItem: React.FC<CartItemProps> = ({
  id,
  price,
  title,
  imageUrl,
  countPerType,
  size,
  typeName,
}) => {
  const dispatch = useDispatch();

  const increaseCartItemHandler = () => {
    dispatch(
      addCartItem({ id, size, typeName, price, title, imageUrl, countPerType })
    );
  };

  const decreaseCartItemHandler = () => {
    dispatch(
      decreaseCartItem({
        id,
        size,
        typeName,
        price,
        title,
        imageUrl,
        countPerType,
      })
    );
  };

  return (
    <div className="cart__item">
      <div className="cart__item-img">
        <Link to={`/pizza/${id}`}>
          <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
        </Link>
      </div>
      <div className="cart__item-info">
        <h3>{title}</h3>
        <p>
          {typeName}, {size}см.
        </p>
      </div>
      <div className="cart__item-count">
        <div
          onClick={decreaseCartItemHandler}
          className="button button--outline button--circle cart__item-count-minus"
        >
          <MinusSvg />
        </div>
        <b>{countPerType}</b>
        <div
          onClick={increaseCartItemHandler}
          className="button button--outline button--circle cart__item-count-plus"
        >
          <PlusSvg />
        </div>
      </div>
      <div className="cart__item-price">
        <b>{price * countPerType} ₽</b>
      </div>
      <div className="cart__item-remove">
        <div className="button button--outline button--circle">
          <PlusSvg />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
