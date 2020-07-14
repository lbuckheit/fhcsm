import React from 'react';
import PropTypes from 'prop-types';
import './Footer.css';

const Footer = () => (
  <div className="Footer">
    <span>This is a MSCHF Secret Drop #02</span>
    <span>Download the MSCHF app to get access to drops and future volumes of MSCHF Mag.</span>
    <a className="downloadButton">DOWNLOAD ON THE APP STORE ></a>
    <a className="downloadButton">DOWNLOAD ON THE GOOGLE PLAY ></a>
  </div>
);

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
