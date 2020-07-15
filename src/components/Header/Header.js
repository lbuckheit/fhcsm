import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './Header.css';

const Header = () => {
    function scrollToIssue(type) {
        const offset = type === 'd' ? 0 : 54;
        window.scrollTo({ top: window.innerHeight - offset, behavior: 'smooth' });
    }

    return (
      <div className="Header">
        <img id="starsBg" src={`${process.env.PUBLIC_URL}/stars.png`} />
        <div id="breadWordmark">
            <img id="breadHero" src={`${process.env.PUBLIC_URL}/breadTag.png`} />
            <img id="animatedWordmarkHero" src={`${process.env.PUBLIC_URL}/animatedWordmark.png`} />
        </div>
        <button id="toLatestDesktop" className="desktopOnly" onClick={() => scrollToIssue('d')}>GET LATEST VOLUME</button>
        <button id="toLatestMobile" className="mobileOnly hoverRed" onClick={() => scrollToIssue('m')}>GET VOLUME 1: BREAD</button>
      </div>
    )
};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
