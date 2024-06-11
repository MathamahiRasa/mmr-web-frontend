import React, { useState } from "react";
import { Box, Button, Modal, Typography } from "@mui/material";
import AddressForm from "./AddressFrom";

const AddressList = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 2,
      }}
    >
      <Typography variant="h5" justifyContent="center">
        Address List
      </Typography>
      <Button type="button" onClick={handleOpenModal} sx={{ mt: 2 }}>
        Add New Address +
      </Button>
      <Modal open={openModal} onClose={handleCloseModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
          }}
        >
          <AddressForm />
        </Box>
      </Modal>
    </Box>
  );
};

export default AddressList;
