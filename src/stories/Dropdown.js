import React from 'react';
import PropTypes from 'prop-types';
import './dropdown.css';

/**
 * Simple UI component for displaying dropdown
 */
const Dropdown = ({ options, defaultValue, disabled, ...props }) => {
  return (
    <select className={`storybook-dropdown ${disabled ? 'disabled' : ''}`} disabled={disabled} {...props}>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

Dropdown.propTypes = {
  /**
   * An array of objects representing options in the dropdown
   * Each object should have a `value` and a `label`
   */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  /**
   * The default selected value in the dropdown
   */
  defaultValue: PropTypes.string,
  /**
   * Boolean flag to indicate if the dropdown is disabled
   */
  disabled: PropTypes.bool,
};

export default Dropdown;
