import React from "react";

function Pricing() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <h2 className="mb-3">Unbeatable pricing</h2>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a  style={{textDecoration:"none"}} href="">See pricing<i class="fa-solid fa-arrow-right"></i></a>
        </div>
        <div className="col-2"></div>
        <div className="col-6">
           <div className="row text-center p-3">
            <div className="col border p-3">
                <h1><i class="fa-solid fa-indian-rupee-sign"></i>0</h1>
                <p>Free equity delivery and <br />mutual funds </p>
            </div>
            <div className="col border p-3">
                 <h1><i class="fa-solid fa-indian-rupee-sign"></i>20</h1>
                <p>Intraday and F&O </p>
            </div>
           </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
