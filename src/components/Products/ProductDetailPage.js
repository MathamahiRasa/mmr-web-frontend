import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Box,
  Grid,
  Typography,
  Button,
  TextField,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { useRecoilValue } from "recoil";
import { cartItemsWithQuantitySelector } from "../atoms/Atoms";
import { useCartHandler } from "../Reusable/ReusableComponent";
import CartToastMessage from "../Cart/CartToastMessage";
import { useStyles } from "./ProductsStyles/ProductDetailPageStyles";
import QuantityModifier from "../Reusable/QuantityModifier";
import AddToCartButton from "../Helpers/AddToCartButton";
import CustomerRatings from "../Helpers/CustomerRatings";

const ProductDetailPage = () => {
  const classes = useStyles();
  const location = useLocation();
  const { product, reviews } = location.state || {};

  const [toastOpen, setToastOpen] = useState(false);
  const [isDelete, setIsDelete] = useState();
  const [maxQuantityReached, setMaxQuantityReached] = useState(false);
  const { handleCart } = useCartHandler();
  const currCartState = useRecoilValue(cartItemsWithQuantitySelector);

  const cartItem = currCartState.find((x) => x.id === product.id);
  const quantity = cartItem ? cartItem.quantity : null;

  const productReviews = reviews
    ? reviews.filter((review) => review.productId === reviews.id)
    : [];
  const [newReview, setNewReview] = useState("");

  const handleReviewChange = (event) => {
    setNewReview(event.target.value);
  };

  const handleSubmitReview = () => {
    console.log("New review:", newReview);
    setNewReview("");
  };

  const handleAddToCart = (product) => {
    handleCart(product);
    showToast(false);
  };

  const showToast = (isDelete, isMaxQuantity = false) => {
    setIsDelete(isDelete);
    setMaxQuantityReached(isMaxQuantity);
    setToastOpen(false);
    setTimeout(() => {
      setToastOpen(true);
    }, 100);
  };

  console.log(currCartState);

  if (!product) {
    return (
      <Box className={classes.root}>
        <Typography variant="h4">Product not found</Typography>
        <Link to="/products">Go back to products</Link>
      </Box>
    );
  }

  return (
    <div className={classes.rootContainer}>
      <div className={classes.root}>
        <div className={`${classes.section} ${classes.imageSection}`}>
          <Grid container spacing={3}>
            {/* Image Section */}
            <Grid item xs={12} md={6}>
              <div className={classes.imageContainer}>
                <img
                  key={product.id}
                  src={product.productImagesUrls[0]}
                  alt={product.productImagesUrls[0]}
                  className={classes.image}
                />
              </div>
            </Grid>

            {/* Product Info Section */}
            <Grid item xs={12} md={6}>
              <div className={classes.productInfo}>
                <Typography variant="h4" gutterBottom>
                  {product.productName}
                </Typography>
                <Typography variant="h5" gutterBottom>
                  Price: ₹{product.productPrice}
                </Typography>
                <div className={classes.productActions}>
                  {quantity > 0 ? (
                    <div className={classes.quantityModifierContainer}>
                      <QuantityModifier
                        product={cartItem}
                        maxStock={product.productStock}
                        showToast={showToast}
                      />
                    </div>
                  ) : (
                    <div className={classes.addToCartButton}>
                      <AddToCartButton
                        onClick={() => handleAddToCart(product)}
                      />
                    </div>
                  )}
                </div>

                {/* User Info Section */}
                <div className={classes.userInfo}>
                  <Typography variant="body1" gutterBottom>
                    35k+ users | 50k+ reviews
                  </Typography>
                </div>
              </div>
            </Grid>
          </Grid>

          {/* Description Section */}
          <div className={`${classes.section} ${classes.descriptionSection}`}>
            <Typography variant="h5" className={classes.sectionHeading}>
              Description
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              className={classes.reviewText}
            >
              {product.productDescription}
            </Typography>
          </div>

          {/* Section Ingredients */}
          <div className={`${classes.section} ${classes.ingredientSection}`}>
            <Typography variant="h5" className={classes.sectionHeading}>
              Ingredients
            </Typography>
            <Grid container spacing={2}>
              {product.productIngredients.map((ingredient, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Typography
                    variant="body1"
                    className={classes.ingredientItem}
                  >
                    {ingredient}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </div>

          {/* Section #Making Process */}
          <div className={`${classes.section} ${classes.magicBehindSection}`}>
            <Typography variant="h5" className={classes.sectionHeading}>
              Magic behind
            </Typography>
          </div>

          {/* Section #reviews */}
          <div className={`${classes.section} ${classes.reviewsSection}`}>
            {/* Section #customerRatings */}
            <div className={classes.reviewsContainer}>
              <div className={classes.submitReviewContainer}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <Typography variant="h6" className={classes.sectionHeading}>
                      PLEASE RATE OUR PRODUCT
                    </Typography>
                    <CustomerRatings />
                  </Grid>

                  {/* Section #reviewSection */}
                  <Grid item xs={12} md={6}>
                    <Typography variant="h6" className={classes.sectionHeading}>
                      Reviews
                    </Typography>
                    <div className={classes.reviewsList}>
                      <List>
                        {productReviews.map((review, index) => (
                          <ListItem key={index} className={classes.reviewItem}>
                            <ListItemAvatar>
                              <Avatar>{review.author.charAt(0)}</Avatar>
                            </ListItemAvatar>
                            <ListItemText
                              primary={review.author}
                              secondary={review.text}
                              className={classes.reviewText}
                            />
                          </ListItem>
                        ))}
                      </List>
                    </div>
                    <TextField
                      label="Write a Review"
                      multiline
                      rows={4}
                      variant="outlined"
                      value={newReview}
                      onChange={handleReviewChange}
                      fullWidth
                    />
                    <Button
                      variant="contained"
                      className={classes.submitButton}
                      color="primary"
                      onClick={handleSubmitReview}
                      style={{ marginTop: "1rem" }}
                    >
                      Submit Review
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CartToastMessage
        open={toastOpen}
        close={() => setToastOpen(false)}
        isDelete={isDelete}
        isMaxQuantity={maxQuantityReached}
      />
    </div>
  );
};

export default ProductDetailPage;
