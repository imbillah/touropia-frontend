import initilizeFirebase from "../firebase/config";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";

initilizeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading , setIsLoading] =useState(true)
  const auth = getAuth();

  //google signin
  const googleSignInHandler = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };
  // update user info
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false)
    });
  }, []);

  //user logout
  const logOut = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };
  return {
    user,
    setUser,
    isLoading,
    auth,
    googleSignInHandler,
    logOut,
  };
};

export default useFirebase;
