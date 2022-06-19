import React from "react";
import { useSelector } from "react-redux";
import ArrowLeftSvg from "../assets/ArrowLeftSvg";
import CartSvg from "../assets/CartSvg";
import TrashSvg from "../assets/TrashSvg";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { totalItemsCount, totalSum, items } = useSelector(
    (state) => state.cartReducer
  );
  console.log("items", items);
  return (
    <div className="container container--cart">
      <div className="cart">
        <div className="cart__top">
          <h2 className="content__title">
            <CartSvg />
            Корзина
          </h2>
          <div className="cart__clear">
            <TrashSvg />
            <span>Очистить корзину</span>
          </div>
        </div>
        <div className="cart__content__items">
          {items.map((item) => (
            <CartItem
              key={`${item.id + item.size + item.typeName}`}
              {...item}
            />
          ))}
        </div>
        <div className="cart__bottom">
          <div className="cart__bottom-details">
            <span>
              Всего пицц: <b>{totalItemsCount} шт.</b>
            </span>
            <span>
              Сумма заказа: <b>{totalSum} ₽</b>
            </span>
          </div>
          <div className="cart__bottom-buttons">
            <a
              href="/"
              className="button button--outline button--add go-back-btn"
            >
              <ArrowLeftSvg />
              <span>Вернуться назад</span>
            </a>
            <div className="button pay-btn">
              <span>Оплатить сейчас</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
