// import { positions } from "../data/data";
import { useState,useEffect } from "react";
import axios from 'axios';
function Positions() {
  const[allpositions , setAllpositions]=useState([]);
  useEffect(()=>{
    axios.get("https://stocktrading-backend.onrender.com/allpositions")
    .then((res)=>{
      setAllpositions(res.data);
    })
  })
  return (
    <div className="container px-5">
      <div className="row mt-5">
        <div>
          <div>
            <h4 className=" ">Positions ({allpositions.length})</h4>
            <hr />
            <table className="table  text-center">
              <thead>
                <tr>
                  <th colSpan="3">Product</th>
                  <th>Instrument</th>
                  <th>Qty</th>
                  <th>Avg</th>
                  <th>LTP</th>
                  <th>P&L</th>
                  <th>chg.</th>
                </tr>
              </thead>

              <tbody>
                {allpositions.map((stock, index) => {
                  const curValue = stock.price * stock.qty;
                  const isProfit = curValue - stock.avg * stock.qty >= 0.0;
                  const profClass = isProfit ? "profit" : "loss";
                  const dayClass = stock.isLoss ? "loss" : "profit";
                  return (
                    <tr key={index}>
                      <td colSpan="3">{stock.product}</td>
                      <td>{stock.name}</td>
                      <td>{stock.qty}</td>
                      <td>{stock.avg.toFixed(2)}</td>
                      <td>{stock.price.toFixed(2)}</td>
                      <td className={profClass}>
                        {(curValue - stock.avg * stock.qty).toFixed(2)}
                      </td>
                      <td className={dayClass}>{stock.day}</td>
                    </tr>
                  );
                })}

                {/* <tr>
                    <td colSpan="3"></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>Total</td>
                    <td>{208}</td>
                    <td></td>
                </tr> */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Positions;
