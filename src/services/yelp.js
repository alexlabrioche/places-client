import axios from 'axios';

const yelpKey = process.env.YELP_API_KEY;

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: `Bearer ${yelpKey}`,
  },
});
