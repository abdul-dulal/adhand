import React from "react";
import About from "./Components/about/About";
import Campagins from "./Components/about/campagins/Campagins";
import Ads from "./Components/ads/Ads";
import Clients from "./Components/clients/Clients";
import Footer from "./Components/footer/Footer";
import Hero from "./Components/hero/Hero";
import Navbar from "./Components/navbar/Navbar";
import Signup from "./Components/signup/Signup";
import Skills from "./Components/skills/Skills";

const App = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Hero />
      <Skills />
      <About />
      <Campagins />
      <Ads />
      <Clients />
      <Signup />
      <Footer />
    </div>
  );
};

export default App;
