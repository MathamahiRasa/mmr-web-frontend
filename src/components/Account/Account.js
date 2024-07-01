import React from "react";
import { Box, Grid, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link, useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  gridItem: {
    width: "100%",
    maxWidth: 400,
    display: "flex",
    justifyContent: "center",
  },
  itemContent: {
    backgroundColor: "lightgrey !important",
    padding: theme.spacing(2),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: theme.shadows[1],
    transition: "box-shadow 0.3s ease",
    cursor: "pointer",
    "&:hover": {
      boxShadow: theme.shadows[4],
    },
    [theme.breakpoints.up("sm")]: {
      width: "40%",
    },
    [theme.breakpoints.up("md")]: {
      width: "50%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "30%",
    },
  },
  arrowIcon: {
    marginLeft: theme.spacing(1),
  },
}));

const Account = () => {
  const classes = useStyles();

  const navigate = useNavigate();
  const navigateComponent = (path) => {
    navigate(path);
  };

  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Grid
        container
        spacing={2}
        direction="column"
        alignItems="center"
        className={classes.container}
      >
        <Grid
          item
          className={classes.gridItem}
          onClick={() => navigateComponent("orderHistoryPage")}
        >
          <Paper className={classes.itemContent}>
            <div>Order history</div>
            <span className={classes.arrowIcon}>{">"}</span>
          </Paper>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Paper className={classes.itemContent}>
            <div>Account settings</div>
            <span className={classes.arrowIcon}>{">"}</span>
          </Paper>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Paper className={classes.itemContent}>
            <div>Payment methods</div>
            <span className={classes.arrowIcon}>{">"}</span>
          </Paper>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Paper className={classes.itemContent}>
            <div>Wishlist</div>
            <span className={classes.arrowIcon}>{">"}</span>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Account;
