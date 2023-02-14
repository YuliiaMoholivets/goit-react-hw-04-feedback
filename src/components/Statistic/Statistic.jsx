import React from 'react';
import css from 'components/Statistic/Statistic.module.css';
import PropTypes from 'prop-types';
export const Statistic = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div className={css.textDiv}>
      <p className={css.text}>Good: {good}</p>
      <p className={css.text}>Neutral: {neutral}</p>
      <p className={css.text}>Bad: {bad}</p>
      <p className={css.text}>Total feedback: {total}</p>
      {positivePercentage ? (
        <p className={css.text}>Positive feedback {positivePercentage}%</p>
      ) : (
        <p className={css.text}>Positive feedback: 0</p>
      )}
    </div>
  );
};

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
