import React from 'react';
import PropTypes from 'prop-types';
import './img.css';

const Img = ({ src, alt, disabled, ...props }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={disabled ? 'disabled' : ''}
      {...props}
    />
  );
};

Img.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

export default Img;
