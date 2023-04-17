const URL = 'https://api.themoviedb.org/3';
const KEY = '543844f1638a5c7bfa18719dc8b6440a';

async function fetchMovies(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}
export function fetchTrending() {
  return fetchMovies(`${URL}/trending/all/day?api_key=${KEY}`);
}
export function fetchSearch(query) {
  return fetchMovies(`${URL}/search/movie?api_key=${KEY}&&query=${query}`);
}
export function fetchSearchById(movieId) {
  return fetchMovies(`${URL}/movie/${movieId}?api_key=${KEY}`);
}
export function fetchCredits(movieId) {
  return fetchMovies(`${URL}/movie/${movieId}/credits?api_key=${KEY}`);
}
export function fetchReviews(movieId) {
  return fetchMovies(`${URL}/movie/${movieId}/reviews?api_key=${KEY}`);
}
