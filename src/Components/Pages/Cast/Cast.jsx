import { useState, useEffect } from 'react';
import { fetchMovieCast, IMAGE_URL } from '../../Api/fetch';
import css from './Cast.module.css';

export default function Cast({ movieId }) {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMovieCast(movieId).then(request => setCast(request.cast));
  }, [movieId]);

  return (
    <ul className={css.list}>
      {cast.map(el => (
        <li className={css.element} key={el.id}>
          <img
            className={css.image}
            src={IMAGE_URL + el.profile_path}
            alt={el.name}
          />
          <p className={css.name} >{el.name}</p>
        </li>
      ))}
    </ul>
  );
}
