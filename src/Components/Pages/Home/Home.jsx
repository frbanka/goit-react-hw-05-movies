import { useState, useEffect } from 'react';
import MoviesGallery from '../../MoviesGallery/MoviesGallery';
import { fetchTrendingMovies } from '../../Api/fetch';
import '../../../styles.css';

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(request => setMovies(request.results));
  }, []);

  // console.log(movies);
  return (
    <>
      <h1>Trending today</h1>

      <MoviesGallery movies={movies} />
    </>
  );
}
