import { createContext, useContext,useState } from "react";
import { useCookies } from "react-cookie";
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
      const [isLoggingOut, setIsLoggingOut] = useState(false);

  const FRONTEND_BASE = import.meta.env.DEV
    ? import.meta.env.VITE_FRONTEND_LOCAL
    : import.meta.env.VITE_FRONTEND_PROD;

     const API_BASE = import.meta.env.DEV
        ? import.meta.env.VITE_API_LOCAL
        : import.meta.env.VITE_API_PROD;

  const logout = async () => {
       setIsLoggingOut(true);
        try {
            // Call backend to clear the httpOnly cookie
            await axios.post(
                `${API_BASE}/logout`,
                {},
                { withCredentials: true }  // ✅ Important!
            );
            
            console.log("✅ Logged out successfully");
        } catch (err) {
            console.error("Logout error:", err);
        } finally {
            // Remove client-side cookie (if any non-httpOnly cookies exist)
            removeCookie("token", { path: "/" });
            
            // Redirect to login
            window.location.href = `${FRONTEND_BASE}/login`;
        }
    };

  return (
    <AuthContext.Provider value={{ cookies, logout,  isLoggingOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
