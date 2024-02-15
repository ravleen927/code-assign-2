import React from 'react';
import PropTypes from 'prop-types';
import './heroImage.css';

const HeroImage = ({ src, alt, disabled, ...props }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`hero-image ${disabled ? 'disabled' : ''}`}
      {...props}
    />
  );
};

HeroImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

export default HeroImage;
