import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.REACT_PIZZA_APP_API_KEY,
  authDomain: process.env.REACT_PIZZA_AUTH_DOMAIN,
  projectId: process.env.REACT_PIZZA_APP_PROJECT_ID,
  storageBucket: process.env.REACT_PIZZA_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_PIZZA_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_PIZZA_APP_MESSAGING_APP_ID,
  measurementId: process.env.REACT_PIZZA_APP_MESSAGING_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
