import {Link, useContext} from 'react-router-dom';
import GeneralContext from '../context/GeneralContext';
import "./BuyActionWindow.css";
import { useState } from 'react';
import axios from "axios";
const BuyActionWindow=({uid})=>{
    const[stockQuantity,setStockQuantity]=useState(1);
    const[stockPrice,setStocPrice]=useState(0.0);
      const { closeBuyWindow } = useContext(GeneralContext);
//handle byclick

   const handleBuyClick=()=>{
    axios.post("https://stocktrading-backend.onrender.com/newOrder",{
        name:uid,
        qty:stockQuantity,
        price:stockPrice,
        mode:"buy",
    })
   closeBuyWindow();
   }

    const handleCancelClick=()=>{
       closeBuyWindow();
    }

    return(
       <div className="buy-window-container" id="buy-window" draggable="true">

          <div className="regular-order">
            <div className="inputs">
                <fieldset>
                    <legend>Qty.</legend>
                    <input 
                    type="number"
                     name='qty' 
                     id='qty'
                     onChange={(e)=>setStockQuantity(e.target.value)}
                     value={stockQuantity}
                     />
                </fieldset>
                <fieldset>
                    <legend>Price</legend>
                    <input 
                    type="number"
                     name='price' 
                     id='price'
                      step="0.05" 
                      onChange={(e)=>setStocPrice(e.target.value)}
                     value={stockPrice}
                      />
                </fieldset>

            </div>
          </div>
          <div className="buttons">
            <span>Margin required rupee 140.65</span>
            <div>
               <button className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </button>
                <Link to="" className='btn btn-grey' onClick={handleCancelClick}>Cancel</Link>
            </div>
          </div>
        </div>
    )
}
export default BuyActionWindow;
