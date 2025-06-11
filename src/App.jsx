import { useEffect,  } from 'react'
import React from 'react'
import Navbar from './components/Navigation/Navbar'
import Hero from './components/Hero/Hero';
import AOS from 'aos';
import "aos/dist/aos.css";
import About from './components/About/About';
import Services from './components/Services/Services';
import CarList from './components/CarList/CarList';
import Testimonial from './components/Testimonial/Testimonial';
import AppStoreBanner from './components/AppStoreBanner/AppStoreBanner';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


const App = () => {

  //Dark-Mode Feature---
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme")?
  localStorage.getItem("theme"): "light"
); 

const element = document.documentElement;
useEffect(()=>{
  if(theme=== "dark"){
    element.classList.add("dark");
    localStorage.setItem("theme","dark");
  }else{
     element.classList.remove("dark");
    localStorage.setItem("theme","light");

  }
},[theme]);

//AOS Initialization
React.useEffect(()=>{
  AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
});
AOS.refresh();
},[]);
  return (
  <div className=' '>
    <Navbar theme={theme} setTheme={setTheme}/>
    <Hero theme={theme}/>
    <About/>
    <Services/>
    <CarList/>
    <Testimonial/>
    <div className='dark:bg-black'>
      <AppStoreBanner/>
    </div>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default App