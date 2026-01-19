import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import GeneralContext from "./GeneralContext"; // IMPORTANT: named import
import "./BuyActionWindow.css";

function BuyActionWindow({ stock}) {

  const generalContext = useContext(GeneralContext); 
  const unitPrice = stock.price || 0; // price per quantity
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(unitPrice);
  const {API_BASE} = generalContext;

    if (!stock) return null;

  const handleBuyClick = async() => {
    try{

      console.log("buy button clicked");

      await axios.post(`${API_BASE}/newOrder`, {
        name: stock.name,
        qty: stockQuantity,
        price: stockPrice,
        mode: "BUY",
      },
      {withCredentials: true}
    );

  
      window.dispatchEvent(new Event("order-created"));

      generalContext.closeBuyWindow();
    }catch(err) {
       console.log("Order failed:", err?.response?.data || err.message);
    alert("Order failed! Check console.");
    }
  };

  const handleCancelClick = () => {
    generalContext.closeBuyWindow();
  };

   const handleQtyChange = (e) => {
    const qty = Number(e.target.value);
    setStockQuantity(qty);
    setStockPrice(qty*unitPrice);
  };

   const handlePriceChange = (e) => {
    const price = Number(e.target.value);
    setStockPrice(price);
    setStockQuantity(Math.floor(price/unitPrice));
    
  };


  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
       <div className="title">{stock.name}</div>
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={handleQtyChange}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={handlePriceChange}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required 140.65</span>
        <div>
          <button className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </button>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BuyActionWindow;
