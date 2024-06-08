import {
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Carousel from "react-material-ui-carousel";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
  carouselSection: {
    backgroundColor: theme.palette.grey[200],
    padding: theme.spacing(3),
  },
  carousel: {
    height: 400,
    [theme.breakpoints.down("sm")]: {
      height: 300,
    },
  },
  carouselImage: {
    height: "100%",
    objectFit: "cover",
  },
  categoriesSection: {
    backgroundColor: theme.palette.grey[100],
    padding: theme.spacing(3),
  },
  sectionHeading: {
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: theme.spacing(4),
  },
  categoryCard: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    transition: "transform 0.3s",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  categoryCardImage: {
    height: 150,
    objectFit: "cover",
  },
  specialSection: {
    backgroundColor: theme.palette.grey[200],
    padding: theme.spacing(3),
  },
  specialCard: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    transition: "transform 0.3s",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  specialCardImage: {
    height: 150,
    objectFit: "cover",
  },
}));

const Home = () => {
  const classes = useStyles();

  // Sample data for the carousel
  const carouselItems = [
    {
      image: "https://via.placeholder.com/800x400?text=Product+Image+1",
      title: "Product 1",
    },
    {
      image: "https://via.placeholder.com/800x400?text=Product+Image+2",
      title: "Product 2",
    },
    {
      image: "https://via.placeholder.com/800x400?text=Product+Image+3",
      title: "Product 3",
    },
  ];

  // Sample data for the product categories
  const productCategories = ["Pickles", "Podi", "Chutneys", "Snacks"];

  // Sample data for the "What makes us special" section
  const specialFeatures = [
    {
      image: "https://via.placeholder.com/150x150?text=Organic",
      title: "100% Organic",
      description: "All our products are made from organic ingredients.",
    },
    {
      image: "https://via.placeholder.com/150x150?text=Fresh",
      title: "Fresh Produce",
      description: "We use only the freshest produce in our products.",
    },
    {
      image: "https://via.placeholder.com/150x150?text=Traditional",
      title: "Traditional Recipes",
      description: "Our recipes are based on traditional methods.",
    },
    {
      image: "https://via.placeholder.com/150x150?text=Healthy",
      title: "Healthy Ingredients",
      description:
        "Our products are made with healthy and nutritious ingredients.",
    },
  ];

  return (
    <div>
      <Container maxWidth="lg" className={classes.root}>
        {/* First Segment: Carousel of Products */}
        <Carousel
          className={classes.carousel}
          autoPlay={true}
          interval={3000}
          indicators={true}
          navButtonsAlwaysVisible={true}
        >
          {carouselItems.map((item, index) => (
            <div key={index}>
              <img
                className={classes.carouselImage}
                src={item.image}
                alt={item.title}
              />
              <Typography variant="h5" align="center">
                {item.title}
              </Typography>
            </div>
          ))}
        </Carousel>

        {/* Second Segment: Product Categories */}
        <div className={classes.categoriesSection}>
          <Typography variant="h4" className={classes.sectionHeading}>
            Product Categories
          </Typography>
          <Grid container spacing={3}>
            {productCategories.map((category, index) => (
              <Grid item xs={6} sm={6} md={3} key={index}>
                <Card className={classes.categoryCard}>
                  <CardMedia
                    className={classes.categoryCardImage}
                    image="https://via.placeholder.com/150x150?text=Category"
                    title={category}
                  />
                  <CardContent>
                    <Typography variant="h5" component="h2">
                      {category}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>

        {/* Third Segment: What Makes Us Special */}
        <div className={classes.specialSection}>
          <Typography variant="h4" className={classes.sectionHeading}>
            What Makes Us Special
          </Typography>
          <Grid container spacing={3}>
            {specialFeatures.map((feature, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card className={classes.specialCard}>
                  <CardMedia
                    className={classes.specialCardImage}
                    image={feature.image}
                    title={feature.title}
                  />
                  <CardContent>
                    <Typography variant="h5" component="h2">
                      {feature.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default Home;
