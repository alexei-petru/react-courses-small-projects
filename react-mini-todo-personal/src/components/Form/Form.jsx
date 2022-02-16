import React from "react";
import { useState } from "react";
import "./Form.css";

function Form(props) {
  const [inputValue, setInputValue] = useState("");

  const btnAddHandler = (e) => {
    setInputValue(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;
    props.onSubmit(inputValue);
    setInputValue("");
  };

  return (
    <section className="form-outer">
      <form onSubmit={formSubmitHandler} className="form">
        <h1 className="form-title">Enter Your ToDo</h1>
        <input
          value={inputValue}
          onChange={btnAddHandler}
          className="form-input"
          type="text"
        />
        <button className="form-button" type="submit">
          Add ToDo
        </button>
      </form>
    </section>
  );
}

export default Form;
