import { useState } from 'react';
import { Statistics } from './StatisticsComponent/Statistics';
import { FeedbackOptions } from './FeedbackComponent/FeedbackOptions';
import { Section } from './SectionComponent/SectionTitle';
import { Notification } from './NotificationComponent/Notification';

import { Container } from './App.styled';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleIncrement = state => {
    switch (state) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        alert('We don`t have this feedback option');
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((100 / (good + neutral + bad)) * good) || 0;
  };

  const array = ['good', 'neutral', 'bad'];
  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <Container>
      <Section title="Please Leave Your Feedback">
        <FeedbackOptions options={array} onLeaveFeedback={handleIncrement} />
      </Section>
      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Container>
  );
}
