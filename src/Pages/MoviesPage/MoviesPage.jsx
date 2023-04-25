import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Searchbar from '../../Components/Searchbar/Searchbar';
import MoviesGallery from '../../Components/MoviesGallery/MoviesGallery';
import { fetchMovieSearch } from '../../Components/Api/fetch';

export default function MoviesPage() {
  const [, setSearchQuery] = useState('');
  const [movies, setMovies] = useState(null);
  const location = useLocation();

  const query = new URLSearchParams(location.search).get('query') ?? '';

  useEffect(() => {
    if (!query) {
      return;
    }

    fetchMovieSearch(query).then(request => {
      setMovies(request.results);
    });
  }, [query]);

  const onClick = request => {
    setSearchQuery(request);
  };

  return (
    <>
      <Searchbar onSubmit={onClick} />

      {movies && <MoviesGallery movies={movies} />}
    </>
  );
}
