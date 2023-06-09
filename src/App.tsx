import Navbar from "@/scenes/navbar";
import { useEffect, useState } from "react";
import {SelectedPage} from "@/shared/types";
import Home from "./scenes/home/home";
import Benefits from "./scenes/Benefits/Benefits";
import OurClasses from "./scenes/OurClasses/OurClasses";
import ContactUs from "./scenes/ContactUs/ContactUs";
import Footer from "./scenes/Footer/Footer";


// enum SelectedPage {
//   Home = "home",
//   Benefits = "benefits",
//   OurClasses = "ourclasses",
//   ContactUs = "contactus",
// }


function App() {
  const [selectedPage, setSelectedPage ] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);


useEffect (() => {
  const handleScroll = () => {
    if (window.scrollY === 0) {
      setIsTopOfPage(true);
      setSelectedPage(SelectedPage.Home);
    }
    if ( window.scrollY !== 0) setIsTopOfPage(false);
  }
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll)
}, []);




  return <div className="app bg-gray-20">
    <Navbar 
      isTopOfPage={isTopOfPage}
      selectedPage={selectedPage}
      setSelectedPage={setSelectedPage}/>
    <Home setSelectedPage={setSelectedPage}/>
    <Benefits setSelectedPage={setSelectedPage}/>
    <OurClasses setSelectedPage={setSelectedPage}/>
    <ContactUs setSelectedPage={setSelectedPage} />

    <Footer />
  </div>
}

export default App
