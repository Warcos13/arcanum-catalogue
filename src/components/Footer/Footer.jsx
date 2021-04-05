import React from 'react';
import generateClases from './Footer.classes.js';
import { IconButton } from '@material-ui/core';

const Footer = () => {
  const classes = generateClases();
  return (
    <div className={classes.footerContainer}>
      <div className={classes.followUsContainer}>
        <div>Siguenos:</div>
        <div className={classes.followUsBtnContainer}>
          <IconButton
            className={`${classes.socialMediaBtn} ${classes.fbBtnColor}`}
          >
            <i className="lab la-facebook-square"></i>
          </IconButton>
          <IconButton
            className={`${classes.socialMediaBtn} ${classes.instaBtnColor}`}
          >
            <i className="lab la-instagram"></i>
          </IconButton>
        </div>
      </div>
      <div className={classes.aditonalInfoContainer}>
        <p>
          Made with <i className="las la-heart" />
        </p>
        <p>Esta web todavia se encuentra en desarrollo</p>
      </div>
    </div>
  );
};

export default Footer;
