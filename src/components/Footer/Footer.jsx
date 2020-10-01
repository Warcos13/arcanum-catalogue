import React from 'react';
import classes from './Footer.module.css';
import { Button } from 'semantic-ui-react';

const Footer = () => {
  return (
    <div className={classes.footerContainer}>
      <div className={classes.followUsContainer}>
        <div className={classes.followUsLabel}>Siguenos:</div>
        <Button circular color="facebook" icon="facebook" />
        <Button circular color="instagram" icon="instagram" />
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
