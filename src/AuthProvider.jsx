import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./firebase.config";

export const authContext = createContext(null);

function AuthProvider({ children }) {
  const [user, SetUser] = useState(null);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    return signOut(auth)
  }
  useEffect(() => {
   const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      SetUser(currentUser);
      console.log("observing current user in useEffect", currentUser);
   });
    return () => {
      unSubscribe()
    }
  }, []);
  const authInfo = { user, createUser, signInUser, logOut };
  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
}

export default AuthProvider;
