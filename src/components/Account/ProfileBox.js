import React from "react";
import {
  svg_account_1,
  svg_account_2,
  svg_logout_1,
  svg_logout_2,
  svg_orderbox,
  svg_profile,
} from "../../data/svg_data";
import { useStyles } from "./ProfileStyles/ProfileBoxStyles";
import { Box, Button, Popover } from "@mui/material";
import { NavLink } from "react-router-dom";

const ProfileBox = ({ isUserMenuOpen, open, onClose }) => {
  const classes = useStyles();

  return (
    <Popover
      anchorReference="anchorPosition"
      anchorPosition={isUserMenuOpen}
      open={open}
      onClose={onClose}
      className={classes.popover}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      <Box className={classes.input}>
        <NavLink className={classes.navLink} to="/profile" onClick={onClose}>
          <Button
            className={classes.value}
            startIcon={
              <svg
                data-name="Layer 2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
              >
                <path d={svg_profile}></path>
              </svg>
            }
          >
            Profile
          </Button>
        </NavLink>
        <NavLink className={classes.navLink} to="/account" onClick={onClose}>
          <Button
            className={classes.value}
            startIcon={
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <path d={svg_account_1}></path>
                <path d={svg_account_2}></path>
              </svg>
            }
          >
            Account
          </Button>
        </NavLink>
        <NavLink
          className={classes.navLink}
          to="/account/orderHistoryPage"
          onClick={onClose}
        >
          <Button
            className={classes.value}
            startIcon={
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d={svg_orderbox}></path>
              </svg>
            }
          >
            Orders
          </Button>
        </NavLink>
        <NavLink className={classes.navLink} to="/logout" onClick={onClose}>
          <Button
            className={classes.value}
            startIcon={
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d={svg_logout_1}></path>
                <path d={svg_logout_2}></path>
              </svg>
            }
          >
            Logout
          </Button>
        </NavLink>
      </Box>
    </Popover>
  );
};

export default ProfileBox;
