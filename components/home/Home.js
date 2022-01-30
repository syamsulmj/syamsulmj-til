import React from 'react';
import Styles from '/styles/home/Home.module.scss';
import {
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Home = () => {
  const handleResume = () => {
    window.location.href = "/SYAMSUL_MJ_CV_DEC_2021.pdf";
  }

  return (
    <div className={Styles.home}>
      <div className={Styles.title}>
        <div className={Styles.bigTitle}>
          <span>HELLO</span>
        </div>
        <div className={Styles.mdTitle}>
          <span>I Am Web Developer</span>
        </div>
        <div className={Styles.resume}>
          <a href="/SYAMSUL_MJ_CV_DEC_2021.pdf" target="_blank" className={Styles.bigBtn}>
            Get My Resume
          </a>
        </div>
        <div className={Styles.socialMedia}>
          <Grid container spacing={4} justifyContent="center">
            <Grid item>
              <a href="https://github.com/syamsulmj" target="_blank">
                <Avatar sx={{ bgcolor: '#f4b942' }}>
                  <GitHubIcon style={{color: '#000'}}/>
                </Avatar>
              </a>
            </Grid>
            <Grid item>
              <a href="https://www.linkedin.com/in/syamsul-mohd-jafri-3370a1158/" target="_blank">
                <Avatar sx={{ bgcolor: '#f4b942' }}>
                  <LinkedInIcon style={{color: '#000'}} />
                </Avatar>
              </a>
            </Grid>
          </Grid>
        </div>
      </div>
      <div className={Styles.profile}>
        <Grid container spacing={10}>
          <Grid className={Styles.aboutMe} item xs={12} sm={4}>
            <div className={Styles.amTitle}>
              About Me
            </div>
            <div className={Styles.amContent}>
              I'M A FULLSTACK SOFWARE ENGINEER
              MAINLY ON ELIXIR/PHOENIX, REACTJS,
              LARAVEL
            </div>
          </Grid>
          <Grid className={Styles.experience} item xs={12} sm={8}>
            <div className={Styles.expTitle}>
              Experience
            </div>
            <div className={Styles.expContent}>
              <List dense={false}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar alt="popsical" src="/companies-logo/popsical.png" />
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Typography style={{ fontSize: "1rem", color: "white", fontWeight: 'bold' }}>
                        SENIOR SOFTWARE ENGINEER (WEB DEV TEAM LEAD) AT POPSICAL KARAOKE SDN. BHD. — JUN 2020 - PRESENT
                      </Typography>
                    }
                    secondary={
                      <Typography style={{ fontSize: ".8rem", color: "#d2d2d2" }}>
                        Core Backend Developer for the company to handle the company’s Karaoke system. Tech Stacks are Elixir/Phoenix Framework, Ruby on Rails, Reactjs
                      </Typography>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar alt="eatzeely" src="/companies-logo/eatzeely.jpeg" />
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Typography style={{ fontSize: "1rem", color: "white", fontWeight: 'bold' }}>
                        FULLSTACK SOFTWARE ENGINEER AT EATZEELY SDN. BHD. — MARCH 2020 - 2020 JUN
                      </Typography>
                    }
                    secondary={
                      <Typography style={{ fontSize: ".8rem", color: "#d2d2d2" }}>
                        Created Vendor's dashboard (ReactJS) and Mobile App (Flutter) Maintainer
                      </Typography>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar alt="naluri" src="/companies-logo/naluri.jpeg" />
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Typography style={{ fontSize: "1rem", color: "white", fontWeight: 'bold' }}>
                        FULLSTACK SOFTWARE ENGINEER AT NALURI HIDUP SDN. BHD. — 2019 - 2020
                      </Typography>
                    }
                    secondary={
                      <Typography style={{ fontSize: ".8rem", color: "#d2d2d2" }}>
                        Handle Backend and Frontend system for internal users to interact with customers
                      </Typography>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar alt="intel" src="/companies-logo/intel.png" />
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Typography style={{ fontSize: "1rem", color: "white", fontWeight: 'bold' }}>
                        SOFTWARE ENGINEER (SOFTWARE GRAPHICS & MEDIA ENGINEER) AT INTEL MALAYSIA — 2018 - 2019
                      </Typography>
                    }
                    secondary={
                      <Typography style={{ fontSize: ".8rem", color: "#d2d2d2" }}>
                        Responsible in Android and Linux Kernel and also driver level development and debugging
                      </Typography>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar alt="fave" src="/companies-logo/fave.png" />
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Typography style={{ fontSize: "1rem", color: "white", fontWeight: 'bold' }}>
                        SOFTWARE INTERNSHIP (WEB MAINTAINER) IN FAVE MALAYSIA — 2017
                      </Typography>
                    }
                    secondary={
                      <Typography style={{ fontSize: ".8rem", color: "#d2d2d2" }}>
                        Responsible in maintaining company's web app using Elixir/Phoenix with ReactJS
                      </Typography>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar alt="freelance" src="/companies-logo/unrelated-freelance-logo.jpeg" />
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Typography style={{ fontSize: "1rem", color: "white", fontWeight: 'bold' }}>
                        ALL TIME FREELANCE WEB DEVELOPER 2016 - PRESENT
                      </Typography>
                    }
                    secondary={
                      <Typography style={{ fontSize: ".8rem", color: "#d2d2d2" }}>
                        Stacks mostly in Laravel, ReactJS, Elixir/Phoenix
                      </Typography>
                    }
                  />
                </ListItem>
              </List>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Home;
