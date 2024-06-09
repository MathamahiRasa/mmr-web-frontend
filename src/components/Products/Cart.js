import { Drawer } from "@mui/material";
import React from "react";
import CartList from "./CartList";

const Cart = ({ onClose }) => {
  return (
    <div>
      <Drawer anchor="right" open={true} onClose={onClose}>
        <CartList />
      </Drawer>
    </div>
  );
};

export default Cart;
