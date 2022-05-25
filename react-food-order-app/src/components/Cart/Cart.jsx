import React, { useContext, useRef, useState } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import Checkout from "./Checkout/Checkout";
import CartItems from "./CartItems/CartItems";
import LoadingImg from "../UI/LoadingImg";
import DoneImg from "../UI/DoneImg/DoneImg";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [isResponseInvalid, setIsResponseInvalid] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const totalAmount = cartCtx.totalAmount.toFixed(2);
  const hastItems = cartCtx.items.length > 0;

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const closeFormHandler = () => {
    setIsCheckout(false);
  };

  const orderConfirmHandler = async (userData) => {
    setIsSubmiting(true);
    setIsResponseInvalid(false);
    setSubmitSuccess(false);

    try {
      const sendedResponse = await fetch(
        "https://linen-flux-304509-default-rtdb.europe-west1.firebasedatabase.app/orders.json",

        {
          method: "POST",
          body: JSON.stringify({
            userData: userData,
            cartItems: cartCtx.items,
          }),
        }
      );
      console.log(sendedResponse, "sendedResponse");
      if (!sendedResponse.ok) {
        console.log("error");
        throw new Error(sendedResponse.statusText);
      }
      setSubmitSuccess(true);
      cartCtx.clearCart();
    } catch (error) {
      setIsResponseInvalid(error.message);
    }
    setIsSubmiting(false);
  };

  const cartActions = (
    <div className={classes.actions}>
      <button onClick={props.onCloseCart} className={classes["button--alt"]}>
        Close
      </button>
      {hastItems && (
        <button onClick={orderHandler} className={classes.button}>
          Order
        </button>
      )}
    </div>
  );

  const cartMainContent = (
    <>
      {isCheckout ? (
        <Checkout
          onOrderConfirm={orderConfirmHandler}
          onCloseForm={closeFormHandler}
        />
      ) : (
        <CartItems />
      )}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {!isCheckout && cartActions}
    </>
  );

  const btnClose = (
    <div className={classes.actions}>
      <button onClick={props.onCloseCart} className={classes["button--alt"]}>
        Close
      </button>
    </div>
  );

  const errorMessage = (
    <p>Something went wrong, server message "{isResponseInvalid}"</p>
  );

  const doneMessage = `Your order was submited, you will be notify or called soon`;

  return (
    <Modal onCloseCart={props.onCloseCart}>
      <div className={classes["cart-wrapper"]}>
        {isSubmiting && <LoadingImg />}
        {submitSuccess && <DoneImg doneMessage={doneMessage} />}
        {isResponseInvalid && errorMessage}
        {(submitSuccess || isResponseInvalid) && btnClose}

        {!submitSuccess &&
          !isSubmiting &&
          !isResponseInvalid &&
          cartMainContent}
      </div>
    </Modal>
  );
};

export default Cart;
