import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { cartItemState, cartItemsWithQuantitySelector } from "../atoms/Atoms";
import { useRecoilState, useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";

const reviews = [
  {
    id: 1,
    productId: 1,
    author: "John Doe",
    text: "This is an excellent product! Highly recommended.",
    rating: 5,
    date: "2023-05-01",
  },
  {
    id: 2,
    productId: 1,
    author: "Jane Smith",
    text: "Not bad, but could be better. It lacks some features.",
    rating: 3,
    date: "2023-04-15",
  },
  {
    id: 3,
    productId: 2,
    author: "Bob Johnson",
    text: "I love this product! It exceeded my expectations.",
    rating: 4,
    date: "2023-03-20",
  },
  {
    id: 4,
    productId: 2,
    author: "Samantha Williams",
    text: "Decent product, but a bit overpriced in my opinion.",
    rating: 3,
    date: "2023-02-28",
  },
  {
    id: 5,
    productId: 3,
    author: "Michael Brown",
    text: "Absolutely fantastic! I highly recommend this to everyone.",
    rating: 5,
    date: "2023-05-10",
  },
];

const ProductGrid = ({ products }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useRecoilState(cartItemState);
  const cartItemsWithQuantity = useRecoilValue(cartItemsWithQuantitySelector);

  // console.log(cartItemsWithQuantity);

  const handleCart = (product) => {
    var existingCartItem = cartItems.find((item) => item.id === product.id);

    if (existingCartItem) {
      const updateCartItems = cartItems.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity + 1,
              price: (item.quantity + 1) * product.productPrice,
            }
          : item
      );
      setCartItems(updateCartItems);
    } else {
      setCartItems([
        ...cartItems,
        { ...product, quantity: 1, price: product.productPrice },
      ]);
    }
  };

  const handleIncreaseQuantity = (product) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === product.id
        ? {
            ...item,
            quantity: item.quantity + 1,
            price: (item.quantity + 1) * product.productPrice,
          }
        : item
    );
    setCartItems(updatedCartItems);
  };

  const handleDecreaseQuantity = (product) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === product.id && item.quantity > 1
        ? {
            ...item,
            quantity: item.quantity - 1,
            price: (item.quantity - 1) * product.productPrice,
          }
        : item
    );
    setCartItems(updatedCartItems);
  };

  console.log(cartItems);

  const detailinfo = (product) => {
    navigate(`/products/${product.id}`, { state: { product, reviews } });
  };

  return (
    <div
      style={{ backgroundColor: "f2f2f2" }}
      className={classes.rootContainer}
    >
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
                        image={product.productImagesUrls[0]}
                        alt={product.productName}
                        className={classes.media}
                        onClick={() => detailinfo(product)}
                      />
                      <CardContent className={classes.content}>
                        <div className={classes.productInfo}>
                          <Typography
                            gutterBottom
                            variant="h4"
                            component="div"
                            className={classes.productName}
                          >
                            {product.productName}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            className={classes.productDescription}
                          >
                            {product.productDescription}
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
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  rootContainer: {
    minHeight: "100vh",
    height: "100vh",
    // backgroundColor: "#f5f5f5",
  },
  root: {
    // backgroundColor: "#F5F5F5",
    // minHeight: "100vh",
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
    borderRadius: "8px",
    boxShadow: "none",
    overflow: "hidden",
  },
  media: {
    height: "250px",
    width: "100%",
    objectFit: "cover",
    [theme.breakpoints.down("sm")]: {
      borderRadius: "8px 8px 0 0",
    },
    [theme.breakpoints.down("xs")]: {
      borderRadius: "0 0 0 0",
    },
  },
  content: {
    backgroundColor: "#FFF",
    // borderRadius: "0 0 80px 0",
    padding: "16px",
    // width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      borderRadius: "0 0 20px 20px",
    },
    [theme.breakpoints.down("xs")]: {
      borderRadius: "0 0 0 0",
    },
  },
  productInfo: {
    flex: "1 0 auto",
    // display: "flex",
    // flexDirection: "column",
    // justifyContent: "center",
    marginBottom: "16px",
  },
  productName: {
    fontFamily: '"Playfair Display","Audrey", sans-serif',
    lineHeight: "1.5",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    maxWidth: "100%",
    color: "#4d8c57",
  },
  productDescription: {
    fontFamily: '"Lora", sans-serif',
    fontStyle: "italic",
    maxHeight: "100px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    color: "#8c6c51",
    [theme.breakpoints.down("xs")]: {
      maxHeight: "80px",
    },
  },
  buttonSection: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },
  addToCartButton: {
    backgroundColor: "#013220",
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
