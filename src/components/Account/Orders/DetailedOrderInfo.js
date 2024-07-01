import {
  Avatar,
  Box,
  Button,
  Divider,
  Step,
  StepLabel,
  Stepper,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";
import { useStepIconStyles, useStyles } from "./OrderStyles/DetailedOrderInfo";

const DetailedOrderInfo = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles({ isMobile });
  const location = useLocation();
  const { order } = location.state || {};

  const steps = [
    "Order Confirmed",
    "Processing",
    "Shipped",
    "Out for delivery",
    "Delivered",
  ];

  let index = steps.findIndex((x) => x === order.order.orderStatus);

  console.log(index);

  const CustomStepIcon = ({ active, completed }) => {
    const classes = useStepIconStyles();
    return (
      <div
        className={`${classes.root} ${active ? classes.active : ""} ${
          completed ? classes.completed : ""
        }`}
      />
    );
  };

  return (
    <div className={classes.container}>
      <Box className={classes.userDetailsBox}>
        <Box className={classes.section}>
          <Typography
            variant="h6"
            gutterBottom
            className={classes.sectionTitle}
          >
            Delivery Address
          </Typography>
          <Typography variant="subtitle1" className={classes.textSpacing}>
            {order.user.username.toUpperCase()}
          </Typography>
          <Typography variant="body1" className={classes.textSpacing}>
            {order.user.address}
          </Typography>
          <Typography variant="caption" className={classes.textSpacing}>
            {order.user.phoneNumber}
          </Typography>
        </Box>
        <Divider orientation="vertical" flexItem />
        <Box className={classes.section}>
          <Typography
            variant="h6"
            gutterBottom
            className={classes.sectionTitle}
          >
            MMR Cash
          </Typography>
          <Typography variant="body1" className={classes.textSpacing}>
            You have earned x cash
          </Typography>
        </Box>
        <Divider orientation="vertical" flexItem />
        <Box className={classes.section}>
          <Typography
            variant="h6"
            gutterBottom
            className={classes.sectionTitle}
          >
            More Actions
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            className={classes.textSpacing}
          >
            Download Invoice
          </Typography>
          <Button variant="contained" size="small">
            Download
          </Button>
        </Box>
      </Box>
      <Box className={classes.productDetailsBox}>
        <Avatar
          src={order.product.images[0]}
          alt={order.product.title}
          className={classes.avatar}
        />
        <Box className={classes.productInfo}>
          <Typography className={classes.title} variant="h6">
            {order.product.title}
          </Typography>
          <Typography
            className={classes.price}
            variant="body2"
            color="text.secondary"
          >
            Rs.{order.payment.amount}
          </Typography>
        </Box>
        <Stepper
          className={classes.stepper}
          activeStep={index}
          alternativeLabel
          orientation={"horizontal"}
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel StepIconComponent={CustomStepIcon}>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    </div>
  );
};

export default DetailedOrderInfo;
