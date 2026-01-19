import { createContext,useContext } from "react";
import { useCookies } from "react-cookie";

export const AuthContext = createContext();

export const AuthProvider = ({children}) =>{
      const [cookies, setCookie, removeCookie] = useCookies(["token"]);

       const FRONTEND_BASE =
  import.meta.env.DEV
    ? import.meta.env.VITE_FRONTEND_LOCAL
    : import.meta.env.VITE_FRONTEND_PROD;

       const logout = () => {
         removeCookie("token", { path: "/" });
         window.location.href =`${FRONTEND_BASE}/login`;
        };

        return(
             <AuthContext.Provider value={{ cookies, logout }}>
      {children}
    </AuthContext.Provider>
        );
         
}


export const useAuth = () => useContext(AuthContext);