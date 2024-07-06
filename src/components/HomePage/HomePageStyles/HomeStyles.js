import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    padding: "100px",
  },
  carouselSection: {
    backgroundColor: theme.palette.grey[200],
    padding: theme.spacing(3),
  },
  carousel: {
    height: 400,
    [theme.breakpoints.down("sm")]: {
      height: 300,
    },
  },
  carouselImage: {
    height: "100%",
    objectFit: "cover",
  },
  categoriesSection: {
    backgroundColor: theme.palette.grey[100],
    padding: theme.spacing(3),
  },
  sectionHeading: {
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: theme.spacing(4),
  },
  categoryCard: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    transition: "transform 0.3s",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  categoryCardImage: {
    height: 150,
    objectFit: "cover",
  },
  specialSection: {
    backgroundColor: theme.palette.grey[200],
    padding: theme.spacing(3),
  },
  specialCard: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    transition: "transform 0.3s",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  specialCardImage: {
    height: 150,
    objectFit: "cover",
  },
}));
