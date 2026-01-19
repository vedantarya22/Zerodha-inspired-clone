import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img
          src="\media\homeHero.png"
          alt="Hero Image"
          className="mb-5"
        />
        <h2 className="mt-3">Invest in Everything</h2>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>

        <Link to ="/signup">
        <button
          style={{
            width: "20%",
            margin: " 0 auto",
            color: "white",
            backgroundColor: "#387ED1",
          }}
          className="p-2 btn fs-5 mb-5"
        >
          Sign up for free
        </button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
