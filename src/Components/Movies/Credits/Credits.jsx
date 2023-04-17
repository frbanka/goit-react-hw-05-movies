import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCredits } from '../../Api/fetch';
import styles from './Credits.module.css';
import Loader from '../../Loader/Loader';
import PropTypes from 'prop-types';

export default function Credits() {
  const IDLE = 'idle';
  const PENDING = 'pending';
  const RESOLVED = 'resolved';
  const REJECTED = 'rejected';
  const { movieId } = useParams();
  const [actors, setActors] = useState(null);
  const [status, setStatus] = useState(IDLE);
  const [error, setError] = useState(null);

  useEffect(() => {
    setStatus(PENDING);
    fetchCredits(movieId)
      .then(result => {
        if (result) {
          setActors(result.cast);
          setStatus(RESOLVED);
          return;
        }
      })
      .catch(error => {
        setError(error);
        setStatus(REJECTED);
      });
  }, [movieId]);

  return (
    <>
      {status === RESOLVED && (
        <ul className={styles.list}>
          {actors.slice(0, 12).map(actor => (
            <li className={styles.item} key={actor.id}>
              <h3>{actor.name}</h3>
              <img
                src={
                  actor.profile_path
                    ? `https://www.themoviedb.org/t/p/w500${actor.profile_path}`
                    : 'https://windows10free.ru/uploads/posts/2017-04/1493287748_1487679899_icon-user-640x640.png'
                }
                alt={actor.name}
              />

              <p>{actor.character}</p>
            </li>
          ))}
        </ul>
      )}
      {status === PENDING && <Loader />}
      {status === REJECTED && <h1>{error.message}</h1>}
    </>
  );
}

Credits.propTypes = {
  movieId: PropTypes.string,
};
