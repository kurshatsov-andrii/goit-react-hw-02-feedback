export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul>
      {options.map((option, index) => (
        <li key={index}>
          <button onClick={onLeaveFeedback} name={option}>
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};