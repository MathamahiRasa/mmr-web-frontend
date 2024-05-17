import { AppBar, Button, IconButton, InputBase, Menu, MenuItem, Toolbar, Typography, useMediaQuery } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import React, { useState } from 'react'
import { Nav } from 'react-bootstrap';

const Navbar = () => {

  const classes = useStyles();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const [menuAnchor, setMenuAnchor] = useState(null);

  const handleMenuOpen = (event) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };


  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.navbar}>
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
          <Nav className={`mr-auto ${menuAnchor ? classes.disabledNavLink : ''}`}>
            <Nav.Link href="#home" className={classes.navLink}>Home</Nav.Link>
            <Nav.Link href="#about" className={classes.navLink}>About</Nav.Link>
            <Nav.Link href="#products" className={classes.navLink}>Products</Nav.Link>
          </Nav>
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
              inputProps={{ 'aria-label': 'search' }}
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
          <Nav.Link href="#home" className={classes.navLink}>Home</Nav.Link>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <Nav.Link href="#about" className={classes.navLink}>About</Nav.Link>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <Nav.Link href="#products" className={classes.navLink}>Products</Nav.Link>
        </MenuItem>
      </Menu>
    </div>
  )
}

export default Navbar;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
  },
  search: {
    position: 'relative',
    borderRadius: '100px',
    backgroundColor: '#e0e0e0',
    '&:hover': {
      backgroundColor: '#d0d0d0',
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#000'
  },
  inputRoot: {
    color: '#000',
    width: '100%',
    border: '2px solid #ccc',
    borderRadius: '100px',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
    '&:focus': {
      outline: 'none',
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  navbar: {
    backgroundColor: 'black',
  },
  navLink: {
    marginRight: theme.spacing(2),
    color: '#ffffff',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
    '&:hover': {
      color: '#cccccc',
    },
    // [theme.breakpoints.down('sm')]: {
    //   display: 'none',
    // },
  },
  disabledNavLink: {
    pointerEvents: 'none',
    opacity: 0.5,
  },
}))

