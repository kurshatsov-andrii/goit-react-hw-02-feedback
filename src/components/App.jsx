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
    let name = event.target.name;
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  countPositiveFeedbackPercentage = (good, total) => {
    return total > 0 ? Math.round(good * 100 / total) : 0;
  }

  render() {
    
    const { good, neutral, bad } = this.state;    

  this.countTotalFeedback = Object.values(this.state).reduce(function(sum, el) {
	return sum + el;
  }, 0);  

    const total = this.countTotalFeedback;

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)} onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        {total ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}              
              total={total}
              positivePercentage={this.countPositiveFeedbackPercentage(
      good,
      total
    )}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </>
    );
  }
}

export default App;