import React from "react";
import { useDispatch } from "react-redux";
import MinusSvg from "../assets/MinusSvg";
import PlusSvg from "../assets/PlusSvg";
import { addCartItem, decreaseCartItem } from "../Redux/slices/cartSlice";

const CartItem = ({
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
    dispatch(addCartItem({ id, size, typeName }));
  };

  const decreaseCartItemHandler = () => {
    dispatch(decreaseCartItem({ id, size, typeName }));
  };

  return (
    <div className="cart__item">
      <div className="cart__item-img">
        <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
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
