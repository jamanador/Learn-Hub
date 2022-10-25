import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.init";

const auth = getAuth(app);
export const authContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const googleProvider = new GoogleAuthProvider();

  // user create function
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // user log in function

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // user profile update function
  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };
  // user signOut function

  const logOut = () => {
    return signOut(auth);
  };
  // sign in with google

  const providerLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // user observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const authInfo = {
    user,
    createUser,
    signIn,
    updateUserProfile,
    logOut,
    providerLogin,
  };
  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
