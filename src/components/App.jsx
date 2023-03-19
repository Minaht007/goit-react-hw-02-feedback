import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistic } from './Statistics';
import { Notification } from './Notification';
import { Section } from './Section/section';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  addFeedBack = event => {
    this.setState(prevState => {
      return {
        [event.target.name]: prevState[event.target.name] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const add = this.state.good + this.state.neutral + this.state.bad;
    return add;
  };

  countPositiveFeedbackPercentage = () => {
    if (this.state.good) {
      const positiv = Math.round(
        this.state.good / (this.countTotalFeedback() / 100)
      );
      return positiv;
    }
    return 0;
  };
  render() {
    return (
      <div>
        <Section title={'FeedbackOption'}>
          <FeedbackOptions
            options={Object.keys(this.state)}
            addFeedback={this.addFeedBack}
          ></FeedbackOptions>
        </Section>
        <Section title={'Statistic'}>
          {this.countTotalFeedback() ? (
            <Statistic
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              totalFeedback={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message={'There is no feedback'} />
          )}
        </Section>
      </div>
    );
  }
}
