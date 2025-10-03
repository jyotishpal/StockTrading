import Navbar from "../Navbar";
import Hero from "./Hero";
import CreateTicket from "./CreateTicket";
import Footer from "../Footer";
function SupportPage() {
    return ( 
        <>
        <div className='py-5'>
        
        <Hero/>
        <CreateTicket/>
     
        </div>
        </>
     );
}

export default SupportPage;