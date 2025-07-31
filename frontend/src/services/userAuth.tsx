import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase/Config";

export const handleLogin = async (onClose: () => void) => {
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    console.log("user logged in", user);
    onClose(); 
  } catch (error) {
    console.log("error while login", error);
  }
};
