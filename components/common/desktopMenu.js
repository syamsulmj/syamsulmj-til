import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Menu,
  MenuItem,
  IconButton,
  Button
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const DesktopMenu = (props) => {
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

  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        {props.pages.map((page) => (
          <Button
            key={page.slug}
            onClick={() => props.handleNavigation(page.slug)}
            sx={{ my: 2, color: isActive(page.slug), display: 'block' }}
          >
            {page.title}
          </Button>
        ))}
      </Box>
      <Typography
        variant="h5"
        noWrap
        component="div"
        sx={{ flexGrow: 2, display: { xs: 'none', md: 'flex' } }}
      >
        SYAMSUL MJ
      </Typography>
    </React.Fragment>
  )
}

export default DesktopMenu;
