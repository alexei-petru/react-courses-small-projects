import React, { useEffect, useState } from "react";

import { collection, getDocs, addDoc, doc, setDoc } from "firebase/firestore";

import { db } from "../../firebase-config";
import { localPizzaArray } from "../../assets/pizzas/pizzasData";

const PizzaMenu = () => {
  const [pizzasArray, setPizzaArray] = useState([]);

  useEffect(() => {
    const getQuerrySnapshot = async () => {
      const querySnapshot = await getDocs(collection(db, "pizzas-menu"));
      const responseData = querySnapshot.docs.map((item) => item.data());
      // const { pizzas } = querySnapshot.docs[0].data();
      // const pizzaResponseArray = JSON.parse(pizzas);
      console.log(responseData);
      setPizzaArray(responseData);
    };
    getQuerrySnapshot();
  }, []);

  // useEffect(() => {
  //   const addPizzaRemote = async () => {
  //     // try {
  //     for (let i = 0; i < localPizzaArray.length; i++) {
  //       const element = localPizzaArray[i];
  //       addDoc(collection(db, "pizzas-menu"), element);
  //     }
  //   };
  //   addPizzaRemote();
  // },[]);

  return (
    <div>
      {pizzasArray.length ? (
        pizzasArray.map((item) => <p key={item.id}>{item.title}</p>)
      ) : (
        <p>array empty</p>
      )}
    </div>
  );
};

export default PizzaMenu;
