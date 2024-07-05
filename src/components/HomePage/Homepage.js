import React from "react";
import Home from "./Home";
import Footer from "./Footer";
import GradientBackground from "../backgrounds/GradientBackground";
// import Navbar from "../NavBar/Navbar";

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
