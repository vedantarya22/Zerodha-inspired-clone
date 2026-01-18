import React from 'react';
import BuyActionWindow from "./BuyActionWindow";
import { useState } from 'react';

const GeneralContext = React.createContext({ // context is piece of item shared by multiple components
    openBuyWindow : (stock) =>{},
    closeBuyWindow : ()=>{},
});

export const GeneralContextProvider =(props)=> {
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
        }}
        >
            {props.children}
            {isBuyWindowOpen && <BuyActionWindow stock ={selectedStockUID} />}

        </GeneralContext.Provider>
    );
};

export default GeneralContext;