import axios from "axios";

const API_URL = "http://localhost:5000/api/real-anime";

// ======================================
// GET REAL ANIME
// GET /api/real-anime?page=1&limit=12
// ======================================

export const getRealAnime = async (
  page = 1,
  limit = 12
) => {
  const response = await axios.get(API_URL, {
    params: {
      page,
      limit,
    },
  });

  return response.data;
};

// ======================================
// SEARCH REAL ANIME
// GET /api/real-anime/search?q=naruto
// ======================================

export const searchRealAnime = async (
  query,
  page = 1,
  limit = 12
) => {
  const response = await axios.get(
    `${API_URL}/search`,
    {
      params: {
        q: query,
        page,
        limit,
      },
    }
  );

  return response.data;
};

// ======================================
// GET REAL ANIME DETAILS
// GET /api/real-anime/:id
// ======================================

export const getRealAnimeDetails = async (
  id
) => {
  const response = await axios.get(
    `${API_URL}/${id}`
  );

  return response.data;
};