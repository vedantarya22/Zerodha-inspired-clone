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
     


    const API_BASE =
  import.meta.env.DEV
    ? import.meta.env.VITE_API_LOCAL
    : import.meta.env.VITE_API_PROD;

  const FRONTEND_BASE =
  import.meta.env.DEV
    ? import.meta.env.VITE_FRONTEND_LOCAL
    : import.meta.env.VITE_FRONTEND_PROD;

  
    useEffect(() => {
    const verify = async () => {
      try {
        const { data } = await axios.post(
          `${API_BASE}/`,
          {},
          { withCredentials: true }
        );

        console.log("VERIFY RESPONSE:", data);

        if (data.status) {
          setVerified(true);
        } else {
            console.log(" Verification failed:", data.message);
           
            setVerified(false);
           setTimeout(() => {
                    window.location.replace(`${FRONTEND_BASE}/login`);
                }, 1000);
        }
      } catch (err) {
        console.log("VERIFY ERROR:", err);
        setVerified(false);
        window.location.replace(`${FRONTEND_BASE}/login`);
      }
    };

    verify();
  }, []);

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
    
  
   return verified ? children : null;
}

export default ProtectedRoute;