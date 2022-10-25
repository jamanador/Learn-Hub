import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { createContext, useState } from "react";
import app from "../firebase/firebase.init";

const auth = getAuth(app);
export const authContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // user create function
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // user log in function

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // user profile update function

  const authInfo = { user, createUser, signIn };
  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
