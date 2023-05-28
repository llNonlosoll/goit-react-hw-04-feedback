import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  goodIncrement = event => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };

  neutralIncrement = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };

  badIncrement = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return (
      Math.round(
        (100 / (this.state.good + this.state.neutral + this.state.bad)) *
          this.state.good
      ) || 0
    );
  };

  render() {
    // const array = ['good', 'neutral', 'bad'];
    const total = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();

    return (
      <div>
        <h1>Please Leave Your Feedback</h1>
        <button type="button" onClick={this.goodIncrement}>
          Good
        </button>
        <button type="button" onClick={this.neutralIncrement}>
          Neutral
        </button>
        <button type="button" onClick={this.badIncrement}>
          Bad
        </button>
        <h2>Statistics</h2>
        <p>
          Good: <span>{this.state.good}</span>
        </p>
        <p>
          Neutral: <span>{this.state.neutral}</span>
        </p>
        <p>
          Bad: <span>{this.state.bad}</span>
        </p>
        <p>
          Total: <span>{total}</span>
        </p>

        <p>
          Positive feedback: <span>{positiveFeedbackPercentage} %</span>
        </p>
      </div>
    );
  }
}

// export const Profile = ({ userName, tag, location, avatar, stats }) => {
//   return (
//     <div className={css.profile}>
//       <div className={css.description}>
//         <img src={avatar} alt="User avatar" className={css.avatar} />
//         <p className={css.name}>{userName}</p>
//         <p className={css.tag}>{tag}</p>
//         <p className={css.location}>{location}</p>
//       </div>
//       <ul className={css.stats}>
//         <li className={css.statsItem}>
//           <span className={css.label}>Followers</span>
//           <span className={css.quantity}>{stats.followers}</span>
//         </li>
//         <li className={css.statsItem}>
//           <span className={css.label}>Views</span>
//           <span className={css.quantity}>{stats.views}</span>
//         </li>
//         <li className={css.statsItem}>
//           <span className={css.label}>Likes</span>
//           <span className={css.quantity}>{stats.likes}</span>
//         </li>
//       </ul>
//     </div>
//   );
// };

// Profile.propTypes = {
//   userName: PropTypes.string.isRequired,
//   tag: PropTypes.string.isRequired,
//   location: PropTypes.string.isRequired,
//   avatar: PropTypes.string.isRequired,
//   stats: PropTypes.objectOf(PropTypes.number),
// };

export default Feedback;
