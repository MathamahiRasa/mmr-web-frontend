import {
  Container,
  useTheme,
  makeStyles,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@material-ui/core";
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
    height: 500, // Increased carousel height
    [theme.breakpoints.down("sm")]: {
      height: 300,
    },
  },
  carouselImage: {
    height: "100%",
    objectFit: "cover",
  },
  carouselCaption: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "rgba(255, 255, 255, 0.8)", // Semi-transparent background
    padding: theme.spacing(2),
    borderRadius: theme.spacing(1),
  },
  categoriesSection: {
    backgroundColor: theme.palette.grey[100],
    padding: theme.spacing(5),
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
      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
    },
  },
  categoryCardImage: {
    height: 200,
    objectFit: "cover",
    borderRadius: "4px 4px 0 0",
  },
  specialSection: {
    padding: theme.spacing(4),
    backgroundColor: "#f8f8f8",
  },
  sectionHeading: {
    marginBottom: theme.spacing(3),
    textAlign: "center",
    color: theme.palette.primary.main,
  },
  specialCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    minHeight: "300px",
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  specialCardImage: {
    height: "200px",
    objectFit: "cover",
  },
  specialCardContent: {
    padding: theme.spacing(2),
  },
}));

const Home = ({ additionalFeatures }) => {
  const classes = useStyles();
  const theme = useTheme();

  const productCategories = [
    {
      title: "Moringa Powder",
      image: "assets/Moringa.png",
    },
    {
      title: "Idly Karam Powder",
      image: "assets/IdlyKaram.png",
    },
    {
      title: "Flax Seed",
      image: "assets/FlaxSeed.png",
    },
    {
      title: "Sambar Powder",
      image: "assets/Sambar.png",
    },
  ];

  // Sample data for the carousel
  const carouselItems = [
    {
      image: "assets/FlaxSeed.png",
      title: "Product 1",
    },
    {
      image: "assets/FlaxSeed.png",
      title: "Product 2",
    },
    {
      image: "assets/FlaxSeed.png",
      title: "Product 3",
    },
  ];

  // Sample data for the "What makes us special" section
  const specialFeatures = [
    {
      image: "https://via.placeholder.com/150x150?text=Organic",
      title: "100% Home-made",
      description: "All our products are made from organic ingredients.",
    },
    {
      image: "https://via.placeholder.com/150x150?text=Fresh",
      title: "Super-Fresh",
      description: "We use only the freshest produce in our products.",
    },
    {
      image: "assets/Traditional",
      title: "Traditional Recipes",
      description: "Our recipes are based on traditional methods.",
    },
    {
      image: "https://via.placeholder.com/150x150?text=Healthy",
      title: "Customizations Available",
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
          interval={5000}
          indicators={false}
          navButtonsAlwaysVisible={true}
          animation="slide"
        >
          {carouselItems.map((item, index) => (
            <div key={index}>
              <img
                className={classes.carouselImage}
                src={item.image}
                alt={item.title}
              />
            </div>
          ))}
        </Carousel>

        {/* Second Segment: Product Categories */}
        <div className={classes.categoriesSection}>
          <Typography variant="h4" className={classes.sectionHeading}>
            Types Of Podis
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            {productCategories.map((category, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card className={classes.categoryCard}>
                  <CardMedia
                    className={classes.categoryCardImage}
                    image={category.image}
                    title={category.title}
                  />
                  <CardContent>
                    <Typography variant="h6" component="h2" align="center">
                      {category.title}
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
          <Grid container spacing={4} justifyContent="center">
            {specialFeatures && specialFeatures.length > 0 ? (
              specialFeatures.map((feature, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Card className={classes.specialCard}>
                    <CardMedia
                      className={classes.specialCardImage}
                      image={feature.image}
                      title={feature.title}
                    />
                    <CardContent className={classes.specialCardContent}>
                      <Typography variant="h6" component="h2">
                        {feature.title}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {feature.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))
            ) : (
              <Typography variant="body1" color="textSecondary">
                No special features available.
              </Typography>
            )}
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default Home;