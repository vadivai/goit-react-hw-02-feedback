import { Button } from '../FeedbackOptions/FeedbackOptions.styled';

export const Buttons = ({ options, onUpdate }) => {
  return Object.keys(options).map(key => (
    <Button key={key} onClick={() => onUpdate(key)}>
      {key}
    </Button>
  ));
};
