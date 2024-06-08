import React from "react";
// import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";
import GradientBackground from "../backgrounds/GradientBackground";

const Homepage = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <GradientBackground>
        <Home />
      </GradientBackground>
      {/* <Home /> */}
      <Footer />
    </div>
  );
};

export default Homepage;
