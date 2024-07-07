import React, { useState } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useRecoilValue } from "recoil";
import { cartItemsWithQuantitySelector } from "../atoms/Atoms";
import QuantityModifier from "../Reusable/QuantityModifier";
import { Avatar, Typography } from "@mui/material";
import CartToastMessage from "./CartToastMessage";
import { useStyles } from "./CartStyles/CartListStyles";
import GoBack from "../Helpers/GoBack";

const CartList = ({ onClose }) => {
  const classes = useStyles();
  const [toastOpen, setToastOpen] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const cartItemsList = useRecoilValue(cartItemsWithQuantitySelector);

  const showToast = (isDelete) => {
    setIsDelete(isDelete);
    setToastOpen(false);
    setTimeout(() => {
      setToastOpen(true);
    }, 100);
  };

  return (
    <>
      <GoBack onClick={onClose} />
      {cartItemsList.length > 0 ? (
        <Box className={classes.cartList} role="presentation">
          <List>
            {cartItemsList.map((product) => (
              <ListItem
                key={product.id}
                disablePadding
                className={classes.listItem}
              >
                <div className={classes.listItemContent}>
                  <ListItemIcon className={classes.listItemIcon}>
                    <Avatar
                      alt={product.productName}
                      src={product.productImagesUrls[0]}
                      variant="square"
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={product.productName}
                    className={classes.listItemText}
                  />
                </div>
                <QuantityModifier product={product} showToast={showToast} />
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      ) : (
        <Box sx={{ width: 600 }} role="presentation">
          <Typography
            variant="h4"
            style={{ textAlign: "center", padding: "350px 0" }}
          >
            Nothing in the Cart :{"("}
          </Typography>
        </Box>
      )}
      <CartToastMessage
        open={toastOpen}
        close={() => setToastOpen(false)}
        isDelete={isDelete}
      />
    </>
  );
};

export default CartList;
