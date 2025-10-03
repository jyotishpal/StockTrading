function Hero() {
    return ( 
        <div className="container p-5">
            <div className="row  text-center" style={{marginTop:"10%" ,marginBottom:"10%"}}>
                <h1 className="fs-2">Charges</h1>
                <p className="text-muted mt-2">List of all charges and taxes</p>
            </div>
            <div className="row mt-5 text-center">
                <div className="col">
                 <img src="media/images/pricing0.svg" alt="PricingImage" />
                 <h1 className="fs-2 mb-4">Free equity delivery</h1>
                 <p style={{lineHeight:"2rem"}}>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className="col">
                  <img src="media/images/pricingEquity.svg" alt="PricingImage" />
                  <h1 className="fs-2 mb-4">Intraday and F&O trades</h1>
                  <p style={{lineHeight:"2rem"}}>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className="col">
                 <img src="media/images/pricingMF.svg" alt="PricingImage" />
                 <h1 className="fs-2 mb-4">Free direct MF</h1>
                 <p style={{lineHeight:"2rem"}}>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
     );
}

export default Hero;