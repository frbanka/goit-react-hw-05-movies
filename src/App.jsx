import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Container from './Components/Container/Container';
import Header from './Components/Header/Header';
import Loader from './Components/Loader/Loader';

const Home = lazy(() => import('./Pages/Home/Home'));
const MoviesPage = lazy(() => import('./Pages/MoviesPage/MoviesPage'));
const MovieDetails = lazy(() => import('./Pages/MovieDetails/MovieDetails'));
const NotFoundView = lazy(() => import('./Pages/NotFoundView/NotFoundView'));
const Cast = lazy(() => import('./Pages/Cast/Cast'));
const Reviews = lazy(() => import('./Pages/Reviews/Reviews'));
export default function App() {
  return (
    <Container>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/movies/" element={<MoviesPage />} />
          <Route path="/movies/:movieId/*" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route element={<NotFoundView />} />
        </Routes>
      </Suspense>
    </Container>
  );
}
