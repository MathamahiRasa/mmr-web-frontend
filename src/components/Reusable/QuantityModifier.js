import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button, ButtonGroup, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useCartHandler } from "../Reusable/ReusableComponent";

const useStyles = makeStyles((theme) => ({
  quantityModifier: {
    display: "flex",
    alignItems: "center",
    borderRadius: "200px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      justifyContent: "space-between",
      marginTop: theme.spacing(1),
    },
  },
  buttonGroup: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      marginRight: theme.spacing(1),
    },
  },
  quantityField: {
    width: 60,
    textAlign: "center",
    borderRadius: "50%",
    // marginRight: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      width: 40,
      marginRight: theme.spacing(1),
    },
  },
  price: {
    marginRight: theme.spacing(1),
    flexShrink: 0,
  },
  addButton: {
    backgroundColor: "black",
    color: "white",
    borderRadius: "50%",
    "&:hover": {
      backgroundColor: "darkgreen",
    },
  },
  removeButton: {
    // marginRight: theme.spacing(1),
    backgroundColor: "black",
    color: "white",
    borderRadius: "50%",
    "&:hover": {
      backgroundColor: "red",
    },
  },
  deleteButton: {
    // backgroundColor: "grey",
    color: "red",
    borderRadius: theme.shape.borderRadius,
    // "&:hover": {
    //   backgroundColor: "darkgrey",
    // },
  },
}));

const QuantityModifier = ({ product, showToast }) => {
  const classes = useStyles();

  const { handleIncreaseQuantity, handleDecreaseQuantity, deleteCartItem } =
    useCartHandler();

  const handleIncrease = (product) => {
    showToast(false);
    handleIncreaseQuantity(product);
  };

  const handleDecrease = (product) => {
    showToast(true);
    handleDecreaseQuantity(product);
  };

  const deleteCartItems = (product) => {
    showToast(true);
    deleteCartItem(product);
  };

  return (
    <div className={classes.quantityModifier}>
      <ButtonGroup size="small" className={classes.buttonGroup}>
        <Button
          className={classes.removeButton}
          onClick={() => handleDecrease(product)}
        >
          <RemoveIcon />
        </Button>
        <TextField
          disabled
          value={product.quantity}
          size="small"
          className={classes.quantityField}
          inputProps={{
            style: { textAlign: "center" },
            maxLength: 3,
          }}
        />
        <Button
          className={classes.addButton}
          onClick={() => handleIncrease(product)}
        >
          <AddIcon />
        </Button>
      </ButtonGroup>
      <Typography variant="body1" className={classes.price}>
        ₹{product.price}
      </Typography>
      <Button
        size="small"
        className={classes.deleteButton}
        onClick={() => deleteCartItems(product)}
      >
        <DeleteIcon />
      </Button>
    </div>
  );
};

export default QuantityModifier;
