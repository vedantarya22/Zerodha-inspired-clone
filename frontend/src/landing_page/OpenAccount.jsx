import React from 'react';

function OpenAccount() {
    return ( 
        <div className="container p-5 mb-5">
      <div className="row text-center">
        
        <h2 className="my-3">Open a Zerodha account</h2>
        <p className='text-muted'>
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
        </p>
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

export default OpenAccount;