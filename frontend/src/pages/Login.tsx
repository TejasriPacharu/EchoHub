import React from "react";
import {
  EuiProvider,
  EuiFlexGroup,
  EuiFlexItem,
  EuiImage,
  EuiSpacer,
  EuiText,
  EuiTextColor,
  EuiButton,
  EuiPanel,
} from "@elastic/eui";
import animation from "../assets/animation.gif";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { firebaseAuth, userRef } from "../utils/FireBaseConfig.ts";
import { useHistory } from "react-router-dom";
import { query, where, getDocs, addDoc } from "firebase/firestore";
import { useAppDispatch } from "../app/hooks.ts";
import { setUser } from "../slices/AuthSlice.ts";

function Login() {
  const navigate = useHistory();

  const dispatch = useAppDispatch();

  onAuthStateChanged(firebaseAuth, (currentUser)=> {
      if(currentUser) navigate.push("/")
  })
  const login = async () => {
    const provider = new GoogleAuthProvider();
    const {
      user: { displayName, email, uid },
    } = await signInWithPopup(firebaseAuth, provider);

    if (email) {
      const firestoreQuery = query(userRef, where("uid", "==", uid));
      const fetchedUsers = await getDocs(firestoreQuery);
      if (fetchedUsers.docs.length === 0) {
        await addDoc(userRef, {
          uid,
          name: displayName,
          email,
        });
      }
    }

    dispatch(setUser({ uid, name: displayName, email }));
    navigate.push("/");
  };
  return (
    <EuiProvider colorMode="dark">
      <EuiFlexGroup
        alignItems="center"
        justifyContent="center"
        style={{ width: "100vw", height: "100vw" }}
      >
        <EuiFlexItem grow={false}>
          <EuiPanel paddingSize="xl">
            <EuiFlexGroup justifyContent="center" alignItems="center">
              <EuiFlexItem>
                <EuiImage src={animation} alt=""></EuiImage>
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiSpacer size="xs" />
                <EuiText textAlign="center" grow={false}>
                  <h3>
                    <EuiTextColor>One Platform to </EuiTextColor>
                    <EuiTextColor color="#0b5cff">connect</EuiTextColor>
                  </h3>
                </EuiText>
                <EuiSpacer size="l" />
                <EuiButton fill onClick={login}>
                  Log in with Google
                </EuiButton>
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiPanel>
        </EuiFlexItem>
      </EuiFlexGroup>
    </EuiProvider>
  );
}

export default Login;
