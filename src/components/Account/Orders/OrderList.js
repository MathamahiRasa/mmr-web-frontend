import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../../Reusable/Loader";
import { useStyles } from "./OrderStyles/OrderListStyles";

const OrderList = ({ orderHistoryList, isLoading }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const orderDetailedInfo = (order) => {
    navigate(`/orderpage/${order.order.orderId}`, { state: { order } });
  };

  if (isLoading) {
    return <Loader />;
  }

  if (orderHistoryList.length === 0) {
    return (
      <div>
        <Typography className={classes.emptyPage}>
          Nothing to display :)
        </Typography>
      </div>
    );
  }

  console.log(orderHistoryList.length);

  return (
    <div>
      {orderHistoryList.map((order) => (
        <Box
          component="section"
          className={classes.orderBox}
          key={order.product.id}
          onClick={() => orderDetailedInfo(order)}
        >
          <Avatar
            src={order.product.images[0]}
            alt={order.product.title}
            className={classes.avatar}
          />
          <Box className={classes.orderInfo}>
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
            <Typography className={classes.orderId} variant="body2">
              Order ID:{order.order.orderId}
            </Typography>
            <Typography className={classes.status} variant="body2">
              Status: {order.order.orderStatus}
            </Typography>
          </Box>
        </Box>
      ))}
    </div>
  );
};

export default OrderList;
