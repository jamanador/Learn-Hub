import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
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
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  // user create function
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // user log in function

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // user profile update function
  const updateUserProfile = (name, photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  // user signOut function

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  // sign in with google

  const providerLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  // // send email verification inforce to user
  // const verifyEmail = () => {
  //   return sendEmailVerification(auth.currentUser);
  // };

  //
  const gitHubSign = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  // user observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // if (currentUser == null || currentUser.emailVerified) {
      //   setUser(currentUser);
      // }
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);
  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    createUser,
    signIn,
    updateUserProfile,
    logOut,
    providerLogin,
    gitHubSign,
  };
  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
