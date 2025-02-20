import React from "react";
import FacebookLogin from "react-facebook-login";
import { useRecoilState } from "recoil";
import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import useAuth from "../../hooks/useAuth";
const { persistAtom } = recoilPersist();

export const facebookAuthState = atom({
  key: "facebookAuth",
  default: null,
  effects_UNSTABLE: [persistAtom],
});
export default function FacebookLoginForm() {
  // const [isFacebookAuth, setIsFacebookAuth] = useRecoilState(facebookAuthState);
  // const handleFacebookCallback = (response) => {
  //   if (response?.status === "unknown") {
  //     console.error("Sorry!", "Something went wrong with facebook Login.");
  //     return;
  //   }
  //   console.log(response);
  //   setIsFacebookAuth(true);
  // };
  const{isAuthenticated,login,logout,handleFacebookCallback} = useAuth()
  return (
    <div>
      {isAuthenticated ? (
        <h1></h1>
      ) : (
        <FacebookLogin
          buttonStyle={{ padding: "6px" }}
          appId="1163251285221291"
          fields="name,email,picture"
          callback={handleFacebookCallback}
        />
      )}
    </div>
  );
}
