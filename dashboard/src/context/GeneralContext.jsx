import { useState } from "react";
import BuyActionWindow from "../components/BuyActionWindow";
import { createContext } from "react";

//creating the context
const GeneralContext=createContext({
    openBuywindow:(uid)=>{},
    closeBuyWindow:()=>{},
});

export const GeneralContextProvider=(props)=>{
    const [isBuyWindowOpen,setIsBuyWindowOpen]=useState(false);
    const [selectedStockUID,setSelectedStockUID]=useState("");

    //method for closing and opening the window
   const handleOpenBuyWindow = (uid) => {
  setIsBuyWindowOpen(true);
  setSelectedStockUID(uid);
};

   const handleCloseBuyWindow = () => {
  setIsBuyWindowOpen(false);
  setSelectedStockUID("");
};

    return(
        <GeneralContext.Provider
        value={{
            openBuywindow:handleOpenBuyWindow,
            closeBuyWindow:handleCloseBuyWindow,
        }}
        >
       {props.children}

       {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID}/>}
        </GeneralContext.Provider>
    )
}

export default GeneralContext;
