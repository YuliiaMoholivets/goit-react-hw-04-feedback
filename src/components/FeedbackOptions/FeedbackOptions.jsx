import React from 'react';
import css from 'components/FeedbackOptions/FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <div className={css.buttonDiv}>
      {options.map(option => {
        return (
          <button
            className={css[option]}
            key={option}
            type="button"
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
