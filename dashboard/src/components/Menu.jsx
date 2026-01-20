import React from 'react';
import { useState } from 'react';
import {Link} from "react-router-dom";
import '../index.css'
import { useAuth } from "./AuthContext";

function Menu() {

    const [selectedMenu,setSelectedMenu] = useState(0);
    const [isProfileDropdownOpen,setIsProfileDropdownOpen] = useState(false);
   const { logout, isLoggingOut } = useAuth();
    const handleMenuClick =(index)=>{
        setSelectedMenu(index);
    }

    const handleProfileClick = ()=>{
        setIsProfileDropdownOpen(!isProfileDropdownOpen);
    }

     const handleLogout = async () => {
        setIsLoggingOut(true);
        await logout();
        // No need to set isLoggingOut to false because page will redirect
    };
    const menuClass = "menu";
    const activeMenuClass = "menu selected";

    return ( 
        
        <div className="menu-container">
            <img src="\public\logo.png" alt="kite logo"  style={{width:"50px"}}/>
           
           <div className="menus">
            <ul>
                <li>
                    <Link to="/" style={{textDecoration:"none"}} onClick={()=>handleMenuClick(0)}>
                    <p className={selectedMenu===0 ? activeMenuClass:menuClass}>Dashboard</p>
                    </Link>
                    
                </li>
                <li>
                    
                    <Link to="/orders" style={{textDecoration:"none"}} onClick={()=>handleMenuClick(1)}>
                    <p className={selectedMenu===1 ? activeMenuClass:menuClass}>Orders</p>
                    </Link>
                </li>
                <li>
                   <Link to="/holdings" style={{textDecoration:"none"}} onClick={()=>handleMenuClick(2)}>
                    <p className={selectedMenu===2 ? activeMenuClass:menuClass}>Holdings</p>
                    </Link>
                </li>
                <li>
                    <Link to="/positions" style={{textDecoration:"none"}} onClick={()=>handleMenuClick(3)}>
                    <p className={selectedMenu===3 ? activeMenuClass:menuClass}>Positions</p>
                    </Link>
                </li>
                <li>
                    <Link to="/funds" style={{textDecoration:"none"}} onClick={()=>handleMenuClick(4)}>
                    <p className={selectedMenu===4 ? activeMenuClass:menuClass}>Funds</p>
                    </Link>
                </li>
                <li>
                    <Link to="/apps" style={{textDecoration:"none"}} onClick={()=>handleMenuClick(5)}>
                    <p className={selectedMenu===5 ? activeMenuClass:menuClass}>Apps</p>
                    </Link>
                </li>
            </ul>
            <hr />
            <div className="profile" onClick={handleLogout}>
                <div className="avatar">ZU</div>
                <p className='username'> {isLoggingOut ? "LOGGING OUT..." : "LOGOUT"}</p>
            </div>
            {isProfileDropdownOpen}
           </div>
        </div>
     );
}

export default Menu;