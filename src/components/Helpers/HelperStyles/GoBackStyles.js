import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  button: {
    display: "flex",
    height: "3em",
    width: "100px",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightblue",
    borderRadius: "3px",
    letterSpacing: "1px",
    transition: "all 0.2s linear",
    cursor: "pointer",
    border: "none",
    background: "#fff",
    margin: "10px 10px",
    "&:hover": {
      boxShadow: "9px 9px 33px #d1d1d1, -9px -9px 33px #ffffff",
      transform: "translateY(-2px)",
      color: "red",
    },
    "&:hover $icon": {
      fontSize: "1.2em",
      transform: "translateX(-5px)",
    },
  },
  icon: {
    marginRight: "5px",
    marginLeft: "5px",
    fontSize: "20px",
    transition: "all 0.4s ease-in",
  },
  goBackText: {
    fontSize: "15px",
  },
}));
