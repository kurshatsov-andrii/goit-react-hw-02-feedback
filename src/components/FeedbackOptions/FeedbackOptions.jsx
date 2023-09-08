import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={css.feedbacklist}>
      {options.map((option, index) => (
        <li key={index}>
          <button onClick={onLeaveFeedback} name={option} className={css.feedbackbutton}>
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,  
};