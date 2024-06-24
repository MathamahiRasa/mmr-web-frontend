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
import { makeStyles } from "@mui/styles";
import CartToastMessage from "../Cart/CartToastMessage";

const useStyles = makeStyles((theme) => ({
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
}));

const CartList = () => {
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

  console.log("InCart - ", cartItemsList);

  return (
    <>
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
