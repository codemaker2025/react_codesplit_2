import { useRecoilState } from "recoil";
import { authState } from "../store/authState";

export default function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useRecoilState(authState);

  const login = (res) => {
    if (!res || !res.email) {
      console.error("Invalid response from Google Login", res);
      return;
    }

    const userInfo = {
      name: res.name,
      email: res.email,
      picture: res.picture,
    };

    console.log(typeof userInfo);
    

    setIsAuthenticated(userInfo);
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.clear();
  };
  const handleFacebookCallback = (response) => {
    if (response?.status === "unknown") {
      console.error("Sorry!", "Something went wrong with facebook Login.");
      return;
    }
    console.log(response);
    setIsAuthenticated(response);
  };
  return {
    isAuthenticated,
    login,
    logout,
    handleFacebookCallback
  };
}
