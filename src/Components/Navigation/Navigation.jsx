import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

const Navigation = () => (
  <nav className={css.navigation}>
    <NavLink exact="true" to="/" className={css.link}>
      Home
    </NavLink>

    <NavLink to="/movies" className={css.link}>
      Search movies
    </NavLink>
  </nav>
);

export default Navigation;
