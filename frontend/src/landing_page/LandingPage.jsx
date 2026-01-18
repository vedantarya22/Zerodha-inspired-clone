// import React from 'react';
// import { useEffect,useState } from 'react';
// import {useCookies} from "react-cookie";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";

// function LandingPage() {

//      const navigate = useNavigate();
//      const [cookies, removeCookie] = useCookies([]);

//     useEffect(()=>{
//         const verifyCookie = async()=>{
//             if(!cookies.token){
//                 navigate("/login")
//               }
//               const {data} = await axios.post(
//                 "http://localhost:3002/",
//                 {},
//                 {withCredentials:true}
//               );
//               const {status,user} = data;
//                return status
//         ? toast(`Hello ${user}`, {
//             position: "top-right",
//           })
//         : (removeCookie("token"), navigate("/login"));
//     };
//     verifyCookie();
// },[cookies,navigate,removeCookie]);    
//     const Logout = ()=>{
//         removeCookie("token");
//         navigate("/signup");
//     }
//     })

//     return ( 
//         <>
        

        
//         </>
//      );
// }

// export default LandingPage;