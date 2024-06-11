import React, { useState } from "react";
import {
  Avatar,
  Box,
  IconButton,
  Grid,
  Paper,
  Typography,
  Drawer,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import AddressList from "./AddressList";
import { userAddressState } from "../atoms/AddressAtom";
import { useRecoilValue } from "recoil";

const Profile = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  const addressList = useRecoilValue(userAddressState);

  console.log("Profile", addressList);

  return (
    <div>
      <Typography variant="h4">Welcome user!</Typography>
      <Box sx={{ flexGrow: 0 }}>
        <IconButton>
          <Avatar alt="User" />
        </IconButton>
      </Box>
      <Box sx={{ flexGrow: 1 }} justifyContent="center">
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={3}>
            <StyledButton onClick={toggleDrawer}>
              Add new address <span>{">"}</span>
            </StyledButton>
            <Drawer
              anchor="right"
              sx={{ width: 400, "& .MuiDrawer-paper": { width: 400 } }}
              open={isDrawerOpen}
              onClose={toggleDrawer}
            >
              <AddressList />
            </Drawer>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Profile;

const StyledButton = styled(Paper)(({ theme }) => ({
  backgroundColor: "lightgrey",
  ...theme.typography.body2,
  padding: "15px",
  textAlign: "center",
  color: "black",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  cursor: "pointer",
}));
