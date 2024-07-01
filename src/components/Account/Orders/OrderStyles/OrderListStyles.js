import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  emptyPage: {
    fontFamily: "monospace !important",
    fontSize: "3vw !important",
    fontStyle: "italic",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "80vh",
    color: "black",
    animation: "$slideIn 0.5s ease-in-out forwards",
    "&:hover": {
      animation: "$painting 3s infinite",
    },
  },
  "@keyframes slideIn": {
    "0%": {
      opacity: 0,
      transform: "translateY(5rem)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
  orderBox: {
    display: "flex",
    alignItems: "center", // Changed from center to flex-start
    height: "auto", // Changed from fixed height to auto
    width: "90%", // Changed from 90% to 100%
    padding: theme.spacing(2),
    margin: "10px 0",
    borderRadius: theme.shape.borderRadius,
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    transition: "box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out",
    cursor: "pointer",
    "&:hover": {
      boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
      transform: "translateY(-2px)",
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
      flexDirection: "row",
      alignItems: "flex-start",
      padding: theme.spacing(2),
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      flexDirection: "row",
      alignItems: "flex-start",
      padding: theme.spacing(2),
    },
  },
  avatar: {
    width: "60px !important",
    height: "60px !important",
    marginRight: `${theme.spacing(2)} !important`,
    [theme.breakpoints.down("sm")]: {
      width: "50px !important",
      height: "50px !important",
      marginRight: `${theme.spacing(2)} !important`,
      alignSelf: "center",
    },
  },
  orderInfo: {
    flex: 1,
    marginLeft: theme.spacing(2),
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      marginLeft: 0,
      width: "100%",
    },
  },
  title: {
    flexShrink: 0,
    maxWidth: "40%",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    [theme.breakpoints.up("md")]: {
      maxWidth: "40%",
      textAlign: "center",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
      textAlign: "left",
      fontSize: "1rem !important",
      marginBottom: theme.spacing(1),
    },
  },
  price: {
    flexShrink: 0,
    maxWidth: "100%",
    wordWrap: "break-word",
    [theme.breakpoints.up("md")]: {
      maxWidth: "20%",
      textAlign: "center",
    },
    [theme.breakpoints.down("sm")]: {
      textAlign: "left",
      marginBottom: theme.spacing(1),
    },
  },
  orderId: {
    flexShrink: 0,
    maxWidth: "100%",
    wordWrap: "break-word",
    [theme.breakpoints.up("md")]: {
      maxWidth: "20%",
    },
    [theme.breakpoints.down("sm")]: {
      textAlign: "left",
      marginBottom: theme.spacing(1),
    },
  },
  status: {
    flexShrink: 0,
    maxWidth: "100%",
    wordWrap: "break-word",
    [theme.breakpoints.up("md")]: {
      maxWidth: "20%",
    },
    [theme.breakpoints.down("sm")]: {
      textAlign: "left",
    },
  },
}));
