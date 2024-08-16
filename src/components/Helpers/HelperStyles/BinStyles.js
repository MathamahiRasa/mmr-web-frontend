import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  button: {
    width: 50,
    height: 50,
    borderRadius: "50%",
    // backgroundColor: "rgb(20, 20, 20)",
    backgroundColor: "green",
    border: "none",
    fontWeight: 600,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.164)",
    cursor: "pointer",
    transition: "all 0.3s",
    overflow: "hidden",
    position: "relative",
    gap: 2,
    "&:hover": {
      backgroundColor: "rgb(255, 69, 69)",
      alignItems: "center",
      gap: 0,
    },
  },
  svgIcon: {
    width: 12,
    transition: "all 0.3s",
    "& path": {
      fill: "white",
    },
  },
  binTop: {
    transformOrigin: "bottom right",
    "$button:hover &": {
      transition: "all 0.5s",
      transform: "rotate(160deg)",
    },
  },
}));
