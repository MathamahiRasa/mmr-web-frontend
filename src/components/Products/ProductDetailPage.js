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
  InputLabel,
  Select,
  FormControl,
  MenuItem,
} from "@mui/material";
import { useRecoilValue } from "recoil";
import { cartItemsWithQuantitySelector } from "../atoms/Atoms";
import { useCartHandler } from "../Reusable/ReusableComponent";
import CartToastMessage from "../Cart/CartToastMessage";
import { useStyles } from "./ProductsStyles/ProductDetailPageStyles";

const ProductDetailPage = () => {
  const classes = useStyles();
  const location = useLocation();
  const { product, reviews } = location.state || {};

  const [toastOpen, setToastOpen] = useState(false);
  const [isDelete, setIsDelete] = useState();
  const { handleChange } = useCartHandler();
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

  const handleAddToCart = (event) => {
    showToast(false);
    handleChange(product, event);
  };

  const showToast = (isDelete) => {
    setIsDelete(isDelete);
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
    <>
      <Box className={classes.root}>
        {/* Section #1 */}
        <div className={classes.section}>
          <Grid container spacing={3}>
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
            <Grid item xs={12} md={6}>
              <div className={classes.productInfo}>
                <Typography variant="h4" gutterBottom>
                  {product.productName}
                </Typography>
                <Typography variant="h5" gutterBottom>
                  Price: ₹{product.productPrice}
                </Typography>
                <Button variant="contained" className={classes.submitButton}>
                  Add to Cart
                </Button>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small" required>
                  <InputLabel>Qunatity</InputLabel>
                  <Select
                    value={quantity}
                    label="Quantity"
                    onChange={handleAddToCart}
                  >
                    {[...Array(product.productStock).keys()].map((value) => (
                      <MenuItem key={value} value={value + 1}>
                        {value + 1}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <div className={classes.userInfo}>
                  <Typography variant="body1" gutterBottom>
                    35k+ users | 50k+ reviews
                  </Typography>
                </div>
              </div>
            </Grid>
          </Grid>

          {/* Section Description */}
          <div className={classes.section}>
            <Typography
              variant="body1"
              gutterBottom
              className={classes.reviewText}
            >
              {product.productDescription}
            </Typography>
          </div>

          {/* Section #2 */}
          <div className={classes.section}>
            <Typography variant="h5" gutterBottom>
              Product Making Process
            </Typography>
          </div>

          {/* Section #3 */}
          <div className={classes.section}>
            <Typography variant="h6" gutterBottom>
              Reviews
            </Typography>
            <div className={classes.reviewsContainer}>
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
              <div className={classes.submitReviewContainer}>
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
              </div>
            </div>
          </div>
        </div>
      </Box>
      <CartToastMessage
        open={toastOpen}
        close={() => setToastOpen(false)}
        isDelete={isDelete}
      />
    </>
  );
};

export default ProductDetailPage;
