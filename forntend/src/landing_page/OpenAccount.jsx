import { useNavigate } from "react-router-dom";
function OpenAccount() {
  const navigate=useNavigate();
    return ( 
        <div className="container mt-3 p-5">
            <div className="row text-center">
              <h1 className="mt-3 mb-3">Open a Zerodha account</h1>
              <p className="text-muted mb-3">Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
              <button className="p-1 btn btn-primary fs-5 mb-5" style={{width:"20%",margin:"0 auto"}}
              onClick={()=>{navigate("/signup")}}
              >Sign Up for free</button>
            </div>

        </div>
     );
}

export default OpenAccount;