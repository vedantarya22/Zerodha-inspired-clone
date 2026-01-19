import { useEffect,useState } from "react";
import axios from "axios";
import {Navigate} from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import React from 'react';
import {useCookies} from "react-cookie";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
function ProtectedRoute({children}) {
  
   const navigate = useNavigate();
  const [cookies,removeCookie] = useCookies(["token"]);
    const [verified, setVerified] = useState("loading");
     const {  logout } = useAuth();


    const API_BASE =
  import.meta.env.DEV
    ? import.meta.env.VITE_API_LOCAL
    : import.meta.env.VITE_API_PROD;

  const FRONTEND_BASE =
  import.meta.env.DEV
    ? import.meta.env.VITE_FRONTEND_LOCAL
    : import.meta.env.VITE_FRONTEND_PROD;

  
  useEffect(()=>{
    const verifyCookie = async()=>{
       console.log("Cookies:", cookies);
       console.log("Token:", cookies.token);
      if(!cookies.token){
         console.log("NO TOKEN → redirecting");
        setVerified(false);
           logout();
           return ;
          }

          try{
            console.log("SENDING TOKEN TO BACKEND…");
           const { data } = await axios.post(
          `${API_BASE}/`,
          {},
          { withCredentials: true }
        );
            console.log("BACKEND RESPONSE:", data);
          const {status,user} = data;
          setVerified(status);
          return status ? toast(`Welcome`,
            {position:"top-right",}) 
            : (removeCookie("token"),window.location.href = `${FRONTEND_BASE}/login`);
          }catch(err){
            setVerified(false);
            removeCookie("token");
            window.location.href = `${FRONTEND_BASE}/login`;
          }
        };

    verifyCookie();
  },[cookies.token]);

    if (verified === "loading") {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "24px",
          fontWeight: "bold",
        }}
      >
        Loading…
      </div>
    );
  }
    
  
  return children;
}

export default ProtectedRoute;