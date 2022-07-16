import { addDoc, collection ,setDoc} from "firebase/firestore";

export const useAddItemsToFirebase = (collectionName, arrayOfObjects) => {
  useEffect(() => {
    const addPizzaRemote = async () => {
      // try {
      for (let i = 0; i < localPizzaArray.length; i++) {
        const element = localPizzaArray[i];
        setDoc(doc(db, "pizzas-menu"), element);
      }

      //     const docRef = await addDoc(
      //       collection(db, "pizzas-menu"),
      //       ...localPizzaArray
      //     );
      //     console.log("Document written with ID: ", docRef.id);
      //   } catch (e) {
      //     console.error("Error adding document: ", e);
      //   }
      // };
    };
    // addPizzaRemote();
  }, []);
};
