import axios from "axios";

const API_URL = "http://localhost:5000/api/real-anime";

// ======================================
// GET REAL ANIME
// ======================================

export const getRealAnime = async (page = 1, limit = 12) => {
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
// ======================================

export const searchRealAnime = async (
  query,
  page = 1,
  limit = 12
) => {
  const response = await axios.get(`${API_URL}/search`, {
    params: {
      q: query,
      page,
      limit,
    },
  });

  return response.data;
};