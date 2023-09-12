import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
   <ul className={css.feedbacklist}>
      {options.map((name) => (
         <li key={name}><button type="button" name={name} className={css.feedbackbutton} onClick={() => onLeaveFeedback(name)}>{name}</button></li>
      ))}
   </ul>
);

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,  
};