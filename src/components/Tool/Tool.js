import React from 'react';
import PropTypes from 'prop-types';
import './Tool.css';

const Tool = (props) => (
  <div className="Tool">
    <img src={`${process.env.PUBLIC_URL}/${props.imgSrc}`} />
    <span>{props.title}</span>
    <button className="toolAccess hoverRed">ACCESS</button>
  </div>
);

Tool.propTypes = {};

Tool.defaultProps = {};

export default Tool;
