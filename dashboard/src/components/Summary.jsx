
function Summary() {
  return (
    <div className="container px-5">
      <div className="row mt-5">
        
        <div>
          <div>
            <div>
              <h2 className="">Hi, User!</h2>
            </div>

            <hr />
            <div>
              <p className="mt-5 mb-5">
                <i class="fa-regular fa-clock"></i>&nbsp;&nbsp;Equity
              </p>
              <div className="row mb-5">
                <div className="col-3" id="dashboardEquity">
                  <h1>{3.74}K</h1>
                  <p>Margin available</p>
                </div>
                <div className="col-1"></div>
                <div className="col-8 mt-2" id="dashboardEquity2">
                  <p>Margin used &nbsp; {0}</p>
                  <p>Opening balance &nbsp; {3.74}K</p>
                </div>
              </div>
              <hr />
              <div>
                <p className="mt-5 mb-4">
                  <i class="fa-regular fa-credit-card"></i>&nbsp;&nbsp;Holdings
                  ({13})
                </p>
                <div className="row mb-5">
                  <div className="col-3" id="dashboardholdings">
                    <h1>
                      {1.5}K <span className="holdingsPara">+{5.2}%</span>
                    </h1>

                    <p>P&L</p>
                  </div>
                  <div className="col-1"></div>
                  <div className="col-8">
                    <p>Current Value &nbsp; {31.43}K</p>
                    <p>Investment &nbsp; {29.88}K</p>
                  </div>
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Summary;
