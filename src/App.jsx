import { useState } from "react";
import "./App.css"
import "./var.css"
import About from "./components/About/About";
import Asks from "./components/Asks/Asks";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Portfolio from "./components/Portfolio/Portfolio";
import Services from "./components/Services/Services";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import ToglleThemeButton from "./components/ToglleThemeButton/ToglleThemeButton";

function App() {

  return (
    <div className="App">
      <ToglleThemeButton />
      <div className="content">
        <Header />
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Asks />
        <Testimonials />
        <Footer />
      </div>
    </div>
  );
}

export default App;
