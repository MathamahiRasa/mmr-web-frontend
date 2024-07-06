import { makeStyles, createStyles } from "@mui/styles";

const styles = makeStyles((theme) =>
  createStyles({
    rootContainer: {},
    root: {
      backgroundImage: "linear-gradient(lightgreen 10%, green 50%)",
      paddingTop: "90px",
      fontFamily: '"Audrey", sans-serif !important',
    },
    gridContainer: {
      marginTop: "20px",
    },
    cardWrapper: {
      borderRadius: "30px",
      height: "500px",
      margin: "10px",
      backgroundColor: "transparent",
      boxShadow: "none",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      transition: "transform 0.3s, box-shadow 0.3s",
      "&:hover": {
        transform: "scale(1.01)",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
      },
      overflow: "hidden",
      [theme.breakpoints.down("sm")]: {
        height: "auto",
        borderRadius: "20px",
      },
      [theme.breakpoints.down("xs")]: {
        height: "450px",
      },
    },
    card: {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      borderRadius: "8px",
      boxShadow: "none",
      overflow: "hidden",
    },
    mediaWrapper: {
      width: "100%",
      paddingTop: "75%",
      position: "relative",
      overflow: "hidden",
    },
    media: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%) scale(1)",
      width: "100%",
      height: "100%",
      objectFit: "contain",
      transition: "transform 0.3s",
      "&:hover": {
        transform: "translate(-50%, -50%) scale(1)",
      },
      [theme.breakpoints.down("sm")]: {
        borderRadius: "0 0 0 0",
      },
      [theme.breakpoints.down("xs")]: {
        borderRadius: "0 0 0 0",
      },
    },
    content: {
      backgroundColor: "#FFF",
      // borderRadius: "0 0 80px 0",
      padding: "16px",
      // width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      flexGrow: 1,
      [theme.breakpoints.down("sm")]: {
        borderRadius: "0 0 20px 20px",
      },
      [theme.breakpoints.down("xs")]: {
        borderRadius: "0 0 0 0",
      },
    },
    productInfo: {
      flexGrow: "1 ",
      display: "flex",
      flexDirection: "column",
      // justifyContent: "center",
      marginBottom: "16px",
    },
    productName: {
      fontFamily: '"Playfair Display","Audrey", sans-serif !important',
      lineHeight: "1.5",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      maxWidth: "100%",
      color: "#4d8c57",
    },
    productDescription: {
      fontFamily: '"Lora", sans-serif !important',
      fontStyle: "italic",
      maxHeight: "100px",
      overflow: "hidden",
      textOverflow: "ellipsis",
      color: "#8c6c51",
      [theme.breakpoints.down("xs")]: {
        maxHeight: "80px",
      },
    },
    buttonSection: {
      display: "flex",
      // flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "auto",
      gap: "10px",
      [theme.breakpoints.down("sm")]: {
        justifyContent: "center",
      },
    },
    buttonProgress: {
      // backgroundColor: "grey",
      position: "absolute",
      top: "50%",
      left: "50%",
      marginTop: "-12px",
      marginLeft: "-12px",
      cursor: "not-allowed",
    },
    disabledButton: {
      backgroundColor: "grey",
      color: "red",
      cursor: "not-allowed",
      "&:hover": {
        backgroundColor: "grey",
        transform: "none",
        pointer: "none",
        cursor: "not-allowed",
      },
    },
    addToCartButton: {
      backgroundColor: "#013220",
      color: "white",
      padding: "12px 24px",
      borderRadius: "20px",
      fontFamily: '"Audrey", sans-serif !important',
      cursor: "pointer",
      transition: "transform 0.3s",
      "&:hover": {
        transform: "scale(1.1)",
      },
    },
    addToCartWrapper: {
      position: "relative",
    },
    quantity: {
      marginLeft: "8px",
      marginRight: "8px",
      fontFamily: '"Audrey", sans-serif !important',
    },
    quantityButton: {
      // backgroundColor: "transparent",
      backgroundColor: "#4d8c57",
      color: "white",
      border: "none",
      borderRadius: "50%",
      cursor: "pointer",
      fontFamily: '"Audrey", sans-serif !important',
      fontSize: "16px",
      fontWeight: "bold",
      padding: "4px 15px",
      "&:hover": {
        backgroundColor: "#013220",
      },
      "&:disabled": {
        color: "gray",
        cursor: "not-allowed",
      },
    },
    quantityValue: {
      fontWeight: "bold",
      fontSize: "18px",
      color: "#4d8c57",
      padding: "0 8px",
    },
  })
);

export default styles;
