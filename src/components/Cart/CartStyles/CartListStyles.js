import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  cartList: {
    width: "100%",
    maxWidth: 600,
    margin: "0 auto",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
      padding: theme.spacing(1),
    },
  },
  listItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "flex-start",
    },
  },
  listItemIcon: {
    width: 80,
    height: 80,
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      width: 60,
      height: 60,
      marginRight: 0,
      marginBottom: theme.spacing(1),
    },
  },
  listItemText: {
    flex: "1 1 auto",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    maxWidth: "50%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
    },
  },
  listItemContent: {
    display: "flex",
    alignItems: "center",
    flex: "1 1 auto",
    minWidth: 0,
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "flex-start",
    },
  },
  price: {
    fontSize: "1rem",
    fontWeight: "bold",
  },
}));
