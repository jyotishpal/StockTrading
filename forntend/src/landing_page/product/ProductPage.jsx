import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";
import Hero from "./Hero";
import Navbar from "../Navbar";
import Footer from "../Footer";

function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imgUrl={"media/images/kite.png"}
        heading={"Kite"}
        description={
          "Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        }
        link1={
          <span>
            Try demo <i className="fa-solid fa-arrow-right"></i>
          </span>
        }
        link2={
          <span>
            Learn more <i className="fa-solid fa-arrow-right"></i>
          </span>
        }
        link3={"media/images/googlePlayBadge.svg"}
        link4={"media/images/appstoreBadge.svg"}
      />
      <RightSection 
       heading={"Console"}
        description={
          "The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        }
        link1={
          <span>
            Learn more<i className="fa-solid fa-arrow-right"></i>
          </span>
        }
        imgUrl={"media/images/console.png"}
       />

      <LeftSection
        imgUrl={"media/images/coin.png"}
        heading={"Coin"}
        description={
          "Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        }
        link1={
          <span>
            Coin <i className="fa-solid fa-arrow-right"></i>
          </span>
        }
        link2={
         ""
        }
        link3={"media/images/googlePlayBadge.svg"}
        link4={"media/images/appstoreBadge.svg"}
      />
      <RightSection 
       heading={"Kite Connect API"}
        description={
          "Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        }
        link1={
          <span>
            Kite Connect<i className="fa-solid fa-arrow-right"></i>
          </span>
        }
        imgUrl={"media/images/kiteconnect.png"}
       />
      <LeftSection
        imgUrl={"media/images/varsity.png"}
        heading={"Varsity mobile"}
        description={
          "An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        }
        link1={
         ""
        }
        link2={
         ""
        }
        link3={"media/images/googlePlayBadge.svg"}
        link4={"media/images/appstoreBadge.svg"}
      />
      <Universe />
    </>
  );
}

export default ProductPage;
