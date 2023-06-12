import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../Firebase/firebase.config";

export const Authcontext = createContext(null);
const auth = getAuth(app);

const Authcontexts = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email,password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password)
  }

  const signIn = (email,password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);
  }

  const logOut = () =>{
    setLoading(true);
    return signOut(auth);
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      setUser(currentuser);
      setLoading(false);
    });
    return unsubscribe();
  }, []);
  const autinfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut
  };

  return (
    <Authcontext.Provider value={autinfo}>{children}</Authcontext.Provider>
  );
};

export default Authcontexts;
