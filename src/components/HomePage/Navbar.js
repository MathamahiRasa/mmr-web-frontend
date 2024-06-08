import {
  AppBar,
  Button,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [menuAnchor, setMenuAnchor] = useState(null);

  const handleMenuOpen = (event) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="sticky" className={classes.navbar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleMenuOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Logo
          </Typography>
          {!isSmallScreen && (
            <div className={classes.navLinks}>
              <NavLink
                to="/"
                className={classes.navLink}
                activeClassName={classes.activeNavLink}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={classes.navLink}
                activeClassName={classes.activeNavLink}
              >
                About
              </NavLink>
              <NavLink
                to="/products"
                className={classes.navLink}
                activeClassName={classes.activeNavLink}
              >
                Products
              </NavLink>
            </div>
          )}
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Menu
        id="menu-appbar"
        anchorEl={menuAnchor}
        keepMounted
        open={Boolean(menuAnchor)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>
          <NavLink
            to="/"
            className={classes.menuNavLink}
            activeClassName={classes.activeMenuNavLink}
          >
            Home
          </NavLink>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <NavLink
            to="/about"
            className={classes.menuNavLink}
            activeClassName={classes.activeMenuNavLink}
          >
            About
          </NavLink>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <NavLink
            to="/products"
            className={classes.menuNavLink}
            activeClassName={classes.activeMenuNavLink}
          >
            Products
          </NavLink>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Navbar;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    textAlign: "left",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#e0e0e0",
    "&:hover": {
      backgroundColor: "#d0d0d0",
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#000",
  },
  inputRoot: {
    color: "#000",
    width: "100%",
    // border: "2px solid #ccc",
    // borderRadius: "100px",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    textAlign: "center",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
    "&:focus": {
      outline: "none",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  navbar: {
    backgroundColor: "black !important",
    // display: "flex",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
  navLink: {
    marginRight: theme.spacing(2),
    color: "#ffffff",
    textDecoration: "none",
    transition: "color 0.3s ease",
    "&:hover": {
      color: "#cccccc",
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  activeNavLink: {
    color: "#cccccc",
  },
  menuNavLink: {
    color: "#000000",
    textDecoration: "none",
    "&:hover": {
      color: "#555555",
    },
  },
  activeMenuNavLink: {
    color: "#555555",
  },
  disabledNavLink: {
    pointerEvents: "none",
    opacity: 0.5,
  },
}));
