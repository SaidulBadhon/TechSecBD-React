import "./Header.css"
import React from 'react';

import { AppBar , Toolbar, Typography, IconButton, Switch, FormControlLabel, FormGroup, makeStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import NavBar from "./NavBar"
import logo from "./img/logo.png"


export default function Header() {
  const [auth, setAuth] = React.useState(true);

  const handleChange = event => {
    setAuth(event.target.checked);
  };

//
//<AppBar position="static" >
//<Toolbar className="TitleBar">
  return (
    <div>
      <header className="Header" position="static" >
        <Toolbar className="TitleBar" >

          <div className="MenuIconButton">
            <IconButton edge="start"  color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
          </div>

          {/*<Typography align="center" variant="h3" className="HaderTitle">
            TechSecBD
          </Typography>*/}
          <img className="Haderlogo" src={logo}/>

          <div className="NavbarPC">
            <NavBar />
          </div>

          <div className="NavbarMobile">
            <NavBar />
          </div>

        </Toolbar>
      </header>
    </div>
  );
}
