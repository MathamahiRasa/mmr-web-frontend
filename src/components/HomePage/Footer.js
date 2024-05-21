import {
  Box,
  Container,
  Grid,
  IconButton,
  InputBase,
  Typography,
  makeStyles,
  useTheme,
} from "@material-ui/core";
import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import PinterestIcon from "@material-ui/icons/Pinterest";
import TwitterIcon from "@material-ui/icons/Twitter";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#000000",
    padding: theme.spacing(6),
    color: "#FFFFFF",
  },
  getInTouch: {
    fontFamily: "Georgia, serif",
    fontSize: "3rem",
    fontWeight: "bold",
    marginBottom: theme.spacing(2),
    textShadow: "2px 2px 4px rgba(255, 255, 255, 0.3)",
  },
  tagline: {
    marginBottom: theme.spacing(4),
  },
  socialIcons: {
    display: "flex",
    justifyContent: "center",
    marginBottom: theme.spacing(4),
  },
  socialIcon: {
    color: "#FFFFFF",
    margin: theme.spacing(0, 1),
    fontSize: "2rem",
    transition: "transform 0.3s",
    "&:hover": {
      transform: "scale(1.2)",
    },
  },
  contactInfo: {
    marginBottom: theme.spacing(2),
  },
  subscribeBox: {
    backgroundColor: "#FFFFFF",
    color: "#000000",
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    position: "relative",
    display: "inline-block",
    marginBottom: theme.spacing(2),
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    "&::after": {
      content: '""',
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "calc(100% + 16px)",
      height: "calc(100% + 16px)",
      backgroundColor: "rgba(0, 0, 0, 0.2)",
      borderRadius: theme.shape.borderRadius,
      zIndex: -1,
    },
  },
  subscribeInput: {
    flex: 1,
    marginRight: theme.spacing(1),
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h2" className={classes.getInTouch}>
              Get in Touch
            </Typography>
            <Typography variant="body1" className={classes.tagline}>
              Talk to us for better results
            </Typography>
            <div className={classes.socialIcons}>
              <InstagramIcon className={classes.socialIcon} />
              <LinkedInIcon className={classes.socialIcon} />
              <PinterestIcon className={classes.socialIcon} />
              <TwitterIcon className={classes.socialIcon} />
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box className={classes.contactInfo}>
              <Typography variant="body1">mmr@gmail.com</Typography>
            </Box>
            <Box className={classes.subscribeBox}>
              <Typography variant="h6" mr={2}>
                Subscribe to Newsletter
              </Typography>
              <InputBase
                className={classes.subscribeInput}
                placeholder="Enter your email"
                inputProps={{ "aria-label": "subscribe" }}
              />
              <IconButton aria-label="Subscribe">
                <MailOutlineIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
