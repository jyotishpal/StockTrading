import Navbar from "../Navbar";
import Hero from "./Hero";
import Team from "./Team";
import Footer from "../Footer";
function AboutPage() {
    return ( 
        <>
        <div className="py-5">
        <Hero/>
        <Team/>
        </div>
        </>
     );
}

export default AboutPage;