import { useState, useEffect } from 'react';
import Movie from '../../Pages/Movie/Movie';
import { fetchTrending } from '../../Api/fetch';
import Loader from '../../Loader/Loader';

export default function Home() {
  const PENDING = 'pending';
  const RESOLVED = 'resolved';
  const REJECTED = 'rejected';
  const [films, setFilms] = useState(null);
  const [status, setStatus] = useState(PENDING);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTrending()
      .then(result => {
        setFilms(result.results);
        setStatus(RESOLVED);
      })
      .catch(error => {
        setError(error);
        setStatus(REJECTED);
      });
  }, []);

  return (
    <div className="container">
      <h1 className="title">Trending movies today</h1>
      <Movie films={films}></Movie>
      {status === PENDING && <Loader />}
      {status === REJECTED && <h1>{error.message}</h1>}
    </div>
  );
}
