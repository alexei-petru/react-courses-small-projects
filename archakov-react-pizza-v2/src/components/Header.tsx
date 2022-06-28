import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import CartSvg from "../assets/CartSvg";
import pizzaLogo from "../assets/pizza-logo.svg";
import Search from "./Search/Search";

const Header = () => {
  const { totalItemsCount, totalSum } = useSelector(
    (state: any) => state.cartReducer
  );

  const location = useLocation();

  return (
    <div className="header">
      <div className="container">
        <div className="header__logo">
          <Link to={"/"}>
            <img width="38" src={pizzaLogo} alt="Pizza logo" />
          </Link>
          <div>
            <h1>React Pizza</h1>
            <p>самая вкусная пицца во вселенной</p>
          </div>
          <Search />
        </div>
        <div className="header__cart">
          {location.pathname !== "/cart" && (
            <Link to="cart" className="button button--cart">
              <span>{totalSum} ₽</span>
              <div className="button__delimiter"></div>
              <CartSvg />
              <span>{totalItemsCount}</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;