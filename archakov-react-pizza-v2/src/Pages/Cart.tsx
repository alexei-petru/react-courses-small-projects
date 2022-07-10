import { useDispatch, useSelector } from "react-redux";
import ArrowLeftSvg from "../assets/ArrowLeftSvg";
import CartSvg from "../assets/CartSvg";
import TrashSvg from "../assets/TrashSvg";
import CartItem from "../components/CartItem";
import { clearCart } from "../Redux/slices/cartSlice";
import { RootState } from "../Redux/store";
import { currentCurrency } from "../variables/variables";

const Cart = () => {
  const { totalItemsCount, totalSum, items } = useSelector(
    (state: RootState) => state.cartReducer
  );
  const dispatch = useDispatch();

  const clearCartHandler = () => {
    dispatch(clearCart());
  };

  return (
    <div className="container container--cart">
      <div className="cart">
        <div className="cart__top">
          <h2 className="content__title">
            <CartSvg />
            Cart
          </h2>
          <div onClick={clearCartHandler} className="cart__clear">
            <TrashSvg />
            <span>Clear Cart</span>
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
              Total pizzas: <b>{totalItemsCount} pcs.</b>
            </span>
            <span>
              Total Sum: <b>{totalSum}{currentCurrency}</b>
            </span>
          </div>
          <div className="cart__bottom-buttons">
            <a
              href="/"
              className="button button--outline button--add go-back-btn"
            >
              <ArrowLeftSvg />
              <span>Back</span>
            </a>
            <div className="button pay-btn">
              <span>Pay now</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
