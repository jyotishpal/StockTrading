import { Tooltip, Grow } from "@mui/material"; //will be used for the hover
import { useState } from "react";
import { watchlist } from "../data/data";
import { KeyboardArrowUp, KeyboardArrowDown, Spa, MoreHoriz, BarChartOutlined } from "@mui/icons-material";
//importing for generalcontext
import { useContext } from "react";
import GeneralContext from "../context/GeneralContext"; 
import { DoughnutChart } from "./DoughnutChart";

function WatchList() {
  const labels=watchlist.map((stock)=>stock.name);
  const data={
    labels,
    datasets:[
     {
      label: 'stock Price',
      data: watchlist.map((stock)=>stock.price),
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
    
  }

  //this is the part of the chart
//   export const data = {
//   labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//   datasets: [
  //   {
  //     label: '# of Votes',
  //     data: [12, 19, 3, 5, 2, 3],
  //     backgroundColor: [
  //       'rgba(255, 99, 132, 0.5)',
  //       'rgba(54, 162, 235, 0.5)',
  //       'rgba(255, 206, 86, 0.5)',
  //       'rgba(75, 192, 192, 0.5)',
  //       'rgba(153, 102, 255, 0.5)',
  //       'rgba(255, 159, 64, 0.5)',
  //     ],
  //     borderColor: [
  //       'rgba(255, 99, 132, 1)',
  //       'rgba(54, 162, 235, 1)',
  //       'rgba(255, 206, 86, 1)',
  //       'rgba(75, 192, 192, 1)',
  //       'rgba(153, 102, 255, 1)',
  //       'rgba(255, 159, 64, 1)',
  //     ],
  //     borderWidth: 1,
  //   },
  // ],
// };
  return (
    <div className="container-fluid px-0">
      <div className="row">
        <div>
          <div style={{ border: "1px solid black" }}>
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
              className="search"
            />
            <span className="counts"> {watchlist.length}/50</span>
          </div>

          <ul className="list-unstyled px-2">
            {watchlist.map((stock, index) => (
              <WatchListItem stock={stock} key={index} />
            ))}
          </ul>
        </div>
      </div>
      <DoughnutChart data={data}/>
    </div>
  );
}

export default WatchList;

//this is the watchlistitem
const WatchListItem = ({ stock }) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  const handleMouseEnter = (e) => {
    setShowWatchlistActions(true);
  };

  const handleMouseLeave = (e) => {
    setShowWatchlistActions(false);
  };

  return (
    <li className="list" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" /> //marterialUIicn
          ) : (
            <KeyboardArrowUp className="up" /> //material ui icon
          )}
          <span className="price">{stock.price}</span>
        </div>
      </div>
        {showWatchlistActions && <WatchListActions uid={stock.name}/>}
    </li>
  
  );
};

const WatchListActions=({uid})=>{
  const { openBuywindow } = useContext(GeneralContext);
     return(
      <span>
          <Tooltip
            title="Buy (B)"
            placement="top"
            arrow
            slots={{ transition: Grow }}
            >
              <button className="buy" onClick={() => openBuywindow(uid)} >
                Buy
              </button>
          </Tooltip>
          &nbsp; 
          <Tooltip
            title="sell(s)"
            placement="top"
            arrow
            slots={{ transition: Grow }}
            >
              <button className="sell">
              sell
              </button>
          </Tooltip>
          &nbsp; 
          <Tooltip
            title="Analytics(A)"
            placement="top"
            arrow
            slots={{ transition: Grow }}
            >
              <button className="action">
              <BarChartOutlined className="icon"/>
              </button>
          </Tooltip>
          &nbsp; 
          <Tooltip
            title="More"
            placement="top"
            arrow
            slots={{ transition: Grow }}
            >
              <button className="action">
              <MoreHoriz className="icon"/>
              </button>
          </Tooltip>
      </span>
     )
}