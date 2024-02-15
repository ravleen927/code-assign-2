import React from 'react';
import PropTypes from 'prop-types';
import './radioButton.css';

/**
 * Simple UI component for displaying a radio button
 */
const RadioButton = ({ label, checked, disabled, onChange, ...props }) => {
  return (
    <label className={`storybook-radio-button ${disabled ? 'disabled' : ''}`} {...props}>
      <input
        type="radio"
        checked={checked}
        disabled={disabled}
        onChange={onChange}
      />
      <span>{label}</span>
    </label>
  );
};

RadioButton.propTypes = {
  /**
   * The label of the radio button
   */
  label: PropTypes.string.isRequired,
  /**
   * Boolean flag to indicate if the radio button is checked
   */
  checked: PropTypes.bool,
  /**
   * Boolean flag to indicate if the radio button is disabled
   */
  disabled: PropTypes.bool,
  /**
   * Function to handle onChange event
   */
  onChange: PropTypes.func,
};

export default RadioButton;
