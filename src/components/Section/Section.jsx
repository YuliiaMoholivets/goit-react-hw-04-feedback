import React from 'react';
import css from 'components/Section/Section.module.css';
import PropTypes from 'prop-types';
export const Section = ({ title, children }) => {
  return (
    <div className={css.feedbackDiv}>
      {title ? <h2 className={css.title}>{title}</h2> : null}
      {children}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
