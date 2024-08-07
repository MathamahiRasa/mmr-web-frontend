import {
  Avatar,
  Box,
  Drawer,
  IconButton,
  InputAdornment,
  TextField,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useStyles } from "./NavBarStyles/NavbarStyles";
import SearchIcon from "@mui/icons-material/Search";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useTheme } from "@mui/styles";
import Logo from "../../gallery/logo.png";
import ProfileBox from "../Account/ProfileBox";

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [searchQuery, setSearchQuery] = useState();

  const handleMenubar = () => {
    setIsMenuOpen(true);
  };

  const closeMenubar = () => {
    setIsMenuOpen(false);
  };

  const handleOpenUserMenu = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setIsUserMenuOpen(
      isUserMenuOpen
        ? null
        : { left: rect.left, top: rect.bottom + window.scrollY }
    );
  };

  const handleCloseUserMenu = () => {
    setIsUserMenuOpen(null);
  };

  const handleSearchFocus = () => {
    setIsSearchFocused(true);
  };

  const handleSearchBlur = () => {
    setIsSearchFocused(false);
  };

  //Need to implement based on the state management
  const handleSearch = () => {
    console.log(searchQuery);
  };

  useEffect(() => {
    const scrollCheck = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", scrollCheck);

    return () => {
      window.removeEventListener("scroll", scrollCheck);
    };
  }, [lastScrollY]);

  return (
    <Box className={`${classes.rootBox} ${!showNavbar ? classes.hidden : ""}`}>
      {isMobile ? (
        <>
          <IconButton className={classes.menuItem} onClick={handleMenubar}>
            <MenuRoundedIcon />
          </IconButton>

          <TextField
            className={`${classes.textField} ${
              isSearchFocused ? classes.textFieldFocused : ""
            }`}
            type="search"
            placeholder="Search ..."
            variant="outlined"
            onFocus={handleSearchFocus}
            onBlur={handleSearchBlur}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon
                    className={classes.searchIcon}
                    onClick={handleSearch}
                  />
                </InputAdornment>
              ),
            }}
          />
          <Avatar
            onClick={handleOpenUserMenu}
            className={classes.avatar}
            alt="Nick"
            src="/path/to/avatar.jpg"
          />
          <ProfileBox
            isUserMenuOpen={isUserMenuOpen}
            open={Boolean(isUserMenuOpen)}
            onClose={handleCloseUserMenu}
          />

          <Drawer
            anchor="left"
            open={isMenuOpen}
            onClose={closeMenubar}
            classes={{ paper: classes.drawerPaper }}
          >
            <Box onClick={closeMenubar} className={classes.drawerContent}>
              <IconButton onClick={closeMenubar} className={classes.closeItem}>
                <CloseRoundedIcon />
              </IconButton>
              <div className={classes.drawerLogo}>
                <img src={Logo} alt={"Logo"} />
              </div>
              <NavLink to="/" className={classes.drawerNavLink}>
                HOME
              </NavLink>
              <NavLink to="/about" className={classes.drawerNavLink}>
                ABOUT
              </NavLink>
              <NavLink to="/products" className={classes.drawerNavLink}>
                PRODUCTS
              </NavLink>
              <NavLink to="/contactInfo" className={classes.drawerNavLink}>
                CONTACT US
              </NavLink>
            </Box>
          </Drawer>
        </>
      ) : (
        <>
          <div className={classes.logo}>
            <img src={Logo} className={classes.logoImage} alt="Logo" />
          </div>
          <div className={classes.navLinkRoot}>
            <NavLink to="/" className={classes.navLink}>
              HOME
            </NavLink>
            <NavLink to="/about" className={classes.navLink}>
              ABOUT
            </NavLink>
            <NavLink to="/products" className={classes.navLink}>
              PRODUCTS
            </NavLink>
            <NavLink to="/contactus" className={classes.navLink}>
              CONTACT US
            </NavLink>
          </div>
          <div className={classes.searchContainer}>
            <TextField
              className={`${classes.textField} ${
                isSearchFocused ? classes.textFieldFocused : ""
              }`}
              type="search"
              placeholder="Search ..."
              variant="outlined"
              onFocus={handleSearchFocus}
              onBlur={handleSearchBlur}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon
                      className={classes.searchIcon}
                      onClick={handleSearch}
                    />
                  </InputAdornment>
                ),
              }}
            />
            <Avatar
              onClick={handleOpenUserMenu}
              className={classes.avatar}
              alt="Nick"
              src="/path/to/avatar.jpg"
            />
            <ProfileBox
              isUserMenuOpen={isUserMenuOpen}
              open={Boolean(isUserMenuOpen)}
              onClose={handleCloseUserMenu}
            />
          </div>
        </>
      )}
    </Box>
  );
};

export default Navbar;
