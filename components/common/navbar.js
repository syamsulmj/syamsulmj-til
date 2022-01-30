import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Container
} from '@mui/material';
import DesktopMenu from '/components/common/desktopMenu';
import MobileMenu from '/components/common/mobileMenu';
import Styles from '/styles/common/Navbar.module.scss';

const Navbar = () => {
  const [drawer, setDrawer] = useState(false);

  const pages = [
    {
      title: "Home",
      slug: "home"
    },
    {
      title: "Projects",
      slug: "projects"
    },
    {
      title: "Today I Learn - TIL",
      slug: "til"
    }
  ];

  const handleNavigation = (slug) => {

    if (slug === 'home') {
      window.location.href = "/";
    }
    else if (slug === 'projects') {
      window.location.href = "/projects";
    }
    else if (slug === 'til') {
      window.location.href = "/today-i-learn";
    }
  }

  return (
    <AppBar className={Styles.navbar} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <DesktopMenu pages={pages} handleNavigation={handleNavigation} />
          <MobileMenu pages={pages} handleNavigation={handleNavigation} />
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar;
