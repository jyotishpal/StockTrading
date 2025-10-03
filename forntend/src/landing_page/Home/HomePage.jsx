import Navbar from '../Navbar'
import Hero from './Hero'
import Awards from './Awards'
import Stats from './Stats'
import Pricing from './Pricing'
import Education from './Eduction'
import OpenAccount from '../OpenAccount';
import Footer from '../Footer'
function HomePage() {
    return ( 
        <>
        <div className='py-5'>
        <Hero/>
        <Awards/>
        <Stats/>
        <Pricing/>
        <Education/>
        <OpenAccount/>
        </div>
        </>
     );
}

export default HomePage;