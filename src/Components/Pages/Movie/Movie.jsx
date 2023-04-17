import { useState, useEffect } from 'react';
import styles from './Movie.module.css';
import {
  Route,
  NavLink,
  useParams,
  useNavigate,
  useResolvedPath,
  useLocation,
} from 'react-router-dom';

import { fetchSearchById } from '../../Api/fetch';
import Details from '../../Movies/Details/Details';
import Credits from '../../Movies/Credits/Credits';
import Reviews from '../../Movies/Reviews/Reviews';
import Loader from '../../Loader/Loader';
import PropTypes from 'prop-types';

export default function Movie() {
  const IDLE = 'idle';
  const PENDING = 'pending';
  const RESOLVED = 'resolved';
  const REJECTED = 'rejected';
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { url } = useResolvedPath();
  const [film, setFilm] = useState(null);
  const [status, setStatus] = useState(IDLE);
  const [error, setError] = useState(null);

  useEffect(() => {
    setStatus(PENDING);
    fetchSearchById(movieId)
      .then(result => {
        if (result) {
          setFilm(result);
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

  function goBack() {
    navigate.push(location?.state?.from ?? '/');
  }

  return (
    <div className="container">
      <button className={styles.backBtn} onClick={goBack}>
        Back
      </button>
      {status === RESOLVED && (
        <>
          <Details film={film}></Details>
          <div className={styles.addInfo}>
            <h3 className="title">Additional information</h3>
            <NavLink
              activeClassName={styles.active}
              className={styles.Cast}
              to={{
                pathname: `${url}/credits`,
                state: { ...location.state },
              }}
            >
              Cast
            </NavLink>
            <NavLink
              activeClassName={styles.active}
              className={styles.Reviews}
              to={{
                pathname: `${url}/reviews`,
                state: { ...location.state },
              }}
            >
              Reviews
            </NavLink>
          </div>
        </>
      )}
      {status === PENDING && <Loader />}
      {status === REJECTED && <h1>{error.message}</h1>}
      <Route path="/movies/:movieId/credits" component={Credits} />
      <Route path="/movies/:movieId/reviews" component={Reviews} />
    </div>
  );
}

Movie.propTypes = {
  movieId: PropTypes.string,
};
