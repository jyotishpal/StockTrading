// import { holdings } from "../data/data";
import { useState,useEffect } from "react";
import axios from "axios";
import { ChartGrap } from "./ChartGraph";
function Holding() {
 const[allholdings ,setAllholdings]=useState([]);
 useEffect(()=>{
 axios.get("https://stocktrading-backend.onrender.com")
 .then((res)=>{
  // console.log(res.data);
  setAllholdings(res.data);
 })
 },[])
 //for chart creating the labels
const labels = allholdings.map((stock) => stock.name);
 const data={
  labels,
  datasets: [
    {
      label: 'stock Price',
      data: allholdings.map((stock) => stock.price),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
 ]}
  return (
    <div className="container px-5 ">
      <div className="row mt-5">
        <div>
          <div>
            <h4 className="mb-4">Holdings ({allholdings.length})</h4>
            <table className="table table-bordered table-striped text-center">
              <thead>
                <tr>
                  <th colSpan="2">Instrument</th>
                  <th>Qty</th>
                  <th>Avg cost</th>
                  <th>LTP</th>
                  <th>Cur. val</th>
                  <th>P&L</th>
                  <th>Net chg.</th>
                  <th>Day chg.</th>
                </tr>
              </thead>
              <tbody>
                {allholdings.map((stock, index) => {
                  const currentValue = stock.price * stock.qty;
                  const isProfit = currentValue - stock.avg * stock.qty >= 0.0;
                  const profClass = isProfit ? "profit" : "loss";
                  const dayClass = stock.isLoss ? "loss" : "profit";

                  return (
                    <tr key={index}>
                      <td colSpan="2">{stock.name}</td>
                      <td>{stock.qty}</td>
                      <td>{stock.avg.toFixed(2)}</td>
                      <td>{stock.price.toFixed(2)}</td>
                      <td>{currentValue.toFixed(2)}</td>
                      <td className={profClass}>
                        {(currentValue - stock.avg * stock.qty).toFixed(2)}
                      </td>
                      <td className={profClass}>{stock.net}</td>
                      <td className={dayClass}>{stock.day}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="mt-5" id="footerHodings">
              <div className="mt-5">
                <h1>
                  {2975} <span style={{ fontSize: "15px" }}>.{55}</span>
                </h1>
                <p>Total investment</p>
              </div>
              <div className="mt-5">
                <h1>
                  {31428} <span style={{ fontSize: "15px" }}>.{95}</span>
                </h1>
                <p>Current value</p>
              </div>
              <div className="mt-5">
                <h1>
                  {" "}
                  {1553.4} <span style={{ fontSize: "15px" }}>+{5.2}%</span>
                </h1>
                <p>P&L</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ChartGrap data={data} />
    </div>
  );
}

export default Holding;
