import React from 'react';
import css from './Notification.module.css';
import PropTypes from 'prop-types';
export const Notification = ({ message }) => {
  return (
    <div className={css.div}>
      <p>{message}</p>
    </div>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
