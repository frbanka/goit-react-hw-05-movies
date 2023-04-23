const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = '543844f1638a5c7bfa18719dc8b6440a';

export const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

async function fetchMain(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not fond'));
}

export function fetchTrendingMovies() {
  return fetchMain(`${BASE_URL}/trending/all/day?api_key=${KEY}`);
}

export function fetchMoviesId(movieId) {
  return fetchMain(
    `${BASE_URL}/movie/${movieId}?api_key=${KEY}&language=en-US`
  );
}

export function fetchMovieSearch(query) {
  return fetchMain(
    `${BASE_URL}/search/movie?api_key=${KEY}&query=${query}&language=en-US&page=1&include_adult=false`
  );
}

export function fetchMovieCast(movieId) {
  return fetchMain(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${KEY}&language=en-US`
  );
}

export function fetchMovieReviews(movieId) {
  return fetchMain(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${KEY}&language=en-US`
  );
}
