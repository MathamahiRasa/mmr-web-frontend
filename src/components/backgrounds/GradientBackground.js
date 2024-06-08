import React from "react";

const GradientBackground = ({ children }) => {
  const gradientStyle = {
    background: "linear-gradient(to bottom right, #3f51b5, #9c27b0)",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  };

  return <div style={gradientStyle}>{children}</div>;
};

export default GradientBackground;
