import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../Firebase/firebase.config";

export const Authcontext = createContext(null);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const Authcontexts = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password,);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogIn =()=>{
    // setLoading(true);
     return signInWithPopup(auth, provider);
   }

  const logOut = () => {
    setLoading(true);
    signOut(auth).then(() => {
      setLoading(false);
      setUser(null);
      window.location.reload(); // Reload the page
    });
  };

  const updatUserProfile = (name,photo) =>{
    return updateProfile(auth.currentUser, {
        displayName: name, photoURL: photo
      })
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      setUser(currentuser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const autinfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
    updatUserProfile,
    googleLogIn
  };

  return (
    <Authcontext.Provider value={autinfo}>{children}</Authcontext.Provider>
  );
};

export default Authcontexts;
