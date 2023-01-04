import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  updateProfile,
  GithubAuthProvider,
  sendPasswordResetEmail,
} from "firebase/auth";
import app from "../../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

const ContextProvider = ({ children }) => {
  const [loader, setLoader] = useState(true);

  const [user, setUser] = useState({});

  //create user
  const userSignUp = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //login user
  const userLogin = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //sign in with google
  const loginWithGoogle = () => {
    setLoader(true);
    return signInWithPopup(auth, googleProvider);
  };

  //sign in with google
  const loginWithGitHub = () => {
    setLoader(true);
    return signInWithPopup(auth, gitHubProvider);
  };

  //get current user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false);
    });
    return () => unsubscribe();
  }, []);

  //user sign out
  const userSignOut = () => {
    setLoader(true);
    return signOut(auth);
  };

  //update user
  const updateUser = (name) => {
    return updateProfile(auth.currentUser, { displayName: name });
  };

  //reset email
  const resetPasswordEmail = (email) => {
    sendPasswordResetEmail(auth, email);
  };

  const authInfo = {
    userLogin,
    userSignUp,
    loginWithGoogle,
    userSignOut,
    resetPasswordEmail,
    user,
    loader,
    updateUser,
    loginWithGitHub,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default ContextProvider;
