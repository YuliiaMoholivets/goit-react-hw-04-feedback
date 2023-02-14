import React, { Component } from 'react';
import { Statistic } from './Statistic/Statistic';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // constructor() {
  //   super();
  //   this.countTotalFeedback = this.countTotalFeedback.bind(this);
  //   this.countPositiveFeedbackPercentage =
  //     this.countPositiveFeedbackPercentage.bind(this);
  //   this.onLeaveFeedback = this.onLeaveFeedback.bind(this);
  // }
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const PositiveFeedbackPercentage =
      (this.state.good / this.countTotalFeedback()) * 100;

    return Math.round(PositiveFeedbackPercentage) || 0;
  };
  onLeaveFeedback = option => {
    console.log(option);
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  render() {
    const total = this.countTotalFeedback();

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {total ? (
            <Statistic
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}
// task;
