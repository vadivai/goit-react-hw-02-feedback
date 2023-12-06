import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import {
  Section,
  FeedbackOptions,
  Statistics,
  StatisticsStyle,
} from 'components';
import { Notification } from './Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onUpdateState = stateKey => {
    this.setState(prevState => {
      return {
        [stateKey]: prevState[stateKey] + 1,
      };
    });
  };

  // countTotalFeedback = ({ good, neutral, bad }) => good + neutral + bad;
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  // countPositiveFeedbackPercentage = ({ good, neutral, bad }) => {
  //   // return Math.round((good / this.countTotalFeedback()) * 100);
  //   return Math.round((good / (good + neutral + bad)) * 100);
  // };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100);
  };

  render() {
    // const { good, neutral, bad } = this.state;
    // const total = good + neutral + bad;
    // const positiveFeedbackPercentage = Math.round((good / this.countTotalFeedback()) * 100);

    const total = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.onUpdateState}
          />
        </Section>
        <Section title="Statistics">
          <StatisticsStyle>
            {total > 0 ? (
              <Statistics
                options={this.state}
                total={total}
                positivePercentage={positiveFeedbackPercentage}
              />
            ) : (
              <Notification />
            )}
          </StatisticsStyle>
        </Section>
        <GlobalStyle />
      </>
    );
  }
}
