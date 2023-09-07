import { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notifications/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = event => {
    if (event.target.name === 'good') {
      this.setState(prevState => ({ good: prevState.good + 1 }));
    } else if (event.target.name === 'neutral') {
      this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
    } else if (event.target.name === 'bad') {
      this.setState(prevState => ({ bad: prevState.bad + 1 }));
    }
  };

  countTotalFeedback = (good, neutral, bad) => good + neutral + bad;

  countPositiveFeedbackPercentage = (good, total) => {
    const positivePercentage = (good * 100) / total;
    if (!positivePercentage) {
      return 0;
    } else {
      return Math.round(positivePercentage);
    }
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    const total = this.countTotalFeedback(good, neutral, bad);
    const positivePercentage = this.countPositiveFeedbackPercentage(
      good,
      total
    );

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics"></Section>

        {total ? (
          
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          
        ) : (
          <Notification message="No feedback given" />
        )}
      </>
    );
  }
}

export default App;