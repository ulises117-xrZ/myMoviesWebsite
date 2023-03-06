const API_URL = "https://api.themoviedb.org/3";
const API_KEY = "dae8fa7c019ba4244199fae829b3403a"
export const IMAGE_PATH = "https://image.tmdb.org/t/p/original"
export const URL_IMAGE = "https://image.tmdb.org/t/p/original"

export const currentPopularMovies = (): string=> `${API_URL}/movie/popular?api_key=${API_KEY}&language=en-US`;

export const getMovieDetails = (id: string): string => `${API_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`;

export const getCastMovie = (id: string): string => `${API_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`;

export const getRelatedMovies = (id: string): string => `${API_URL}/movie/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`;

export const getSearch = (query: string): string => `${API_URL}/search/movie?api_key=${API_KEY}&page=1&language=en-US&query=${query}&page=1&include_adult=true`;