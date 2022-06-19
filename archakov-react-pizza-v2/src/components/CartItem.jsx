import React from "react";
import MinusSvg from "../assets/MinusSvg";
import PlusSvg from "../assets/PlusSvg";

const CartItem = ({ price, title, countPerType, size, typeName }) => {
  return (
    <div className="cart__item">
      <div className="cart__item-img">
        <img
          className="pizza-block__image"
          src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
          alt="Pizza"
        />
      </div>
      <div className="cart__item-info">
        <h3>{title}</h3>
        <p>
          {typeName}, {size}см.
        </p>
      </div>
      <div className="cart__item-count">
        <div className="button button--outline button--circle cart__item-count-minus">
          <MinusSvg />
        </div>
        <b>{countPerType}</b>
        <div className="button button--outline button--circle cart__item-count-plus">
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
