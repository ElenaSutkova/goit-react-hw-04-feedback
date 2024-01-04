import React, { useState } from 'react';
import Feedback from './Feedback/Feedback';
import Notification from './Notification/Notification';
import Section from './Section/Section';
import Statistic from './Statistic/Statistic';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = (type) => {
    switch (type) {
      case 'good':
        setGood((prevGood) => prevGood + 1);
        break;
      case 'neutral':
        setNeutral((prevNeutral) => prevNeutral + 1);
        break;
      case 'bad':
        setBad((prevBad) => prevBad + 1);
        break;
      default:
        break;
    }
  };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedback = () => {
    const total = countTotalFeedback();
    return total ? Math.round((good / total) * 100) : 0;
  };

  const totalFeedback = countTotalFeedback();
  const positivePercentage = countPositiveFeedback();
  const showStatistic = totalFeedback > 0;

  return (
    <div>
      <Section title="Please leave feedback">
        <Feedback options={['good', 'neutral', 'bad']} onLeaveFeedback={handleFeedback} />
      </Section>

      {showStatistic ? (
        <Section title="Statistic">
          <Statistic good={good} neutral={neutral} bad={bad} total={totalFeedback} positivePercentage={positivePercentage} />
        </Section>
      ) : (
          <Notification message="There is no feedback" />
      )}
    </div>
  )
}

export default App;