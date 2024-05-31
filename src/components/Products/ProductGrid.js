import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { cartItemState, cartItemsWithQuantitySelector } from "../atoms/Atoms";
import { useRecoilState, useRecoilValue } from "recoil";

const ProductGrid = ({ products }) => {
  const classes = useStyles();

  const [cartItems, setCartItems] = useRecoilState(cartItemState);
  const cartItemsWithQuantity = useRecoilValue(cartItemsWithQuantitySelector);

  const handleCart = (product) => {
    var existingCartItem = cartItems.find((item) => item.id === product.id);

    if (existingCartItem) {
      const updateCartItems = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updateCartItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleIncreaseQuantity = (product) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCartItems);
  };

  const handleDecreaseQuantity = (product) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === product.id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartItems(updatedCartItems);
  };

  console.log(cartItems);

  return (
    <Box className={classes.root}>
      <Container>
        <Grid container spacing={2} className={classes.gridContainer}>
          {products.map((product) => {
            const cartItem = cartItemsWithQuantity.find(
              (item) => item.id === product.id
            );
            const quantity = cartItem ? cartItem.quantity : 0;
            return (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <div className={classes.cardWrapper}>
                  <Card className={classes.card}>
                    <CardMedia
                      component="img"
                      image={product.imageUrl}
                      alt={product.name}
                      className={classes.media}
                    />
                    <CardContent className={classes.content}>
                      <div className={classes.productInfo}>
                        <Typography
                          gutterBottom
                          variant="h4"
                          component="div"
                          className={classes.productName}
                        >
                          {product.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          className={classes.productDescription}
                        >
                          {product.description}
                        </Typography>
                      </div>
                      <div className={classes.buttonSection}>
                        <button
                          className={classes.quantityButton}
                          onClick={() => handleDecreaseQuantity(product)}
                          disabled={quantity === 0}
                        >
                          -
                        </button>
                        <span className={classes.quantity}>{quantity}</span>
                        <button
                          className={classes.quantityButton}
                          onClick={() => handleIncreaseQuantity(product)}
                        >
                          +
                        </button>
                        <button
                          onClick={() => handleCart(product)}
                          className={classes.addToCartButton}
                        >
                          Add to Cart
                        </button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: '#EAE7DC',
    fontFamily: '"Audrey", sans-serif',
  },
  gridContainer: {
    marginTop: "20px",
  },
  cardWrapper: {
    borderRadius: "80px",
    height: "500px",
    margin: "10px",
    backgroundColor: "transparent",
    boxShadow: "none",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    transition: "transform 0.3s, box-shadow 0.3s",
    "&:hover": {
      transform: "scale(1.01)",
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
    },
    overflow: "hidden",
    [theme.breakpoints.down("sm")]: {
      height: "auto",
      borderRadius: "20px",
    },
    [theme.breakpoints.down("xs")]: {
      height: "450px",
    },
  },
  card: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  media: {
    height: "250px",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      borderRadius: "20px 20px 0 0",
    },
    [theme.breakpoints.down("xs")]: {
      borderRadius: "0 0 0 0",
    },
  },
  content: {
    backgroundColor: "#FFE5B4",
    borderRadius: "0 0 80px 0",
    padding: "16px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      borderRadius: "0 0 20px 20px",
    },
    [theme.breakpoints.down("xs")]: {
      borderRadius: "0 0 0 0",
    },
  },
  productInfo: {
    flex: "1 0 auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginBottom: "16px",
  },
  productName: {
    fontFamily: '"Audrey", sans-serif',
  },
  productDescription: {
    fontFamily: '"Audrey", sans-serif',
    fontStyle: "italic",
    maxHeight: "100px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    [theme.breakpoints.down("xs")]: {
      maxHeight: "80px",
    },
  },
  buttonSection: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },
  addToCartButton: {
    backgroundColor: "black",
    color: "white",
    padding: "12px 24px",
    borderRadius: "20px",
    fontFamily: '"Audrey", sans-serif',
    cursor: "pointer",
    transition: "transform 0.3s",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  quantity: {
    marginLeft: "8px",
    marginRight: "8px",
    fontFamily: '"Audrey", sans-serif',
  },
  quantityButton: {
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    fontFamily: '"Audrey", sans-serif',
    fontSize: "16px",
    fontWeight: "bold",
    padding: "4px 8px",
    "&:disabled": {
      color: "gray",
      cursor: "not-allowed",
    },
  },
}));

export default ProductGrid;
