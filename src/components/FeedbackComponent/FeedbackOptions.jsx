import { Item, Container } from './FeedbackOptions.styled';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <Container>
      {options.map(option => (
        <Item
          key={option}
          type="button"
          onClick={() => {
            onLeaveFeedback(option);
          }}
        >
          {option}
        </Item>
      ))}
    </Container>
  );
}
