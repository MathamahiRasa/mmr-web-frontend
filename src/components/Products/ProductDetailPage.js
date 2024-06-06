import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
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
import { useRecoilState, useRecoilValue } from "recoil";
import { cartItemState, cartItemsWithQuantitySelector } from "../atoms/Atoms";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    backgroundColor: "#f5f5f5",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "auto",
    objectFit: "cover",
    borderRadius: theme.spacing(2),
  },
  productInfo: {
    marginTop: theme.spacing(3),
  },
  reviews: {
    marginTop: theme.spacing(3),
  },
  reviewItem: {
    marginBottom: theme.spacing(2),
    borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
    paddingBottom: theme.spacing(2),
  },
  section: {
    marginBottom: theme.spacing(4),
  },
  reviewsContainer: {
    display: "flex",
    flexDirection: "column",
  },
  reviewsList: {
    flex: 1,
    minWidth: 300,
    marginBottom: theme.spacing(2),
  },
  submitReviewContainer: {
    flex: 1,
    minWidth: 300,
  },
  userInfo: {
    backgroundColor: "#e8f5e9",
    padding: theme.spacing(2),
    borderRadius: theme.spacing(1),
  },
  reviewText: {
    color: "#666",
  },
  submitButton: {
    backgroundColor: "#90EE90",
    color: "#333",
    "&:hover": {
      backgroundColor: "#80de80",
    },
  },
}));

const ProductDetailPage = () => {
  const classes = useStyles();
  const location = useLocation();
  const { product, reviews } = location.state || {};

  const [cartItems, setCartItems] = useRecoilState(cartItemState);
  const currCartState = useRecoilValue(cartItemsWithQuantitySelector);

  const quantity = currCartState.find((x) => x.id === product.id);

  const productReviews = reviews
    ? reviews.filter((review) => review.productId === reviews.id)
    : [];
  const [newReview, setNewReview] = useState("");

  const handleReviewChange = (event) => {
    setNewReview(event.target.value);
  };

  const handleSubmitReview = () => {
    // Handle submitting the new review
    console.log("New review:", newReview);
    setNewReview("");
  };

  const handleChange = (event) => {
    var existingCartItem = cartItems.find((item) => item.id === product.id);

    if (existingCartItem) {
      const updateCartItems = cartItems.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: event.target.value,
              price: event.target.value * product.productPrice,
            }
          : item
      );
      setCartItems(updateCartItems);
    } else {
      setCartItems([
        ...cartItems,
        {
          ...product,
          quantity: event.target.value,
          price: event.target.value * product.productPrice,
        },
      ]);
    }
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
                  onChange={handleChange}
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
  );
};

export default ProductDetailPage;
