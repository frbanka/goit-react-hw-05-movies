import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

function Header() {
  return (
    <section className={css.header}>
      <div className="container">
        <NavLink
          to="/"
          exact
          className={css.header__home}
          activeClassName={css.header__active}
        >
          Home
        </NavLink>
        <NavLink
          to="/movies"
          className={css.header__search}
          activeClassName={css.header__active}
        >
          Movies
        </NavLink>
      </div>
    </section>
  );
}
export default Header;
