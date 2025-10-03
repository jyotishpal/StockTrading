function Awards() {
    return ( 
       <div className="container mt-5 mb-5 p-5">
        <div className="row">
         <div className="col-6">
            <img src="media/images/largestBroker.svg" alt="Awarda_Image" />
        </div>
        <div className="col-6 p-4">
          <h1>Largest Stock Broker In India</h1>
          <p className="mt-3">2+ milions zerodha clients contribute to over 15% of all retail order volume in India daily by trading and investing in :</p>
          <div className="row  mt-5">
            <div className="col-6 ">
             <ul>
                <li className="mb-1">Futures and Options</li>
                <li className="mb-1">Commodity and derivaties</li>
                <li className="mb-1">Currency derivaties</li>
             </ul>
            </div>
            <div className="col-6 ">
               <ul >
                <li className="mb-1">Stocks & IPOs</li>
                <li className="mb-1">Direct mutual funds</li>
                <li className="mb-1">Bonds and Govt. Securities</li>
             </ul>
            </div>
          </div>
          <img src="media/images/pressLogos.png" alt="Awards_Section_image"  style={{width:"100%",marginTop:"10px"}}/>
        </div>
        </div>
       </div>
     );
}

export default Awards;