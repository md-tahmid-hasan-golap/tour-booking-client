import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "./firebase.init";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();
const FirebaseAuthProvider = ({ children }) => {
  // set user
  const [user, setUser] = useState(null);
  // set loadding
  const [loading, setLoading] = useState(true);
  // creat user
  const creatUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign In user
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // sign in with google
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleAuthProvider);
  };
  // signOut

  const logOut = () => {
    return signOut(auth);
  };
  // on Auth Change user
  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (crueentUser) => {
      setUser(crueentUser);
      console.log(crueentUser);
    });
    return () => {
      unsuscribe();
    };
  }, []);
  const userInfo = {
    user,
    setUser,
    loading,
    setLoading,
    creatUser,
    signInWithGoogle,
    signInUser,
    logOut,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default FirebaseAuthProvider;
