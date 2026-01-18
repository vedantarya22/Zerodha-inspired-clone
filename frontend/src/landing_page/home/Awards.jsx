import React from "react";

function Awards() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-5">
          <img src="\media\largestBroker.svg" alt="" />
        </div>

        <div className="col-6 p-5">
          <h1 className="mt-3 fs-02">Largest stock broker in India</h1>
          <p>2+ million Zerodha clients contribute to over 15% of all retial order volumes in daily by trading and investing in:</p>
          <div className="row mt-5">
            <div className="col-6">
              <ul>
                <li>
                  <p>Future and options</p>
                </li>
                <li>
                  <p>Commodity derivatives</p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  <p>Stocks * IPOs</p>
                </li>
                <li>
                  <p>Direct mutual funds</p>
                </li>
                <li>
                  <p>Bonds and government securities</p>
                </li>
              </ul>
            </div>
          </div>
              <img src="\media\pressLogos.png" alt="press logos" className="mt-2" style={{width:"95%"}} />
        </div>
      </div>
    </div>
  );
}

export default Awards;
