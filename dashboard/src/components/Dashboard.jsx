import WatchList from "./WatchList";
import Summary from "./Summary";
import Orders from "./Orders";
import Holding from "./Holding";
import Positions from "./Positions";
import Fund from "./Fund";
import App from "./App";

import { BrowserRouter,Routes, Route } from "react-router-dom";
//importing the Generalcontextprovider
import { GeneralContextProvider } from "../context/GeneralContext";

function Dashboard() {
  return (
    <div className="container-fluid px-2.5">
      <div className="row">
        <div className="col-3 px-0">
         < GeneralContextProvider>
          <WatchList />
          </GeneralContextProvider>
        </div>

        <div className="col-9 px-0" style={{ borderLeft: "1px solid #000" }}>
           <BrowserRouter>
          <Routes>
            
            <Route path="/" element={<Summary />} />
            <Route path="/summary" element={<Summary />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/holding" element={<Holding />} />
            <Route path="/positions" element={<Positions />} />
            <Route path="/funds" element={<Fund />} />
            <Route path="/app" element={<App />} />
          </Routes>
             </BrowserRouter>,
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
