import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IMAGE_URL } from '../Api/fetch';
import css from './MoviesGallery.module.css';
import image from '../../Images/no-image.png';

const MoviesGallery = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className={css.gallery}>
      {movies.map(movie => {
        if (movie.poster_path === null) {
          return (
            <li key={movie.id} className={css.gallery__item}>
              <Link
                to={{
                  pathname: `/movies/${movie.id}`,
                  state: { from: location },
                }}
                className={css.gallery__link}
              >
                <img
                  src={image}
                  alt={movie.title}
                  className={css.gallery__img}
                />
                <p className={css.gallery__text}>{movie.title}</p>
              </Link>
            </li>
          );
        } else
          return (
            <li key={movie.id} className={css.gallery__item}>
              <Link
                to={{
                  pathname: `/movies/${movie.id}`,
                  state: { from: location },
                }}
                className={css.gallery__link}
              >
                <img
                  src={IMAGE_URL + movie.poster_path}
                  alt={movie.title}
                  className={css.gallery__img}
                />
                <p className={css.gallery__text}>{movie.title}</p>
              </Link>
            </li>
          );
      })}
    </ul>
  );
};

export default MoviesGallery;
