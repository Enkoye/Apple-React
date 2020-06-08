import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar.js';
import Alert from './Components/Alert/Alert.js';
import SectionOne from './Components/SectionOne/SectionOne.js';
import SectionTwo from './Components/SectionTwo/SectionTwo.js';
import SectionThree from './Components/SectionThree/SectionThree.js';
import SectionFour from './Components/SectionFour/SectionFour.js';
import SectionFive from './Components/SectionFive/SectionFive.js';
import SectionSix from './Components/SectionSix/SectionSix.js';
import Footer from './Components/Footer/Footer.js';
function App() {
  return (
   <div>
    <Navbar/>
    <Alert/>
    <SectionOne/>
    <SectionTwo/>
    <SectionThree/>
    <SectionFour/>
    <SectionFive/>
    <SectionSix/>
    <Footer/>
   </div>
  );
}

export default App;
