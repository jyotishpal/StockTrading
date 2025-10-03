import { Link } from "react-router-dom";
import { useState } from "react";
import "./user.css";

function Menu() {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };
  const handleProfileClick = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  //const Logoutfuction
  const logout=()=>{
    window.location.href = "https://stocktrading-forntend.onrender.com"; 
  }

  const menuClass = "menu";
  const activeMenuClass = "menu selected";
  return (
    <div className="container-fluid px-0">
      <div className="row align-items-center" id="menu">
        <div className="col-2">
          <Link to="/summary" onClick={() => handleMenuClick(0)}>
            <img id="menuImage" src="/images/Kite.png" alt="DashboardLogo" />
          </Link>
        </div>

        <div className="col-10 ">
          <ul id="menuLink" className="no-bullets d-flex gap-4 m-0 p-0">
            <li>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/summary"
                onClick={() => handleMenuClick(1)}
              >
                <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                  Dashboard
                </p>
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/orders"
                onClick={() => handleMenuClick(2)}
              >
                <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                  Orders
                </p>
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/holding"
                onClick={() => handleMenuClick(3)}
              >
                <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                  Holdings
                </p>
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/positions"
                onClick={() => handleMenuClick(4)}
              >
                <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                  Positions
                </p>
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/funds"
                onClick={() => handleMenuClick(5)}
              >
                <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>
                  Funds
                </p>
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/app"
                onClick={() => handleMenuClick(6)}
              >
                <p className={selectedMenu === 6 ? activeMenuClass : menuClass}>
                  Apps
                </p>
              </Link>
            </li>

            <div id="users" className="mt-2">
              <button
                className="btn-user"
                onClick={handleProfileClick} // toggle sidebar
              >
                <i className="fa-solid fa-circle-user"></i> User
              </button>
            </div>
          </ul>
        </div>
      </div>

      <div className={`profile-sidebar ${isProfileOpen ? "open" : ""}`}>
        <h4>User Profile</h4>
        <p>Setting</p>
        <p>Security & Privacy</p>
        <button onClick={logout}>LogOut</button>
      </div>
    </div>
  );
}

export default Menu;
