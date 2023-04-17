import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from '../../Api/fetch';
import styles from './Reviews.module.css';
import Loader from '../../Loader/Loader';
import PropTypes from 'prop-types';

export default function Reviews() {
  const IDLE = 'idle';
  const PENDING = 'pending';
  const RESOLVED = 'resolved';
  const REJECTED = 'rejected';
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [status, setStatus] = useState(IDLE);
  const [error, setError] = useState(null);

  useEffect(() => {
    setStatus(PENDING);
    fetchReviews(movieId)
      .then(result => {
        if (result) {
          setReviews(result.results);
          setStatus(RESOLVED);
          return;
        }
        setError(Error('Something went wrong'));
        setStatus(REJECTED);
      })
      .catch(error => {
        setError(error);
        setStatus(REJECTED);
      });
  }, [movieId]);

  return (
    <>
      {status === RESOLVED &&
        (reviews.length > 0 ? (
          <ul>
            {reviews.map(review => (
              <li className={styles.item} key={review.id}>
                <h3 className={styles.title}>Author: {review.author}</h3>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <h1>Not found any reviews</h1>
        ))}
      {status === PENDING && <Loader />}
      {status === REJECTED && <h1>{error.message}</h1>}
    </>
  );
}
Reviews.propTypes = {
  movieId: PropTypes.string,
};
