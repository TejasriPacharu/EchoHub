import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setUser } from "../slices/AuthSlice.ts";
import { firebaseAuth } from "../utils/FireBaseConfig.ts";
import { onAuthStateChanged } from "firebase/auth";

function useAuth() {
  const navigate = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (!currentUser) navigate.push("/");
      else {
        dispatch(
          setUser({
            uid: currentUser.uid,
            email: currentUser.email,
            name: currentUser.displayName,
          })
        );
      }
    });

    return () => unsubscribe();
  }, [dispatch, navigate]);
}

export default useAuth;
