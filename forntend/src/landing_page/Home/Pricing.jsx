function Pricing() {
    return ( 
        <div className="container p-5 mt-5 mb-5">
            <div className="row">
                <div className="col-4">
                 <h1>Unbeatable pricing</h1>
                 <p className="text-muted mt-3">We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                 <div>
                    <a href="" style={{textDecoration:"none"}} className="mt-4">See pricing<i class="fa-solid fa-arrow-right"></i></a>
                 </div>
                </div>
                <div className="col-2"></div>
                <div className="col-6 ">
                 <div className="row">
                    <div className="col border p-3 text-center">
                      <h1><i class="fa-solid fa-indian-rupee-sign"></i>0</h1>
                      <p>Free equity delivery and direct mutual funds</p>

                    </div>
                   <div className="col border p-3 text-center">
                      <h1><i class="fa-solid fa-indian-rupee-sign"></i>20</h1>
                      <p> Intraday and F&O</p>



                    </div>
                   
                 </div>
                </div>

            </div>

        </div>
     );
}

export default Pricing;