import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Container from './Components/Container/Container';
import Header from './Components/Header/Header';
import Loader from './Components/Loader/Loader';

const Home = lazy(() => import('./Components/Pages/Home/Home'));
const MoviesPage = lazy(() =>
  import('./Components/Pages/MoviesPage/MoviesPage')
);
const MovieDetails = lazy(() =>
  import('./Components/Pages/MovieDetails/MovieDetails')
);
const NotFoundView = lazy(() =>
  import('./Components/Pages/NotFoundView/NotFoundView')
);

export default function App() {
  return (
    <Container>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/movies/" element={<MoviesPage />} />
          <Route path="/movies/:movieId/*" element={<MovieDetails />}>
          </Route>
          <Route element={<NotFoundView />} />
        </Routes>
      </Suspense>
    </Container>
  );
}
