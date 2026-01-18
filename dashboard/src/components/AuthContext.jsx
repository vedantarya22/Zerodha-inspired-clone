import { createContext,useContext } from "react";
import { useCookies } from "react-cookie";

export const AuthContext = createContext();

export const AuthProvider = ({children}) =>{
      const [cookies, setCookie, removeCookie] = useCookies(["token"]);

       const logout = () => {
         removeCookie("token", { path: "/" });
         window.location.href = "http://localhost:5174/login";
        };

        return(
             <AuthContext.Provider value={{ cookies, logout }}>
      {children}
    </AuthContext.Provider>
        );
         
}


export const useAuth = () => useContext(AuthContext);