import React from 'react';
import "./Footer.css";
import { Typography } from '@material-ui/core';

function Footer() {
    return (
        <div>


          <div className="FooterMain">
          <Typography align="center" variant="h6" className="HaderTitle">
            !!! IT CAN BE CHANGED TO ANYTHING !!!
          </Typography>
          </div>

          <div className="BottomFooter">

              <Typography align="center" variant="h6" className="HaderTitle">
                © 2020 Copyright: TechSecBD.com
              </Typography>
          </div>
        </div>

    )
}

export default Footer;
