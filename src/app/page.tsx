
import Team from "./components/Team";
import Aboutpage from "./components/About";
import Navbar from './components/Navbar';
import LandingPage from './components/Landingpage';
import Products from './components/Products';
import Services from './components/Services';
import Footer from './components/Footer/Index';

export default function Home(){
  return(
    <div className="min-h-screen">
     <Navbar/>
     <LandingPage/>
     <Aboutpage/>
     <Products/>
     <Services/>
     <Team/>
     <Footer/>

    </div>
  )}