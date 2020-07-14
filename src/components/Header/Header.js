import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

const Header = () => (
  <div className="Header">
    <img id="starsBg" src={`${process.env.PUBLIC_URL}/stars.png`} />
    <div id="breadWordmark">
        <img id="breadHero" src={`${process.env.PUBLIC_URL}/breadTag.png`} />
        <img id="animatedWordmarkHero" src={`${process.env.PUBLIC_URL}/animatedWordmark.png`} />
    </div>
    {/* TODO - USE THE ACTUAL ASTERISK ASSET */}
    <button id="toLatestDesktop" className="desktopOnly">*GET LATEST VOLUME</button>
    <button id="toLatestMobile" className="mobileOnly hoverRed">GET VOLUME 1: BREAD</button>
  </div>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
