import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    zIndex: 1000,
  },
  loader: {
    position: "relative",
    width: "130px",
    height: "100px",
    backgroundRepeat: "no-repeat",
    backgroundImage:
      "linear-gradient(#0277bd, #0277bd), linear-gradient(#29b6f6, #4fc3f7), linear-gradient(#29b6f6, #4fc3f7)",
    backgroundSize: "80px 70px, 30px 50px, 30px 30px",
    backgroundPosition: "0 0, 80px 20px, 100px 40px",
    "&:after": {
      content: '""',
      position: "absolute",
      bottom: "10px",
      left: "12px",
      width: "10px",
      height: "10px",
      background: "#fff",
      borderRadius: "50%",
      boxSizing: "content-box",
      border: "10px solid #000",
      boxShadow: "78px 0 0 -10px #fff, 78px 0 #000",
      animation: "$wheelSk 0.75s ease-in infinite alternate",
    },
    "&:before": {
      content: '""',
      position: "absolute",
      right: "100%",
      top: "0px",
      height: "70px",
      width: "70px",
      backgroundImage:
        "linear-gradient(#fff 45px, transparent 0), linear-gradient(#fff 45px, transparent 0), linear-gradient(#fff 45px, transparent 0)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "30px 4px",
      backgroundPosition: "0px 11px, 8px 35px, 0px 60px",
      animation: "$lineDropping 0.75s linear infinite",
    },
  },
  "@keyframes wheelSk": {
    "0%, 50%, 100%": { transform: "translateY(0)" },
    "30%, 90%": { transform: "translateY(-3px)" },
  },
  "@keyframes lineDropping": {
    "0%": {
      backgroundPosition: "100px 11px, 115px 35px, 105px 60px",
      opacity: 1,
    },
    "50%": { backgroundPosition: "0px 11px, 20px 35px, 5px 60px" },
    "60%": { backgroundPosition: "-30px 11px, 0px 35px, -10px 60px" },
    "75%, 100%": {
      backgroundPosition: "-30px 11px, -30px 35px, -30px 60px",
      opacity: 0,
    },
  },
}));

const Loader = () => {
  const classes = useStyles();

  return (
    <div className={classes.overlay}>
      <div className={classes.loader}></div>
    </div>
  );
};

export default Loader;
