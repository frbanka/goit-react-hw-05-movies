import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import css from './Searchbar.module.css';

export default function Searchbar({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const handleChange = event => {
    setSearchQuery(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (searchQuery.trim() === '') {
      alert('Enter your request, please!');
      return;
    }
    navigate({ ...location, search: `query=${searchQuery}` });
    onSubmit(searchQuery);
  };

  return (
    <header className={css.searchbar}>
      <form className={css.searchform} onSubmit={handleSubmit}>
        <button type="submit" className={css.searchform__button}>
          Search
        </button>

        <input
          className={css.searchform__input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="enter movie name"
          value={searchQuery}
          onChange={handleChange}
        />
      </form>
    </header>
  );
}
