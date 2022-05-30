import React, { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const Checkout = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    postal: true,
    city: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();
    const isValid = (value) => value.trim().length > 0;
    const isFiveChrLong = (value) => value.trim().length === 5;

    // user inputs verification
    // const enteredName = nameInputRef.current.value;
    // const enteredStreet = streetInputRef.current.value;
    // const enteredPostal = postalInputRef.current.value;
    // const enteredCity = cityInputRef.current.value;

    //test variant for autocomplete
    const enteredName = `name ${Date()}`;
    const enteredStreet = "street";
    const enteredPostal = "12345";
    const enteredCity = "city";

    const nameIsValid = isValid(enteredName);
    const streetIsValid = isValid(enteredStreet);
    const postalIsValid = isFiveChrLong(enteredPostal);
    const cityIsValid = isValid(enteredCity);

    setFormInputsValidity({
      name: nameIsValid,
      street: streetIsValid,
      postal: postalIsValid,
      city: cityIsValid,
    });

    const formIsValid =
      nameIsValid && streetIsValid && postalIsValid && cityIsValid;

    if (!formIsValid) {
      console.log("form incorrect", formInputsValidity);
      return;
    }

    props.onOrderConfirm({
      name: enteredName,
      street: enteredStreet,
      postal: enteredPostal,
      city: enteredCity,
    });
  };

  const userWarnMsg = (value) => <p>Please enter a valid {value}.</p>;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputsValidity.name && userWarnMsg("name")}
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {/* {formInputsValidity.street && userWarnMsg.bind(null, "street")} */}
      </div>
      <div className={classes.control}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalInputRef} />
        {/* {formInputsValidity.postal && userWarnMsg.bind(null, "postal code")} */}
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {/* {formInputsValidity.city && userWarnMsg.bind(null, "city")} */}
      </div>
      <div className={classes.actions}>
        <button onClick={props.onCloseForm} type="button">
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
