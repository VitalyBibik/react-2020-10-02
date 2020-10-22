import React from 'react';
import PropTypes from 'prop-types';
import Review from './review';
import ReviewForm from './review-form';
import styles from './reviews.module.css';
import Loader from '../loader';
import { loadUsers, loadReviews } from '../../redux/actions';
import { connect } from 'react-redux';
import { useEffect } from 'react';

import { usersLoadedSelector } from '../../redux/selectors';

const Reviews = ({ reviews, restaurantId, loadReviews, loadUsers, loaded }) => {
  useEffect(() => {
    loadUsers();
    loadReviews(restaurantId);
  }, [restaurantId]); // eslint-disable-line
  if (!loaded) return <Loader />;
  return (
    <div className={styles.reviews}>
      {reviews.map((id) => (
        <Review key={id} id={id} />
      ))}
      <ReviewForm restaurantId={restaurantId} />
    </div>
  );
};

Reviews.propTypes = {
  restaurantId: PropTypes.string.isRequired,
  reviews: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

const mapStateToProps = (state) => ({
  loaded: usersLoadedSelector(state),
});

export default connect(mapStateToProps, { loadReviews, loadUsers })(Reviews);
