import Statistics from 'components/Feedback/Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import { useState } from 'react';
import css from './Feedback.module.css';

const Feedback = () => {
  const [votes, setVotes] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const leaveVote = name => {
    setVotes(prevState => {
      return { ...prevState, [name]: prevState[name] + 1 };
    });
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = votes;
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    const { good } = votes;
    if (!total) {
      return 0;
    }

    const result = ((good / total) * 100).toFixed(2);
    return Number(result);
  };

  const { good, neutral, bad } = votes;
  const total = countTotalFeedback();
  const result = countPositiveFeedbackPercentage('good');

  return (
    <div className={css.wrapper}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          leaveVote={leaveVote}
        />
      </Section>

      {total !== 0 ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={result}
          />
        </Section>
      ) : (
        <Notification notification="*No feedback given" />
      )}
    </div>
  );
};

export default Feedback;
