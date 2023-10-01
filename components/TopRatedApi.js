import axios from 'axios';

const API_KEY = 'c61391f144a2f1f2aeb20d1ab422804d';
const API_URL = 'https://api.themoviedb.org/3/movie/top_rated';

const TopRatedApi = async () => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        api_key: API_KEY,
        page: 1, // You can adjust the page number if needed
      },
    });

    // Check if the request was successful
    if (response.status === 200) {
      const top10Movies = response.data.results.slice(0, 15); // Get the top 10 movies
      return top10Movies;
    } else {
      throw new Error('Failed to fetch data');
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export default TopRatedApi;
