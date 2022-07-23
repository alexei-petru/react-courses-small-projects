import { addDoc, collection, setDoc, doc, deleteDoc } from "firebase/firestore";
import { useEffect } from "react";
import { db } from "../firebase-config";

export const useAddRemoveFirebase = (
  collectionName,
  arrayOfObjects,
  action
) => {
  useEffect(() => {
    const postItems = async () => {
      try {
        for (let i = 0; i < arrayOfObjects.length; i++) {
          const element = arrayOfObjects[i];
          let docRef =
            action === "ADD"
              ? setDoc(
                  doc(db, collectionName, element.id + element.title),
                  element
                )
              : action === "DELETE"
              ? deleteDoc(doc(db, collectionName, element.id + element.title))
              : null;
          console.log(action, docRef.id);
        }
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    };
    postItems();
  }, []);
};

// useAddRemoveFirebase("pizzas-menu", localPizzaArray, "ADD");
