import React from 'react';
import BuyActionWindow from "./BuyActionWindow";
import { useState ,useEffect} from 'react';
import axios from 'axios';

const GeneralContext = React.createContext({ // context is piece of item shared by multiple components
    openBuyWindow : (stock) =>{},
    closeBuyWindow : ()=>{},
    allOrders: [],
    fetchOrders: () => {},
    API_BASE: "",
});

export const GeneralContextProvider =(props)=> {

    const API_BASE = import.meta.env.DEV
    ? import.meta.env.VITE_API_LOCAL
    : import.meta.env.VITE_API_PROD;

  const [allOrders, setAllOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const res = await axios.get(`${API_BASE}/allOrders`, {
        withCredentials: true,
      });
      setAllOrders(res.data);
     
    } catch (err) {
      console.log("fetchOrders error:", err?.response?.data || err.message);
    }
  };

  
  useEffect(() => {
    fetchOrders();
  }, []);

    const [isBuyWindowOpen,setIsBuyWindowOpen] = useState(false);
    const [selectedStockUID,setSelectedStockUID] = useState(null);

    const handleOpenBuyWindow = (stock) =>{
        setIsBuyWindowOpen(true);
        setSelectedStockUID(stock);
    };

    const handleCloseBuyWindow = ()=>{
        setIsBuyWindowOpen(false);
        setSelectedStockUID(null);
    };

    return (  
        <GeneralContext.Provider
        value={{
            openBuyWindow:handleOpenBuyWindow,
            closeBuyWindow:handleCloseBuyWindow,
            allOrders,
            fetchOrders,
            API_BASE,
        }}
        >
            {props.children}
            {isBuyWindowOpen && <BuyActionWindow stock ={selectedStockUID}  />}

        </GeneralContext.Provider>
    );
};

export default GeneralContext;