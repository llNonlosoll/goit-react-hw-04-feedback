import PropTypes from 'prop-types';
import { Item, Container } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
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
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
