import { Button, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import { useStyles } from "./OrderStyles/OrderSearchStyles";

const OrderSearch = ({ searchQueryData, handleInputChange }) => {
  const classes = useStyles();
  return (
    <form className={classes.form}>
      <TextField
        className={classes.textField}
        type="search"
        placeholder="Search your orders here"
        value={searchQueryData}
        onChange={(e) => handleInputChange(e)}
        variant="outlined"
      />
      <Button className={classes.searchButton} variant="contained">
        <SearchIcon className={classes.searchIcon} />
        <span className={classes.buttonText}>Search Orders</span>
      </Button>
    </form>
  );
};

export default OrderSearch;
