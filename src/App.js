import React from "react";
import Downloadbts from "./components/Downloadbts";
import Featureitem from "./components/Featureitem";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Imgdescription from "./components/Imgdescription";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="max-w-[1540px] mx-auto">
      <Navbar />
      <Hero />
      <Downloadbts />
      <Featureitem />
      <Imgdescription />
      <Footer />
    </div>
  );
}

export default App;
