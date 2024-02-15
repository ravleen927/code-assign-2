import React from 'react';
import PropTypes from 'prop-types';
import './text.css';

/**
 * Simple UI component for displaying text
 */
const Text = ({ text, size, color, disabled, ...props }) => {
  return (
    <div
      className={['storybook-text', `storybook-text--${size}`, disabled && 'storybook-text--disabled'].join(' ')}
      style={{ color }}
      {...props}
    >
      {text}
    </div>
  );
};

Text.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.string,
  disabled: PropTypes.bool,
};

Text.defaultProps = {
  size: 'medium',
  color: '#000000',
  disabled: false,
};

export default Text;
