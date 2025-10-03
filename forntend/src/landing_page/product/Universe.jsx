import { useNavigate } from "react-router-dom";
function Universe() {
  const navigate=useNavigate();
  return (
    <div className="container p-5">
      <div className="row text-center mb-5">
        <p className="fs-5 mb-5">
          Want to know more about our technology stack? Check out the{" "}
          <a href="#" style={{ textDecoration: "none" }}>
            Zerodha.tech
          </a>{" "}
          blog.
        </p>
        <h1 className="mt-3 fs-3 text-muted mb-3">The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div className="row text-center mt-5 mb-5">
        <div className="col p-3">
          <div className="mt-4 mb-5">
           <a href="#" style={{textDecoration:"none",color: "#999999"}}><img className="mb-3 " style={{width:"60%"}} src="media/images/zerodhaFundhouse.png" alt="UniverseImage" />
            <p>
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
            </a> 
          </div>
          <div className="mt-3 mb-5">
             <a href="#" style={{textDecoration:"none",color: "#999999"}}><img className="mb-3 " style={{width:"60%"}} src="media/images/streakLogo.png" alt="UniverseImage" />
            <p>
              Systematic trading platform that allows you to create and backtest
              strategies without coding.
            </p>
            </a>
          </div>
        </div>
        <div className="col p-3">
          <div className="mt-3 mb-5">
            <a href="#" style={{textDecoration:"none",color: "#999999"}}><img className="mb-5" src="media/images/sensibullLogo.svg" alt="UniverseImage" style={{width:"60%"}} />
            <p >
              Options trading platform that lets you create strategies, analyze
              positions, and examine data points like open interest, FII/DII,
              and more.
            </p>
            </a>
          </div>
          <div className="mt-3 mb-5">
            <a href="#" style={{textDecoration:"none",color: "#999999"}}><img className="mb-4 mt-2" style={{width:"60%"}} src="media/images/smallcaseLogo.png" alt="UniverseImage" />
            <p>
              Thematic investing platform that helps you invest in diversified
              baskets of stocks on ETFs.
            </p>
            </a>
          </div>
        </div >
        <div className="col p-3">
          <div className="mt-3 mb-5">
            <a href="#" style={{textDecoration:"none",color: "#999999"}}><img className="mb-4 " style={{width:"60%"}} src="media/images/goldenpiLogo.png" alt="UniverseImage" />
            <p>
              Investment research platform that offers detailed insights on
              stocks, sectors, supply chains, and more.
            </p>
            </a>
          </div>
          <div className="mt-3 mb-5">
           <a href="#" style={{textDecoration:"none", color: "#999999" }}> <img className="mb-3 mt-2" style={{width:"60%"}} src="media/images/dittoLogo.png" alt="UniverseImage" />
            <p>
              Personalized advice on life and health insurance. No spam and no
              mis-selling. Sign up for free
            </p>
            </a>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <button className="p-2 btn btn-primary fs-5 mb-5" style={{width:"20%",margin:"0 auto"}}
         onClick={()=>{navigate("/signup")}}
        >Sign Up for free </button>
      </div>
    </div>
  );
}

export default Universe;
