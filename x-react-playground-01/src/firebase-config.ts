import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_PIZZA_API_KEY,
  authDomain: process.env.REACT_APP_PIZZA_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PIZZA_PROJECT_ID,
  storageBucket: process.env.REACT_APP_PIZZA_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_PIZZA_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_PIZZA_MESSAGING_APP_ID,
  measurementId: process.env.REACT_APP_PIZZA_MESSAGING_MEASUREMENT_ID,
};

export const firebaseAppInstance = initializeApp(firebaseConfig);
export const analytics = getAnalytics(firebaseAppInstance);

export const db = getFirestore(firebaseAppInstance);
