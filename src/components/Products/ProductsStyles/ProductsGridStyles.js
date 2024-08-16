import { makeStyles, createStyles } from "@mui/styles";

const styles = makeStyles((theme) =>
  createStyles({
    rootContainer: {},
    root: {
      backgroundImage: "linear-gradient(lightgreen 10%, green 50%)",
      paddingTop: "90px",
      fontFamily: '"Audrey", sans-serif !important',
      [theme.breakpoints.down("sm")]: {
        paddingTop: "60px",
      },
    },
    gridContainer: {
      marginTop: "20px",
      display: "grid",
      [theme.breakpoints.down(950)]: {
        gridTemplateColumns: "repeat(2, 1fr)",
      },
    },
    cardWrapper: {
      borderRadius: "30px",
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
      height: "auto",
      [theme.breakpoints.down("sm")]: {
        minHeight: "400px",
      },
      [theme.breakpoints.down("xs")]: {
        minHeight: "350px",
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
    likedButton: {
      position: "absolute",
      right: 0,
      bottom: 0,
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
        transform: "translate(-50%, -50%) scale(1.1)",
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
      padding: "16px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      flexGrow: 1,
      [theme.breakpoints.down("sm")]: {
        padding: "12px",
      },
      [theme.breakpoints.down("xs")]: {
        padding: "8px",
      },
    },
    productInfo: {
      flexGrow: 1,
      display: "flex",
      flexDirection: "column",
      marginBottom: "16px",
    },
    productName: {
      fontFamily: '"Playfair Display", "Audrey", sans-serif !important',
      lineHeight: "1.5",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      maxWidth: "100%",
      color: "#4d8c57",
      fontSize: "1.2rem",
      [theme.breakpoints.down("sm")]: {
        fontSize: "1rem",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "0.9rem",
      },
    },
    productDescription: {
      fontFamily: '"Lora", sans-serif !important',
      fontStyle: "italic",
      maxHeight: "100px",
      overflow: "hidden",
      textOverflow: "ellipsis",
      color: "#8c6c51",
      display: "-webkit-box",
      WebkitLineClamp: 3,
      WebkitBoxOrient: "vertical",
      [theme.breakpoints.down("sm")]: {
        WebkitLineClamp: 2,
      },
      [theme.breakpoints.down("xs")]: {
        maxHeight: "80px",
      },
    },
    weightSection: {
      fontSize: "14px",
      fontWeight: 500,
    },
    priceSection: {
      display: "flex",
      alignItems: "center",
      alignContent: "center",
      justifyContent: "flex-start",
      marginLeft: "20px",
      fontWeight: 600,
      fontFamily: "Times New Roman",
      flexGrow: 1,
      fontSize: "18px",
      [theme.breakpoints.down(1100)]: {
        marginLeft: "0px",
        fontSize: "14px",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "16px",
        marginLeft: "10px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "14px",
      },
    },
    buttonSection: {
      display: "flex",
      flexDirection: "row",
      // alignItems: "center",
      marginTop: "auto",
      gap: "5px",
      // marginRight: "10px",
      justifyContent: "space-between",
      [theme.breakpoints.down(1100)]: {
        justifyContent: "space-between",
      },
      [theme.breakpoints.down("sm")]: {
        justifyContent: "space-between",
      },
      [theme.breakpoints.down("xs")]: {
        gap: "3px",
      },
    },
    buttonProgress: {
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
      },
    },
    addToCartButton: {
      backgroundColor: "#013220",
      color: "white",
      // padding: "12px 24px",
      borderRadius: "20px",
      fontFamily: '"Audrey", sans-serif !important',
      cursor: "pointer",
      transition: "transform 0.3s",
      "&:hover": {
        transform: "scale(1.1)",
      },
      [theme.breakpoints.down("sm")]: {
        padding: "6px 12px",
        fontSize: "0.9rem",
      },
      [theme.breakpoints.down("xs")]: {
        padding: "4px 8px",
        fontSize: "0.8rem",
      },
    },
    addToCartWrapper: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      flexGrow: 1,
    },
    quantityButton: {
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
      [theme.breakpoints.down("sm")]: {
        padding: "2px 10px",
      },
      [theme.breakpoints.down("xs")]: {
        padding: "1px 8px",
      },
    },
    quantityValue: {
      fontWeight: "bold",
      fontSize: "18px",
      color: "#4d8c57",
      padding: "0 8px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "16px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "14px",
      },
    },
  })
);

export default styles;
