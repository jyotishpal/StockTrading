function Fund() {
  return (
    <div className="container px-5">
      <div className="row mt-5">
        <div>
          <div>
            <div className="" id="fundHero">
              <p className="mt-3">Instant zero-cost fund transfers with UPI</p>
              &nbsp;&nbsp;
              <button className="btn btn-success">Add funds</button>
              &nbsp;&nbsp;
              <button className="btn btn-primary">Withdraw</button>
            </div>

            <div className="mt-4">
              <p>
                <i class="fa-regular fa-clock"></i>&nbsp;&nbsp;Equity
              </p>
              <div id="fundBottom">
                <div className="p-4">
                  <div className="d-flex justify-content-between">
                    <p className="mb-1">Available margin</p>
                    <p className="mb-1">{4043.1}</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="mb-1">Used margin</p>
                    <p className="mb-1">{3757.3}</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="mb-1">Available cash</p>
                    <p className="mb-1">{4043.1}</p>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between">
                    <p className="mb-1">Opening Balamce</p>
                    <p className="mb-1">{4043.1}</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="mb-1">Payin</p>
                    <p className="mb-1">{4064.0}</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="mb-1">Span</p>
                    <p className="mb-1">{0.0}</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="mb-1">Dlivery margin</p>
                    <p className="mb-1">{0.0}</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="mb-1">Ecposure</p>
                    <p className="mb-1">{0.0}</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="mb-1">Options premium</p>
                    <p className="mb-1">{0.0}</p>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between">
                    <p className="mb-1">Collateral(Liquid funds)</p>
                    <p className="mb-1">{0.0}</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="mb-1">Collateral(Equity)</p>
                    <p className="mb-1">{0.0}</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="mb-1">Total Collateral</p>
                    <p className="mb-1">{0.0}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fund;
