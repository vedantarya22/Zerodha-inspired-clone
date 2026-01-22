import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import { CookiesProvider } from "react-cookie";
import { AuthProvider } from "./components/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CookiesProvider>
      <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/*"
            element={
                <Home />
            }
          />
        </Routes>
      </BrowserRouter>
      </AuthProvider>
    </CookiesProvider>
  </StrictMode>
);
