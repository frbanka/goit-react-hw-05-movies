import { useState, useEffect, lazy, Suspense } from 'react';
import {
  NavLink,
  Routes,
  Route,
  useParams,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import Loader from '../../Loader/Loader';
import { fetchMoviesId, IMAGE_URL } from '../../Api/fetch';
import css from './MovieDetails.module.css';
import image from '../../../Images/no-image.png';

const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));

export default function MovieDetailsPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    fetchMoviesId(movieId).then(movie => {
      setMovie(movie);
    });
  }, [movieId]);

  const onGoBack = () => {
    if (!location.state) {
      navigate('/');
      return;
    }
    navigate(`${location.state.from.pathname}${location.state.from.search}`);
  };

  return (
    <div className={css.wrapper}>
      {movie && (
        <container className={css.container}>
          <button type="button" className={css.button} onClick={onGoBack}>
            ⮜ Back
          </button>
          <div className={css.details}>
            <img
              src={IMAGE_URL + movie.poster_path}
              alt={movie.title}
              className={css.details__img}
            />
            <div className={css.details__descr}>
              <h2>{movie.title}</h2>
              <p className={css.details__rate}>
                <span>Rating: </span>
                {movie.vote_average}
              </p>
              <p className={css.details__plot}>
                <span className={css.plot__span}>Plot: </span>
                {movie.overview}
              </p>
              <p className={css.details__genres}>
                <span className={css.genres__span}>Genres: </span>
                {movie.genres.map(genre => genre.name).join(' ')}
              </p>
            </div>
          </div>
          <h3>Additional information</h3>
          <nav className={css.nav}>
            <NavLink to={`/movies/${movieId}/cast`} className={css.nav__link}>
              Cast
            </NavLink>
            <NavLink
              to={`/movies/${movieId}/reviews`}
              className={css.nav__link}
            >
              Reviews
            </NavLink>
          </nav>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route
                path={`/movies/${movieId}/cast`}
                element={<Cast movieId={movieId} />}
              />
              <Route
                path={`/movies/${movieId}/reviews`}
                element={<Reviews movieId={movieId} />}
              />
            </Routes>
          </Suspense>
        </container>
      )}
    </div>
  );
}
