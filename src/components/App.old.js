import { Component } from 'react';
import { Buttons } from './Button/Buttons.old';
import { GlobalStyle } from './GlobalStyle';
import { Button } from './FeedbackOptions/FeedbackOptions.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onUpdateState = stateKey => {
    console.log(this.state);
    this.setState(prevState => {
      return {
        [stateKey]: prevState[stateKey] + 1,
      };
    });
  };

  countTotalFeedback = () => {};

  countPositiveFeedbackPercentage = () => {};

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <h2>Please leave feedback</h2>
        <Buttons option="good" onUpdate={this.onUpdateState}></Buttons>
        <Buttons option="neutral" onUpdate={this.onUpdateState}></Buttons>
        <Buttons option="bad" onUpdate={this.onUpdateState}></Buttons>
        <h3>Statistics</h3>
        <span>good: {good}</span>
        <span>neutral: {neutral}</span>
        <span>bad: {bad}</span>
        <GlobalStyle />
      </>
    );
  }
}
