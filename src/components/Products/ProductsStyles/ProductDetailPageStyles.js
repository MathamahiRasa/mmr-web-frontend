import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    padding: "150px",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    maxWidth: "300px",
    height: "auto",
    objectFit: "cover",
    borderRadius: theme.spacing(2),
  },
  productInfo: {
    marginTop: theme.spacing(3),
  },
  reviews: {
    marginTop: theme.spacing(3),
  },
  reviewItem: {
    marginBottom: theme.spacing(2),
    borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
    paddingBottom: theme.spacing(2),
  },
  section: {
    marginBottom: theme.spacing(4),
  },
  reviewsContainer: {
    display: "flex",
    flexDirection: "column",
  },
  reviewsList: {
    flex: 1,
    minWidth: 300,
    marginBottom: theme.spacing(2),
  },
  submitReviewContainer: {
    flex: 1,
    minWidth: 300,
  },
  userInfo: {
    backgroundColor: "#e8f5e9",
    padding: theme.spacing(2),
    borderRadius: theme.spacing(1),
  },
  reviewText: {
    color: "#666",
  },
  submitButton: {
    backgroundColor: "#90EE90",
    color: "#333",
    "&:hover": {
      backgroundColor: "#80de80",
    },
  },
}));
