import { useNavigate } from "react-router-dom";
function Hero() {
  const navigate=useNavigate();
    return ( 
        <div className="container p-5">
            <div className="row text-center">
              <img src="./media/images/homeHero.png" alt="Home_HeroImage" className="mb-3"/>
              <h1 className="mt-3 mb-2">Invest In Everything</h1>
              <p>Online plateform to invest in stocks, derivaties, mutual funds ,and more</p>
              <button className="p-1 btn btn-primary fs-5 mb-5" style={{width:"12%",margin:"0 auto"}}
              onClick={()=>{navigate("/signup")}}
              >SignUp Now</button>
            </div>

        </div>
     );
}

export default Hero;