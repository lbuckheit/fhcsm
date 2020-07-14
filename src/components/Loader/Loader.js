import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './Loader.css';

const Loader = () => {
    useEffect(() => {
        document.getElementsByClassName('Loader')[0].classList.add('rotate');
        document.getElementsByClassName('Loader')[0].classList.add('hidden');
    });

    return (
        <div className="Loader">
            <div className="loaderContent">
                <span>MSCHF SECRET DROP #02</span>
                <span className="redText">MSCHF MAG VOLUME 1</span>
            </div>
            <div className="gradientBg"></div>
        </div>
    )
};

Loader.propTypes = {};

Loader.defaultProps = {};

export default Loader;
