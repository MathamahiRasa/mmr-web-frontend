import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  rootBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "60px",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    padding: "0 20px",
    background: "white",
    position: "fixed",
    width: "80%",
    top: "10px",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 1000,
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    borderRadius: "30px",
  },
  hidden: {
    transform: "translateY(-100%) translateX(-50%)",
  },
  logo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
  },
  navLinkRoot: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 2,
  },
  navLink: {
    color: "black",
    padding: "10px 20px",
    textDecoration: "none",
    fontFamily: "'Roboto', sans-serif",
    fontWeight: "500",
    fontSize: "18px",
    position: "relative",
    transition: "color 0.3s",
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
  },
  searchIcon: {
    fontSize: "20px",
    color: "#2874f0",
    cursor: "pointer",
  },
  textField: {
    flex: 1,
    transition: "width 0.3s ease",
    width: "50%",
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
    marginBottom: theme.spacing(4),
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
