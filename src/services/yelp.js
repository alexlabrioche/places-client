import axios from 'axios';

export default axios.create({
  baseURL: `${process.env.REACT_APP_ALLOW_CORS}${process.env.REACT_APP_YELP_URI}`,
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`,
  },
});
