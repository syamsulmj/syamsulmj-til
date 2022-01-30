import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import CottageIcon from '@mui/icons-material/Cottage';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import MenuBookIcon from '@mui/icons-material/MenuBook';

const MobileMenu = (props) => {
  const [anchor, setAnchor] = useState(false);
  const [pathname, setPathname] = useState("");

  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  const isActive = (slug) => {
    if (pathname === "/" && slug === "home") {
      return "#f4b942";
    }
    else if (pathname === "/projects" && slug === "projects") {
      return "#f4b942";
    }
    else if (pathname === "/today-i-learn" && slug === "til") {
      return "#f4b942";
    }

    return "#ffffff";
  }

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setAnchor(open);
  };

  const setIcon = (slug) => {
    if (slug === 'home') {
      return (
        <CottageIcon style={{ color: isActive(slug) }} />
      )
    }
    else if (slug === 'projects') {
      return (
        <AccountTreeIcon style={{ color: isActive(slug) }} />
      )
    }
    else if (slug === 'til') {
      return (
        <MenuBookIcon style={{ color: isActive(slug) }} />
      )
    }
  }

  const renderDrawer = (pages) => {
    const darkTheme = createTheme({
      palette: {
        mode: 'dark',
      }
    });

    return (
      <ThemeProvider theme={darkTheme}>
        <Drawer
          anchor="bottom"
          open={anchor}
          onClose={toggleDrawer(false)}
        >
          <Box
            sx={{width: 'auto'}}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <List>
              {props.pages.map((page) => (
                <ListItem onClick={() => props.handleNavigation(page.slug)} button key={page.slug}>
                  <ListItemIcon>
                    {setIcon(page.slug)}
                  </ListItemIcon>
                  <ListItemText primary={
                      <Typography style={{ color: isActive(page.slug) }}>
                        {page.title}
                      </Typography>
                    } />
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </ThemeProvider>
    )
  }

  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={toggleDrawer(true)}
          color="inherit"
        >
          <MenuIcon style={{ color: "#f4b942" }} />
        </IconButton>
      </Box>
      <Typography
        variant="h5"
        noWrap
        component="div"
        sx={{ flexGrow: 1.5, display: { xs: 'flex', md: 'none' }, color: "#f4b942" }}
      >
        SYAMSUL MJ
      </Typography>
      {renderDrawer()}
    </React.Fragment>
  )
}

export default MobileMenu;
