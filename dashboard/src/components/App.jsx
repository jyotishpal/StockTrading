function App() {
  return (
    <div className="container px-5">
      <div className="row mt-5">
        <div>
          <div>
            <div className="row ">
              <div className="col-3 mb-5 " style={{ border: "1px solid gray" }}>
                <a href="https://kite.zerodha.com/">
                  <img
                    style={{ width: "50%" }}
                    src="/images/Kite.png"
                    alt="kite"
                  />
                  <h4>Zerodha Kite - Trade & Invest</h4>
                </a>
              </div>
              <div className="col-1"></div>
              <div className="col-3 mb-5" style={{ border: "1px solid gray" }}>
                <a href="https://coin.zerodha.com/">
                  <img
                    style={{ width: "50%" }}
                    src="/images/coin.webp"
                    alt="coin"
                  />
                  <h4>Coin by Zerodha - Mutual funds</h4>
                </a>
              </div>
              <div className="col-1"></div>
              <div className="col-3 mb-5 " style={{ border: "1px solid gray" }}>
                <a href="https://zerodha.com/varsity/">
                  <img
                    style={{ width: "80%" }}
                    src="/images/Varsity.png"
                    alt="varsity"
                  />
                  <h4 className="mt-3">Varsity by Zerodha</h4>
                </a>
              </div>
              <div className="col-1"></div>
              <div className="col-3" style={{ border: "1px solid gray" }}>
                <a href="https://pulse.zerodha.com/">
                  {" "}
                  <img
                    style={{ width: "50%" }}
                    src="/images/pulse.png"
                    alt="pulse"
                  />
                  <h4>Pulse by Zerodha</h4>
                </a>
              </div>
              <div className="col-1"></div>
              <div className="col-3" style={{ border: "1px solid gray" }}>
                <a href="https://www.angelone.in/">
                  {" "}
                  <img
                    style={{ width: "50%" }}
                    src="/images/AngleOne.png"
                    alt="angleOne"
                  />
                  <h4>Angel One</h4>
                </a>
              </div>
              <div className="col-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
