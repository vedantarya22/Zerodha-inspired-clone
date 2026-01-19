import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function Login() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };
  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

    const API_BASE = import.meta.env.DEV
  ? import.meta.env.VITE_API_LOCAL
  : import.meta.env.VITE_API_PROD;

const DASHBOARD_BASE = import.meta.env.DEV
  ? import.meta.env.VITE_DASHBOARD_LOCAL
  : import.meta.env.VITE_DASHBOARD_PROD;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
         `${API_BASE}/login`,
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      console.log(data);
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          window.location.href = `${DASHBOARD_BASE}/`;
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (err) {
      console.log(err);
    }

    setInputValue({
      ...inputValue,
      email: "",
      password: "",
    });
  };

  return (
    <>
      <div className="container mt-5 mb-5 " style={{ width: "60%" }}>
        <div className="text-center mb-5">
          <h2>Open a free demat and trading account online</h2>
          <h5 className="text-muted">
            Start investing brokerage free and join a community of 1.6+ crore
            investors and traders
          </h5>
        </div>

        <div className="row">
          <div className="col">
            <img src="\media\account_open.svg" alt="" />
          </div>
          <div className="col">
            <h3>Login Account</h3>
            <p className="text-muted">Or track your existing application</p>

            {/* SIGNUP FORM */}

            <form action="" onSubmit={handleSubmit}>
              <div class="form-floating mb-3 mt-3 ">
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  name="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={handleOnChange}
                />
                <label for="email">Email address</label>
              </div>
              <div class="form-floating">
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={handleOnChange}
                />
                <label for="password">Password</label>
              </div>

              <button
                type="submit"
                class="btn btn-primary btn-lg mt-3"
                style={{ width: "70%" }}
              >
                Login
              </button>

              <p className="mt-2">
                Don't have an account? <Link to={"/signup"}>Signup</Link>
              </p>
            </form>
            <ToastContainer />
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
