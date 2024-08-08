import React from 'react'
import Navbar from './components/Navbar';
import Work from './components/Work';
import Stripes from './components/Stripes';
import Products from './components/Products';
 
import Marquees from './components/Marquees';
import Cards from './components/Cards';
import Footer from './components/Footer';
import LocomotiveScroll from 'locomotive-scroll';


 


 
 function App() {
  const locomotiveScroll = new LocomotiveScroll();

   return (
     <div className='font-[Satoshi Variable]   w-full text-white bg-black'>
     <Navbar />
     <Work/>
     
     <Stripes />
     <Products />
     <Marquees />
     <Cards />
     <Footer />
     </div>
   )
 }
 
 export default App;