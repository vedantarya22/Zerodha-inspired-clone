import React, { useState, useEffect,useContext } from "react";
import { Link } from "react-router-dom";
import GeneralContext from "./GeneralContext";
import axios from "axios";
function Orders() {

  
  const [allOrders, setAllOrders] = useState([]);
   const API_BASE = import.meta.env.DEV
    ? import.meta.env.VITE_API_LOCAL
    : import.meta.env.VITE_API_PROD;

  const fetchOrders = async () => {
    try {
      const res = await axios.get(`${API_BASE}/allOrders`, {
        withCredentials: true,
      });
      setAllOrders(res.data);
    } catch (err) {
      console.log("Fetch orders failed:", err?.response?.data || err.message);
    }
  };

   useEffect(() => {
    fetchOrders();
      const handler = () => fetchOrders();

      window.addEventListener("order-created", handler); //calls fetchOrders when order created

  return () => window.removeEventListener("order-created", handler);
  }, []);

  return (
    //      <div className="orders">
    //   <div className="no-orders">
    //     <p>You haven't placed any orders today</p>

    //     <Link to={"/"} className="btn">
    //       Get started
    //     </Link>
    //   </div>
    // </div>

    <>
      <div className="title">Executed Orders ({allOrders.length})</div>
      {allOrders.length === 0 ? (
        <div className="orders">
          <div className="no-orders">
            <p>You haven't placed any orders today</p>

            <Link to={"/"} className="btn">
              Get started
            </Link>
          </div>
        </div>
      ) : (
        <div className="order-table">
          <table>
            <tr>
              <th>Time</th>
              <th>Type</th>
              <th>Instrument</th>
              <th>Qty</th>
              <th>Avg.price</th>
              <th>Status</th>
            </tr>

            {allOrders.map((stock, index) => {
              const orderTime = new Date(stock.time).toLocaleTimeString(
                "en-GB",
              );
              return (
                <tr key={index}>
                  <td>{orderTime}</td>
                  <td>{stock.mode}</td>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.price}</td>
                  <td>
                    <label
                      style={{
                        backgroundColor: "rgba(0,255,0,0.2)",
                        color: "green",
                        fontWeight: "400",
                        padding: "10px",
                      }}
                    >
                      COMPLETE
                    </label>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      )}
    </>
  );
}

export default Orders;
