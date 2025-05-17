import axios from 'axios';

export const fetchJoke = async () => {
  const url = `https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,racist,sexist&type=single`

  try {
    const response = await axios.get(url);
    
    console.log(response.data);
    return response.data;

  } catch (error) {
    if (error.response) {
        console.error('Error response:', error.response.status, error.response.statusText);
        throw new Error(`HTTP-status: ${error.response.status}: ${error.response.statusText}`);
    } else {
      console.error('Error:', error.message);
      throw new Error(`Fetch error: ${error.message}`);
    }
  }
};

