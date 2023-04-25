import { useState, useEffect, lazy, Suspense } from 'react';
import {
  Link,
  NavLink,
  useParams,
  useLocation,
  Route,
  Routes,
} from 'react-router-dom';
import Loader from '../../Components/Loader/Loader';
import { fetchMoviesId, IMAGE_URL } from '../../Components/Api/fetch';
import css from './MovieDetails.module.css';
import image from '../../Images/no-image.png';

const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));
export default function MovieDetails() {
  const location = useLocation();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMoviesId(movieId).then(movie => {
      setMovie(movie);
    });
  }, [movieId]);

  const backLink = location.state?.from ?? '/';

  return (
    <div className={css.wrapper}>
      {movie && (
        <div className={css.container}>
          <Link to={backLink}>
            <button type="button" className={css.button}>
              ⮜ Back
            </button>
          </Link>
          <div className={css.details}>
            <img
              src={
                movie.poster_path === null
                  ? image
                  : IMAGE_URL + movie.poster_path
              }
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
            <NavLink
              to={`/movies/${movieId}/cast`}
              state={{ from: location.state?.from || '/' }}
              className={css.nav__link}
            >
              Cast
            </NavLink>
            <NavLink
              to={`/movies/${movieId}/reviews`}
              state={{ from: location.state?.from || '/' }}
              className={css.nav__link}
            >
              Reviews
            </NavLink>
          </nav>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="cast" element={<Cast movieId={movieId} />}></Route>
              <Route
                path="reviews"
                element={<Reviews movieId={movieId} />}
              ></Route>
            </Routes>
          </Suspense>
        </div>
      )}
    </div>
  );
}
