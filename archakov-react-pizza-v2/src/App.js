import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import "./scss/app.scss";

export const SearchContext = React.createContext("");

function App() {
  const [searchedValue, setSearchedValue] = useState("");

  return (
    <SearchContext.Provider value={{ searchedValue, setSearchedValue }}>
      <div className="wrapper">
        <Header
          searchedValue={searchedValue}
          setSearchedValue={(value) => setSearchedValue(value)}
        />
        <div className="content">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </div>
    </SearchContext.Provider>
  );
}
export default App;
