import React, { useState } from 'react';
import { Statistic } from './Statistic/Statistic';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setFeedbackGood] = useState(0);
  const [neutral, setFeedbackNeutral] = useState(0);
  const [bad, setFeedbackBad] = useState(0);

  const countTotalFeedback = () => {
    let total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    let PositiveFeedback = Math.round(good / countTotalFeedback()) * 100 || 0;

    return PositiveFeedback;
  };

  const onLeaveFeedback = option => {
    switch (option) {
      case 'good':
        setFeedbackGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setFeedbackNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setFeedbackBad(prevBad => prevBad + 1);
        break;
      default:
        return;
    }
  };

  // const total = countTotalFeedback();

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />)}
      </Section>
    </>
  );
};
