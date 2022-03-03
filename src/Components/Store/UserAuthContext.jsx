import React, { createContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import { auth } from "../../FIrebase/Firebase";

export const userContext = createContext({
  currentUser: {},
  error: "",
  userstate: null,
  register: (registerEmail, registerPassword) => {},
  login: (loginEmail, loginPassword) => {},
  logout: () => {},
});

export function UserContextProvider(props) {
  const [user, setUser] = useState({});
  const [userstate, setUserState] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      
    });
  }, []);

  const register = async (registerEmail, registerPassword) => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  const login = async (loginEmail, loginPassword) => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
      setUser(user);
      setUserState(true);
    } catch (error) {
      setError(error.message);
    }

    console.log(user);

    // console.log(user?._tokenResponse?.idToken);
    // localStorage.setItem("key", user?._tokenResponse?.idToken);
    // console.log(localStorage.getItem("key"));
  };

  const logout = async () => {
    await signOut(auth);
    setUserState(false);
  };

  const context = {
    userStatus: userstate,
    currentUser: user,
    error: error,
    register: register,
    login: login,
    logout: logout,
  };
  return (
    <userContext.Provider value={context}>
      {props.children}
    </userContext.Provider>
  );
}

// export default userContext;
