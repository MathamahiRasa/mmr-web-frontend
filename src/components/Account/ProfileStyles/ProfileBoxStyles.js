import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  popover: {
    "& .MuiPopover-paper": {
      borderRadius: 10,
      marginTop: 10,
      backgroundColor: "#0d1117",
    },
  },
  input: {
    display: "flex",
    flexDirection: "column",
    width: "150px",
    backgroundColor: "#0d1117",
    justifyContent: "center",
    transition: "1s",
    padding: "10px",
    overflow: "hidden",
    "&:hover > $value:not(:hover)": {
      transition: "300ms",
      filter: "blur(1.5px)",
      transform: "scale(0.95, 0.95)",
    },
  },
  navLink: {
    textDecoration: "none",
  },
  value: {
    fontSize: "15px",
    backgroundColor: "transparent",
    border: "none",
    padding: "10px",
    color: "white",
    display: "flex",
    position: "relative",
    gap: "5px",
    cursor: "pointer",
    borderRadius: "10px",
    transition: "1s",
    boxSizing: "border-box",
    "&:not(:active):hover, &:focus": {
      display: "flex",
      boxSizing: "border-box",
      border: "2px solid #1a1f24",
      color: "#637185",
    },
    "&:focus, &:active": {
      backgroundColor: "#1a1f24",
      outline: "none",
      marginLeft: "17px",
    },
    "&::before": {
      content: '""',
      position: "absolute",
      top: "5px",
      left: "-15px",
      width: "5px",
      height: "80%",
      backgroundColor: "#2f81f7",
      borderRadius: "5px",
      opacity: 0,
      transition: "1s",
    },
    "&:focus::before, &:active::before": {
      opacity: 1,
    },
    "& svg": {
      width: "20px",
      height: "20px",
      fill: "#7D8590",
    },
  },
}));
