import React, { Suspense } from "react";
import Loadable from "react-loadable";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import "./scss/app.scss";

function App() {
  const PizzaPage = React.lazy(
    () => import(/* webpackChunkName: "PizzaPage" */ "./Pages/PizzaPage")
  );

  const Cart = Loadable({
    loader: () => import(/* webpackChunkName: "Cart" */ "./Pages/Cart"),
    loading: () => <div>Loading...</div>,
  });

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Routes>
            <Suspense fallback={<div>Loading...</div>}>
              <Route path="/" element={<Home />} />
              <Route path="cart" element={<Cart />} />
              <Route path="/pizza/:id" element={<PizzaPage />} />
              <Route path="*" element={<NotFound />} />
            </Suspense>
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default App;
