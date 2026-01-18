import React from "react";
function Universe() {
  return (
    <div className="container mt-5 p-5" >
      <div className="row text-center ">
        <h2>The Zerodha Universe</h2>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p-3 mt-5">
          <img src="\public\media\smallcaseLogo.png" alt="" />
          <p className="text-small text-muted mt-3">
            Thematic investing platform
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="\public\media\streakLogo.png"
            alt=""
            style={{ width: "35%" }}
          />
          <p className="text-small text-muted mt-3">
            Systematic trading platform
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="\public\media\sensibullLogo.svg"
            alt=""
            style={{ width: "50%" }}
          />
          <p className="text-small text-muted mt-3">Option trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="\public\media\zerodhaFundhouse.png"
            alt=""
            style={{ width: "50%" }}
          />
          <p className="text-small text-muted mt-3">Asset management venture</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="\public\media\goldenpiLogo.png"
            alt=""
            style={{ width: "45%" }}
          />
          <p className="text-small text-muted mt-3">Bonds trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="\public\media\dittoLogo.png"
            alt=""
            style={{ width: "35%" }}
          />
          <p className="text-small text-muted mt-3">Insurance</p>
        </div>
        <button
          style={{
            width: "20%",
            margin: " 0 auto",
            color: "white",
            backgroundColor: "#387ED1",
          }}
          className="p-2 btn fs-5 mb-5 mt-3"
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;
