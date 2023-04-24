import { useState, useEffect } from 'react';
import { fetchMovieReviews } from '../../Api/fetch';
import css from './Reviews.module.css';
export default function Reviews({ movieId }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovieReviews(movieId).then(request => setReviews(request.results));
  }, [movieId]);

  return (
    <>
      {reviews.length > 0 ? (
        <ul className={css.list}>
          {reviews.map(el => (
            <li key={el.id} className={css.element}>
              <div className={css.review}>
                <p>
                  <span className={css.review__author}>Author: </span>
                  <span className={css.review__name}>{el.author}</span>
                </p>
                <p className={css.review__text}>{el.content}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <h2>No reviews</h2>
      )}
    </>
  );
}
