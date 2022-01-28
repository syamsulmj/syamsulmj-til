import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Container
} from '@mui/material';
import DesktopMenu from '/components/common/desktopMenu';
import MobileMenu from '/components/common/mobileMenu';

const Navbar = () => {
  const [drawer, setDrawer] = useState(false);

  const pages = ['About Me', 'Projects', 'Today I Learn - TIL'];

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <DesktopMenu pages={pages} />
          <MobileMenu pages={pages} />
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar;
