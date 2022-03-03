import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBNFjTC908bNrPAeXHjQ34LRM_h10Q8D_g",
  authDomain: "react-e7b79.firebaseapp.com",
  databaseURL: "https://react-e7b79-default-rtdb.firebaseio.com",
  projectId: "react-e7b79",
  storageBucket: "react-e7b79.appspot.com",
  messagingSenderId: "499965227882",
  appId: "1:499965227882:web:c6d817c452c23802442b13",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
