const API_KEY = "ffd176857c9df21ad4d00f2fa23e4ffd";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json(); // Added parentheses to call the json method
  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`); // Fixed typo
  const data = await response.json(); // Added parentheses to call the json method
  return data.results;
};
