import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  rootBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "80px",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    padding: "0 20px",
    position: "fixed",
    width: "80%",
    top: "10px",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 1000,
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    borderRadius: "30px",
    [theme.breakpoints.down("sm")]: {
      width: "80%",
      height: "60px",
      padding: "0 10px",
      borderRadius: "30px",
    },
  },
  hidden: {
    transform: "translateY(-100%) translateX(-50%)",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    marginRight: "20px",
    height: "80px",
    overflow: "hidden",
    [theme.breakpoints.down("sm")]: {
      height: "60px",
    },
  },
  logoImage: {
    height: "400px",
    width: "auto",
    transform: "scale(0.2)",
    transformOrigin: "60px",
  },
  navLinkRoot: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    flexWrap: "nowrap",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  navLink: {
    color: "black",
    padding: "8px 12px",
    textDecoration: "none",
    fontFamily: "'Roboto', sans-serif",
    fontWeight: "550",
    fontSize: "16px",
    // fontStyle: "italic",
    position: "relative",
    transition: "color 0.3s",
    whiteSpace: "nowrap",
    "&:hover": {
      color: "green",
      "&::after": {
        width: "100%",
      },
    },
    "&::after": {
      content: '""',
      position: "absolute ",
      bottom: 0,
      left: 0,
      height: "2px",
      width: "0",
      backgroundColor: "green",
      transition: "width 0.3s",
    },
  },
  searchContainer: {
    display: "flex",
    alignItems: "center",
    marginLeft: "10px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    },
  },
  searchIcon: {
    fontSize: "20px",
    color: "#2874f0",
    cursor: "pointer",
  },
  textField: {
    flex: 1,
    transition: "width 0.3s ease",
    width: "100%",
    maxWidth: "200px",
    "& .MuiOutlinedInput-root": {
      borderRadius: "28px",
      paddingLeft: "14px",
      "&:hover fieldset": {
        borderColor: "#2874f0",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#2874f0",
      },
    },
    "& .MuiOutlinedInput-input": {
      padding: "10px 14px",
    },
  },
  textFieldFocused: {
    width: "100%",
  },
  avatar: {
    marginLeft: "16px",
    width: "40px",
    height: "40px",
  },

  //for small screens
  menuItem: {
    marginRight: theme.spacing(2),
  },

  closeItem: {
    position: "absolute",
    top: 10,
    right: 10,
    fontSize: "2rem",
    transition: "transform 0.3s ease, color 0.3s ease",
    "&:hover": {
      color: "black",
      transform: "rotate(90deg)",
    },
  },

  drawerPaper: {
    width: "100%",
    opacity: "95%",
    background: "linear-gradient(90deg, lightblue 10%, lightgrey 80%)",
  },

  drawerLogo: {
    marginTop: theme.spacing(-8),
    marginBottom: theme.spacing(-10),
    transform: "scale(0.5)",
    fontSize: "2rem",
    fontWeight: "bold",
    color: "green",
  },

  drawerContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },

  drawerNavLink: {
    color: "black",
    padding: "30px 0",
    textDecoration: "none",
    fontStyle: "italic",
    fontSize: "25px",
    fontFamily: "'Roboto', sans-serif",
    fontWeight: "530",
    position: "relative",
    transition: "color 0.1s, transform 0.1s",
    "&:hover": {
      color: "green",
      "&::after": {
        width: "100%",
      },
      transform: "translateX(10px)",
    },
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: 0,
      height: "2px",
      width: "0",
      backgroundColor: "green",
      transition: "width 0.1s",
    },
  },
}));
