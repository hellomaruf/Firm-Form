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
  const [loading, setLoading] = useState(true)
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    setLoading(true)
    return signOut(auth)
  }
  useEffect(() => {
   const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      SetUser(currentUser);
     console.log("observing current user in useEffect", currentUser);
     setLoading(false)
   });
    return () => {
      unSubscribe()
    }
  }, []);
  const authInfo = { user, createUser, signInUser, logOut, loading };
  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
}

export default AuthProvider;
