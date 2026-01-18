import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import HomePage from './landing_page/home/HomePage.jsx'
import {BrowserRouter,Routes,Route}  from "react-router-dom";
import Signup from "./landing_page/signup/Signup.jsx"
import AboutPage from "./landing_page/about/AboutPage.jsx"
import ProductsPage from "./landing_page/products/ProductsPage.jsx"
import PricingPage from "./landing_page/pricing/PricingPage.jsx"
import SupportPage from "./landing_page/support/SupportPage.jsx"
import Footer from './landing_page/Footer.jsx'
import Navbar from './landing_page/Navbar.jsx'
import NotFound from './landing_page/NotFound.jsx'
import "react-toastify/dist/ReactToastify.css";
import Login from './landing_page/login/Login.jsx'



createRoot(document.getElementById('root')).render(
 <BrowserRouter>
  <Navbar/>

 <Routes>
    
  <Route path="/" element={<HomePage/>}></Route>
  <Route path="/signup" element={<Signup/>}></Route>
  <Route path="/login" element={<Login/>}></Route>
  <Route path="/about" element={<AboutPage/>}></Route>
  <Route path="/products" element={<ProductsPage/>}></Route>
  <Route path="/pricing" element={<PricingPage/>}></Route>
  <Route path="/support" element={<SupportPage/>}></Route>
  <Route path="*" element={<NotFound/>}></Route>
 </Routes>
 <Footer/>
 </BrowserRouter>
)
