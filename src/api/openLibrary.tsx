import axios from 'axios';

const BASE_URL = 'https://openlibrary.org/search.json';

export const searchMovies = async (query: string) => {
  try {
    const response = await axios.get(`${BASE_URL}?q=${query}&limit=10`);
    return response.data.docs;
  } catch (error) {
    console.error('Error searching movies:', error);
    return [];
  }
};