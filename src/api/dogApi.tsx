import axios from 'axios';

const BASE_URL = 'https://dog.ceo/api/breeds/image/random';

export const getRandomDogImage = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data.message;
  } catch (error) {
    console.error('Error fetching dog image:', error);
    return null;
  }
};