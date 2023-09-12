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

  onLeaveFeedback = name => {
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  countPositiveFeedbackPercentage = (good, total) => {
    const positivePercentage = (good * 100) / total;
    return total > 0 ? Math.round(positivePercentage) : 0;
  }

  countTotalFeedback = () => { return Object.values(this.state).reduce(function(sum, el) {
	return sum + el;
  }, 0);  }

    
  render() {
    
    const total = this.countTotalFeedback();

     const positivePercentage = this.countPositiveFeedbackPercentage(
      this.state.good,
      total
    );

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
              {...this.state}
              total={total}
              positivePercentage={positivePercentage}
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