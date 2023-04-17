import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import MovieSearch from './Components/Pages/MovieSearch/MovieSearch';
import Movie from './Components/Pages/Movie/Movie';
import Header from './Components/Header/Header';

export default function App() {
  return (
    <div className="App">
      <Header></Header>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/movies" exact component={MovieSearch} />
        <Route path="/movies/:movieId" component={Movie} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}
