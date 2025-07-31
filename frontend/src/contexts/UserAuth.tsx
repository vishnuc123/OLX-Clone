import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { auth } from "../firebase/Config";
import { onAuthStateChanged, type User } from "firebase/auth";

type Child = {
    children : ReactNode
}
type AuthContextType = {
  userDetails: User | null;
};

const authContext = createContext<AuthContextType | null>(null)

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) {
    throw new Error("Error with auth provider");
  }
  return context;
};
export const AuthProvider = ({children} : Child) => {
    const [userDetails,setUserDetails] = useState<User | null>(null) 

    useEffect(() => {
        const stopListening = onAuthStateChanged(auth, (firebaseUser) => {
            setUserDetails(firebaseUser)
        })
        return () => stopListening()
    })

    return (
        <authContext.Provider value={{userDetails}}>
            {children}
        </authContext.Provider>
    )
}