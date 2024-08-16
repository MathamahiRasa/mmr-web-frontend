import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  rootContainer: {
    paddingTop: "70px",
    backgroundColor: "white",
  },
  root: {
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(5),
    },
  },
  section: {
    marginBottom: theme.spacing(4),
    padding: theme.spacing(3),
    borderRadius: theme.spacing(2),
    // background: "linear-gradient(145deg, #f0f0f0, #ffffff)",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  image: {
    width: "100%",
    maxWidth: "300px",
    height: "auto",
    objectFit: "cover",
    borderRadius: theme.spacing(2),
  },
  productInfo: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  productName: {
    fontFamily: "'Playfair Display', serif !important",
    fontSize: "2.5rem",
    marginBottom: theme.spacing(2),
  },
  productPrice: {
    fontFamily: "'Montserrat', sans-serif !important",
    fontSize: "1.8rem",
    marginBottom: theme.spacing(2),
  },
  productActions: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: "20px",
    marginTop: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "stretch",
    },
  },
  sectionHeading: {
    fontFamily: "'Roboto Slab', serif !important",
    fontSize: "1.5rem",
    paddingBottom: "20px",
    // marginBottom: "20px",
  },
  submitButton: {
    backgroundColor: "black",
    color: "white",
    width: "150px",
    // flex: 1,
    marginRight: theme.spacing(2),
    "&:hover": {
      backgroundColor: "#80de80",
      color: "black",
    },
    [theme.breakpoints.down("sm")]: {
      marginRight: 0,
      marginBottom: theme.spacing(2),
    },
  },
  quantityModifierContainer: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  imageSection: {
    background: "linear-gradient(145deg, #e6f7ff, #ffffff)",
  },
  descriptionSection: {
    background: "linear-gradient(145deg, #fff5e6, #ffffff)",
  },
  ingredientSection: {
    background: "linear-gradient(145deg, #e6ffe6, #ffffff)",
    textAlign: "center",
  },
  ingredientItem: {
    textAlign: "left",
    fontSize: "1.2rem",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  magicBehindSection: {
    background: "linear-gradient(145deg, #ffe6e6, #ffffff)",
  },
  reviewsSection: {
    background: "linear-gradient(145deg, #e6e6ff, #ffffff)",
  },
  userInfo: {
    backgroundColor: "#e8f5e9",
    width: "40%",
    padding: "10px",
    borderRadius: theme.spacing(1),
    marginTop: "auto",
    marginBottom: "10px",
  },
  reviewsContainer: {
    display: "flex",
    flexDirection: "column",
  },
  reviewsList: {
    flex: 1,
    minWidth: 300,
    marginBottom: theme.spacing(2),
    maxHeight: 300,
    overflowY: "auto",
  },
  reviewItem: {
    marginBottom: theme.spacing(2),
    borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
    paddingBottom: theme.spacing(2),
  },
  reviewText: {
    color: "#666",
  },
  submitReviewContainer: {
    marginTop: theme.spacing(2),
  },
}));
