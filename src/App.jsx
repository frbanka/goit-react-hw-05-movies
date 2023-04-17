import { Route, Routes, Router, Navigate } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import MovieSearch from './Components/Pages/MovieSearch/MovieSearch';
import Movie from './Components/Pages/Movie/Movie';
import Header from './Components/Header/Header';

export default function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/movies" exact component={MovieSearch} />
          <Route path="/movies/:movieId" component={Movie} />
          <Navigate to="/" />
        </Routes>
      </Router>
    </div>
  );
}
