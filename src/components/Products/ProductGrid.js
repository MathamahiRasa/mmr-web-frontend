import {
  Box,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import {
  cartItemsWithQuantitySelector,
  selectedProductState,
} from "../atoms/Atoms";
import { useRecoilState, useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
import { useCartHandler } from "../Reusable/ReusableComponent";
import CartToastMessage from "../Cart/CartToastMessage";
import styles from "./ProductsStyles/ProductsGridStyles";

import A1 from "../../gallery/avisaginajala_podi/A1.png";
import I1 from "../../gallery/idli_podi/I1.png";
import M1 from "../../gallery/metkut_podi/M1.png";
import MO1 from "../../gallery/moring_podi/MO1.png";
import S1 from "../../gallery/sambar_podi/S1.png";

import AddToCartButton from "../Helpers/AddToCartButton";
import LikedButton from "../Helpers/LikedButton";

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
  const classes = styles();
  const navigate = useNavigate();

  const [toastOpen, setToastOpen] = useState(false);
  const [isDelete, setIsDelete] = useState();
  const [loadingProducts, setLoadingProducts] = useState({});
  const [selectProduct, setSelectedProduct] =
    useRecoilState(selectedProductState);

  const { handleCart, handleIncreaseQuantity, handleDecreaseQuantity } =
    useCartHandler();
  const cartItemsWithQuantity = useRecoilValue(cartItemsWithQuantitySelector);

  const handleAddToCart = (product) => {
    setLoadingProducts((prev) => ({
      ...prev,
      [product.id]: true,
    }));
    setTimeout(() => {
      handleCart(product);
      setLoadingProducts((prev) => ({
        ...prev,
        [product.id]: false,
      }));
      showToast(false);
    }, 500);
  };

  const handleIncrease = (product) => {
    showToast(false);
    handleIncreaseQuantity(product);
  };

  const handleDecrease = (product) => {
    showToast(true);
    handleDecreaseQuantity(product);
  };

  const showToast = (isDelete) => {
    setIsDelete(isDelete);
    setToastOpen(false);
    setTimeout(() => {
      setToastOpen(true);
    }, 100);
  };

  const detailinfo = (product) => {
    setSelectedProduct(product);
    navigate(`/products/${product.id}`, { state: { product, reviews } });
  };

  const imageMap = {
    1: [A1],
    2: [I1],
    3: [M1],
    4: [MO1],
    5: [S1],
    6: [A1],
    7: [I1],
    8: [M1],
    9: [MO1],
    10: [S1],
    11: [A1],
    12: [I1],
    13: [M1],
    14: [MO1],
    15: [S1],
    16: [A1],
    17: [I1],
    18: [M1],
    19: [MO1],
    20: [S1],
  };

  console.log(selectProduct);

  return (
    <div className={classes.rootContainer}>
      <Box className={classes.root}>
        <Container>
          <Grid container spacing={2} className={classes.gridContainer}>
            {products.map((product) => {
              const cartItem = cartItemsWithQuantity.find(
                (item) => item.id === product.id
              );
              const quantity = cartItem ? cartItem.quantity : 0;
              const loading = loadingProducts[product.id] || false;

              return (
                <Grid item xs={12} sm={6} md={4} key={product.id}>
                  <div className={classes.cardWrapper}>
                    <Card className={classes.card}>
                      <div className={classes.mediaWrapper}>
                        <CardMedia
                          component="img"
                          image={imageMap[product.id]}
                          alt={product.productName}
                          className={classes.media}
                          onClick={() => detailinfo(product)}
                        />
                        <div className={classes.likedButton}>
                          <LikedButton />
                        </div>
                      </div>

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
                          <div className={classes.priceSection}>
                            <span className={classes.weightSection}>₹</span>
                            <span>{product.productPrice}</span>
                            <span className={classes.weightSection}>
                              /100 g
                            </span>
                          </div>
                          {quantity > 0 ? (
                            <>
                              <button
                                key="decrement"
                                className={classes.quantityButton}
                                onClick={() => handleDecrease(product)}
                              >
                                -
                              </button>
                              <span className={classes.quantityValue}>
                                {quantity}
                              </span>
                              <button
                                key="increment"
                                className={classes.quantityButton}
                                onClick={() => handleIncrease(product)}
                              >
                                +
                              </button>
                            </>
                          ) : (
                            <div className={classes.addToCartWrapper}>
                              <AddToCartButton
                                onClick={() => handleAddToCart(product)}
                                className={`${classes.addToCartButton} ${
                                  loading ? classes.disabledButton : ""
                                }`}
                              />
                              {loading && (
                                <CircularProgress
                                  size={18}
                                  className={classes.buttonProgress}
                                />
                              )}
                            </div>
                          )}
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
      <CartToastMessage
        open={toastOpen}
        close={() => setToastOpen(false)}
        isDelete={isDelete}
      />
    </div>
  );
};

export default ProductGrid;
