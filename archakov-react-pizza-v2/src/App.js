import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import "./scss/app.scss";

function App() {
  const [searchedValue, setSearchedValue] = useState("");

  return (
    <div className="wrapper">
      <Header
        searchedValue={searchedValue}
        setSearchedValue={(value) => setSearchedValue(value)}
      />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home searchedValue={searchedValue} />} />
            <Route path="cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default App;
