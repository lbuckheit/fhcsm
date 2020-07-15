import React from 'react';
import PropTypes from 'prop-types';
import Tool from '../Tool/Tool.js'
import './Issue.css';

const Issue = () => (
  <div className="Issue">
    <div className="issueHeader">
        <span>VOLUME 01</span>
        <span>NEW!</span>
    </div>
    <div className="issueDetails">
        <div className="issueImg">
            <div id="imgSuperimposed">
                <img id="issue01gif" src={`${process.env.PUBLIC_URL}/issue01animated.gif`}/>
                <img id="issue01static" className="blueGlow" src={`${process.env.PUBLIC_URL}/issue01static.png`}/>
            </div>
        </div>
        <div className="issueBullets">
            <span className="issueTitle">MSCHF MAG VOL 01: BREAD</span>
            <button className="issueGetDigital mobileOnly hoverRed">GET FREE DIGITAL COPY</button>
            <span className="issueItem centerFlexTextMobile">56 Pages, Glossy</span>
            <span className="issueItem centerFlexTextMobile">8.25" x 5.25"</span>
            <span className="issueItem bullet">Scam corporate billing departments</span>
            <span className="issueItem bullet">Use Spotify to generate UBI</span>
            <span className="issueItem bullet">Break traffic laws - legally</span>
            <span className="issueItem xMark">PRINT VERSION SOLD OUT</span>
            <button className="issueGetDigital desktopOnly hoverRed">GET FREE DIGITAL COPY</button>
        </div>
    </div>
    <div className="issueTools">
        <div className="toolsHeader">
            <span>TOOLS FOR VOLUME 01</span>
        </div>
        <Tool title="10 Second Consulting" imgSrc="shh.png"></Tool>
        <Tool title="MPFREE" imgSrc="mpfree.png"></Tool>
        <Tool title="UBER HEARSE" imgSrc="hearse.png"></Tool>
    </div>
  </div>
);

Issue.propTypes = {};

Issue.defaultProps = {};

export default Issue;
