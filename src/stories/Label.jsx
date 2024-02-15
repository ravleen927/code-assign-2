import React from 'react';
import PropTypes from 'prop-types';
import './label.css';

const Label = ({ text, disabled, ...props }) => {
  return (
    <label className={`label ${disabled ? 'disabled' : ''}`} {...props}>
      {text}
    </label>
  );
};

Label.propTypes = {
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

Label.defaultProps = {
  disabled: false,
};

export default Label;
