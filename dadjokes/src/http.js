import axios from 'axios';

export const fetchJoke = async () => {
  const url = `https://v2.jokeapi.dev/joke/Programming`;   //`https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,racist,sexist&type=single`
  const params = {
    blacklistFlags: 'nsfw,racist,sexist',
    type: 'single'
  };

  try {
  const response = await axios.get(url, {
    method: 'GET', 
    headers: {
      'Content-Type': 'application/json'
    }});

  const data = await response.json();
  console.log(response.data.results);
  return response.data.results;

  } catch (error) {
    console.error('Fetch error:', error.response.status, error.response.statusText);
    throw new Error(`HTTP-status: ${error.response.status}: ${error.response.statusText}`);
  }
};