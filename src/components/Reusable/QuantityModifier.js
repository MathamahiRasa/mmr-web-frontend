import React from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Button, ButtonGroup, TextField } from "@mui/material";
import { useCartHandler } from "../Reusable/ReusableComponent";
import { useStyles } from "./ResuableStyles/QuantityModifierStyles";

const QuantityModifier = ({ product, showToast, maxStock }) => {
  const classes = useStyles();

  const { handleIncreaseQuantity, handleDecreaseQuantity } = useCartHandler();

  const handleIncrease = (product) => {
    if (product.quantity < maxStock) {
      handleIncreaseQuantity(product);
      showToast(false);
    } else {
      showToast(false, true);
    }
  };

  const handleDecrease = (product) => {
    showToast(true);
    handleDecreaseQuantity(product);
  };

  console.log("Product in QuantityModifier:", product);

  return (
    <div className={classes.quantityModifier}>
      <ButtonGroup size="small" className={classes.buttonGroup}>
        <Button
          className={`${classes.removeButton} ${classes.noBorder}`}
          onClick={() => handleDecrease(product)}
        >
          <RemoveIcon />
        </Button>
        <TextField
          disabled
          value={product.quantity}
          // size="small"
          className={classes.quantityField}
          inputProps={{
            style: { textAlign: "center" },
            maxLength: 3,
          }}
          variant="outlined"
          InputProps={{
            classes: {
              notchedOutline: classes.noBorder,
              root: classes.noBorderRoot,
            },
          }}
        />
        <Button
          className={`${classes.addButton} ${classes.noBorder}`}
          onClick={() => handleIncrease(product)}
          disabled={product.quantity > maxStock}
        >
          <AddIcon />
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default QuantityModifier;
