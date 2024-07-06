import { keyframes } from "@emotion/react";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  CartBtn: {
    width: "140px",
    height: "40px",
    borderRadius: "12px",
    border: "none",
    backgroundColor: "green",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transitionDuration: "0.5s",
    overflow: "hidden",
    boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.103)",
    position: "relative",
    "&:hover $IconContainer": {
      transform: "translateX(58px)",
      borderRadius: "40px",
      transitionDuration: "0.5s",
    },
    "&:hover $text": {
      transform: "translate(10px,0px)",
      transitionDuration: "0.5s",
    },
    "&:active": {
      transform: "scale(0.95)",
      transitionDuration: "0.5s",
    },
  },
  IconContainer: {
    position: "absolute",
    left: "-50px",
    width: "30px",
    height: "30px",
    backgroundColor: "transparent",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    zIndex: 2,
    transitionDuration: "0.5s",
  },
  icon: {
    borderRadius: "1px",
  },
  text: {
    height: "100%",
    width: "fit-content",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "rgb(17, 17, 17)",
    zIndex: 1,
    transitionDuration: "0.5s",
    fontSize: "1.04em",
    fontWeight: 600,
  },
}));
