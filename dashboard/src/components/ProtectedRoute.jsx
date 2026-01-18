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
  
  useEffect(()=>{
    const verifyCookie = async()=>{
       console.log("Cookies:", cookies);
      if(!cookies.token){
         console.log("NO TOKEN → redirecting");
        setVerified(false);
           logout();
           return ;
          }

          try{
            console.log("SENDING TOKEN TO BACKEND…");
          const {data} = await axios.post(
            "http://localhost:3002/",
            {},
            {withCredentials:true}
          );
            console.log("BACKEND RESPONSE:", data);
          const {status,user} = data;
          setVerified(status);
          return status ? toast(`Welcome`,
            {position:"top-right",}) 
            : (removeCookie("token"),window.location.href = "http://localhost:5174/login");
          }catch(err){
            setVerified(false);
            removeCookie("token");
            window.location.href = "http://localhost:5174/login";
          }
        };

    verifyCookie();
  },[cookies,navigate,removeCookie]);

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