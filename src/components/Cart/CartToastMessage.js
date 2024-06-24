import { Alert, Slide, Snackbar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";

const CartToastMessage = ({ open, close, isDelete }) => {
  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={open}
        onClose={close}
        TransitionComponent={SlideTransition}
        // message="Item Added to the cart"
        autoHideDuration={1000}
      >
        {isDelete ? (
          <Alert
            severity="error"
            icon={<CloseIcon fontSize="small" />}
            variant="filled"
            sx={{ width: "200%" }}
          >
            Item Removed from the Cart
          </Alert>
        ) : (
          <Alert severity="success" variant="filled" sx={{ width: "200%" }}>
            Item Added to the Cart
          </Alert>
        )}
      </Snackbar>
    </div>
  );
};

export default CartToastMessage;

export function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}
