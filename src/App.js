import React from 'react';
import './App.css';
import Portfolio from './components/portfolio'
import Header from './components/Header'
import Intro from './components/intro'
import Aboutus from './components/Aboutus'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import Action from './components/Action'
import Features from './components/Features'
import Clients from './components/Clients'
import Team from './components/Team'
import Sponsors from './components/Team'
import Faq from './components/Faq'
import Footer from './components/Footer'
function App() {
  return (
    <div>
      <Header />
      <Intro />
      <Aboutus />
      <Services />
      <WhyUs />
      <Action />
      <Features />
      <Portfolio />
      <Clients/>
      <Team/>
      <Sponsors />
      <Faq />
      <Footer />
     
    </div>
  );
}
export default App;


