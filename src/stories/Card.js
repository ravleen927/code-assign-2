import React from 'react';
import PropTypes from 'prop-types';
import './card.css';

/**
 * Simple UI component for displaying a card
 */
const Card = ({ title, content, disabled, ...props }) => {
  return (
    <div className={`storybook-card ${disabled ? 'disabled' : ''}`} {...props}>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

Card.propTypes = {
  /**
   * The title of the card
   */
  title: PropTypes.string.isRequired,
  /**
   * The content of the card
   */
  content: PropTypes.string.isRequired,
  /**
   * Boolean flag to indicate if the card is disabled
   */
  disabled: PropTypes.bool,
};

export default Card;
