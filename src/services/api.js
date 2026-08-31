import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// ======================================
// REAL ANIME
// ======================================

export const getRealAnime = async (page = 1, limit = 12) => {
  const response = await API.get("/real-anime", {
    params: {
      page,
      limit,
    },
  });

  return response.data;
};

// ======================================
// SEARCH REAL ANIME
// ======================================

export const searchRealAnime = async (
  query,
  page = 1,
  limit = 12
) => {
  const response = await API.get("/real-anime/search", {
    params: {
      q: query,
      page,
      limit,
    },
  });

  return response.data;
};

// ======================================
// ANIME DETAILS
// ======================================

export const getAnimeDetails = async (id) => {
  const response = await API.get(`/real-anime/${id}`);

  return response.data;
};

// ======================================
// REAL MOVIES
// ======================================

export const getRealMovies = async (
  page = 1,
  limit = 12
) => {
  const response = await API.get("/real-movies", {
    params: {
      page,
      limit,
    },
  });

  return response.data;
};

// ======================================
// SEARCH REAL MOVIES
// ======================================

export const searchRealMovies = async (
  query,
  page = 1,
  limit = 12
) => {
  const response = await API.get("/real-movies/search", {
    params: {
      q: query,
      page,
      limit,
    },
  });

  return response.data;
};

// ======================================
// MOVIE DETAILS
// ======================================

export const getMovieDetails = async (id) => {
  const response = await API.get(`/real-movies/${id}`);

  return response.data;
};

export default API;