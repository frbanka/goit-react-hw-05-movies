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
import styles from '../../Navigation/Navigation.module.css';
import '../../../styles.css';

const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));

export default function MovieDetailsPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  let locationValue = location.state;
  if (location.state) {
    locationValue = location.state.from;
  }

  useEffect(() => {
    fetchMoviesId(movieId).then(movie => {
      setMovie(movie);
      // console.log(movie)
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
    <>
      {movie && (
        <>
          <button type="button" className="Button" onClick={onGoBack}>
            ⇚ Go Back
          </button>

          <div className="DetailsPage">
            <img
              src={IMAGE_URL + movie.poster_path}
              alt={movie.title}
              className="DetailsPage_img"
            />
            <div>
              <h2>{movie.title}</h2>
              <p>
                <span>Rating: </span>
                {movie.vote_average}
              </p>
              <p>
                <span>Overview: </span>
                {movie.overview}
              </p>
              <p>
                <span>Genres: </span>
                {movie.genres.map(genre => genre.name).join(' ')}
              </p>
            </div>
          </div>

          <hr />

          <h3>Additional information</h3>

          <nav>
            <NavLink to={`/movies/${movieId}/cast`} className={styles.link}>
              Cast
            </NavLink>

            <NavLink to={`/movies/${movieId}/reviews`} className={styles.link}>
              Reviews
            </NavLink>
          </nav>

          <hr />

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
        </>
      )}
    </>
  );
}
