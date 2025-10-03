import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav
      class="navbar navbar-expand-lg bg-body-tertiary p-4"
      style={{
        position: "fixed",
        width: "100%",
        backgroundColor: "#FAFAFA",
        borderBottom: "1px solid #e1e1e1",
      }}
    >
      <div class="container-fluid">
        <Link class="navbar-brand" to="/" style={{textDecoration:"none"}}>
          <img
            style={{ width: "40%" }}
            src="media/images/logo.svg"
            alt="NavbarImage"
          />
        </Link>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul
            class="navbar-nav lign-items-center mb-lg-0"
            style={{ marginLeft: "30%", fontSize: "20px" }}
          >
            <li class="nav-item px-1 py-2" style={{ marginRight: "15px" }}>
              <Link class="nav-Link active" aria-current="page" to="/signup"style={{textDecoration:"none"}}>
                SignUp
              </Link>
            </li>
            <li class="nav-item px-1 py-2" style={{ marginRight: "15px" }}>
              <Link class="nav-Link active" to="/about" style={{textDecoration:"none"}}>
                About
              </Link>
            </li>
            <li class="nav-item px-1 py-2" style={{ marginRight: "15px" }}>
              <Link class="nav-Link active" to="/products" style={{textDecoration:"none"}}>
                Products
              </Link>
            </li>
            <li class="nav-item px-1 py-2" style={{ marginRight: "15px" }}>
              <Link class="nav-Link active" to="/pricings" style={{textDecoration:"none"}}>
                Pricings
              </Link>
            </li>
            <li class="nav-item px-1 py-2" style={{ marginRight: "15px" }}>
              <Link class="nav-Link active" to="/support" style={{textDecoration:"none",textAlign:"center"}}>
                Support
              </Link>
            </li>
            <li class="nav-item" style={{ marginRight: "15px" }}>
              <div class="dropdown">
                <button
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{
                    border: "none",
                    background: "transparent",
                    paddingTop: "10px",
                  }}
                >
                  <i class="fa-solid fa-bars"></i>
                </button>
                <ul class="dropdown-menu dropdown-menu-end mt-1">
                  <li>
                    <a class="dropdown-item" href="#">
                      Kite <p className="text-muted">(Trading plateform)</p>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Console <p className="text-muted">(BackOffice)</p>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Kite Connect <p className="text-muted">(Trading APIs)</p>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Coin <p className="text-muted">(Mutual funds)</p>{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
