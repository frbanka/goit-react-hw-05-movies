import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './MovieSearch.module.css';

import Movie from '../../Pages/Movie/Movie';
import { fetchSearch } from '../../Api/fetch';
import Loader from '../../Loader/Loader';

export default function MovieSearch() {
  const IDLE = 'idle';
  const PENDING = 'pending';
  const RESOLVED = 'resolved';
  const REJECTED = 'rejected';
  const [searchFilmName, setSearchFilmName] = useState('');
  const [films, setFilms] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [status, setStatus] = useState(IDLE);
  const [error, setError] = useState(null);
  const savedSearchQuery = new URLSearchParams(location.search).get('query');

  const searchQuery = query => {
    fetchSearch(query)
      .then(result => {
        if (result.total_results === 0) {
          setError(Error('Nothing found'));
          setStatus(REJECTED);
          return;
        }
        if (result) {
          setFilms(result.results);
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
  };

  useEffect(() => {
    if (savedSearchQuery) searchQuery(savedSearchQuery);
  }, []);

  const searchSubmit = e => {
    e.preventDefault();
    setStatus(PENDING);
    searchQuery(searchFilmName);

    navigate.push({
      ...location,
      search: `query=${searchFilmName}`,
    });
    setSearchFilmName('');
  };

  return (
    <div className="container">
      <h1 className="title">What are you looking for?</h1>
      <form className={styles.searchForm} onSubmit={searchSubmit}>
        <input
          className={styles.filmInput}
          type="text"
          value={searchFilmName}
          autoComplete="off"
          autoFocus
          placeholder="Enter the movie"
          onChange={e => setSearchFilmName(e.target.value)}
        />
        <button className={styles.searchBtn} type="submit">
          Search
        </button>
      </form>
      {status === RESOLVED && <Movie films={films}></Movie>}
      {status === PENDING && <Loader />}
      {status === REJECTED && <h1>{error.message}</h1>}
    </div>
  );
}
