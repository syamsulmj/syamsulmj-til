import React, { useState } from 'react';
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
import MenuIcon from '@mui/icons-material/Menu';
import InfoIcon from '@mui/icons-material/Info';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import MenuBookIcon from '@mui/icons-material/MenuBook';

const MobileMenu = (props) => {
  const [anchor, setAnchor] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setAnchor(open);
  };

  const setIcon = (slug) => {
    if (slug === 'about_me') {
      return (
        <InfoIcon />
      )
    }
    else if (slug === 'projects') {
      return (
        <AccountTreeIcon />
      )
    }
    else if (slug === 'til') {
      return (
        <MenuBookIcon />
      )
    }
  }

  const renderDrawer = (pages) => {
    return (
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
                <ListItemText primary={page.title} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
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
          <MenuIcon />
        </IconButton>
      </Box>
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
      >
        Syamsul MJ
      </Typography>
      {renderDrawer()}
    </React.Fragment>
  )
}

export default MobileMenu;
