import React from 'react';
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
  return (
    <React.Fragment>
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
      >
        SyamsulMJ
      </Typography>
      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        {props.pages.map((page) => (
          <Button
            key={page}
            sx={{ my: 2, color: 'white', display: 'block' }}
          >
            {page}
          </Button>
        ))}
      </Box>
    </React.Fragment>
  )
}

export default DesktopMenu;
