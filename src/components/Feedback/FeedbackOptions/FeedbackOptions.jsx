import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, leaveVote }) => {
  return (
    <>
      {options.map(option => (
        <button
          className={css.btn}
          key={option}
          type="button"
          onClick={() => leaveVote(option)}
        >
          {option}
        </button>
      ))}
    </>
  );
};

export default FeedbackOptions;

FeedbackOptions.defaultProps = {
  options: [],
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  leaveVote: PropTypes.func.isRequired,
};
