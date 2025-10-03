import Menu from "./Menu";

function TopBar() {
  return (
    <div className="container-fluid">
      <div className="row">
     
        <div className="col-3 mt-2" id="topbar">
          <p className="mt-3">
            NIFTY 
            <span  style={{ color: "red" }}>
              {100.2}
            </span>
          </p>
          <p className="mt-3">
            SENSEX 
            <span style={{ color: "red" }}>
              {100.2}
            </span>
          </p>
        </div>

        
        <div className="col-9">
          <Menu />
        </div>
      </div>
    </div>
  );
}

export default TopBar;
