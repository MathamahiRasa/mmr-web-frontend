import React, { useState } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { makeStyles } from "@mui/styles";
import Cart from "./Cart";

const useStyles = makeStyles({
  cartContainer: {
    position: "fixed",
    bottom: "25px",
    right: "25px",
    height: "45px",
    width: "45px",
    zIndex: 999,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // background: "radial-gradient(circle at 100px 100px, #5cabff, #000)",
    backgroundColor: "-webkit-linear-gradient(#eee, #333)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    borderRadius: "50%",
    padding: "10px",
    boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
    cursor: "pointer",
    transition: "all .2s ease-in-out",
    "&:hover": {
      background: "linear-gradient(135deg, #da1b60, #ff8a00)",
      transform: "scale(1.2)",
    },
    "@media (max-width: 600px)": {
      bottom: "10px",
      right: "10px",
      padding: "8px",
    },
  },
  cartIcon: {
    transform: "scale(1.5)",
    color: "black",
    "@media (max-width: 600px)": {
      fontSize: "24px",
    },
  },
  cartCount: {
    marginLeft: "5px",
    fontWeight: "bold",
    color: "#fff",
    "@media (max-width: 600px)": {
      fontSize: "12px",
    },
  },
});

const ShoppingCart = () => {
  const classes = useStyles();

  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartClick = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div>
      <div className={classes.cartContainer} onClick={handleCartClick}>
        <ShoppingCartOutlinedIcon className={classes.cartIcon} />
        {/* <span className={classes.cartCount}>1</span> */}
      </div>
      {isCartOpen && <Cart onClose={() => setIsCartOpen(false)} />}
    </div>
  );
};

export default ShoppingCart;
