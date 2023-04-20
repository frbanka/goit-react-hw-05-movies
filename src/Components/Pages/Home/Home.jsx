import { useState, useEffect } from 'react';
import MoviesGallery from '../../MoviesGallery/MoviesGallery';
import { fetchTrendingMovies } from '../../Api/fetch';
import css from './Home.module.css';

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(request => setMovies(request.results));
  }, []);

  // console.log(movies);
  return (
    <div className={css.container}>
      <h1 className={css.head}>Trending today:</h1>

      <MoviesGallery movies={movies} />
    </div>
  );
}
