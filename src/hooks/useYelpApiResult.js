import { useState } from 'react';
import yelp from '../services/yelp';

export default () => {
  const [yelpApiresult, setResult] = useState({ loading: true, data: [], error: null });

  const queryYelpApi = async (term, location = 'paris', limit = 5) => {
    setResult((s) => ({ ...s, loading: true }));
    try {
      const res = await yelp.get('/search', {
        params: {
          limit,
          location,
          term,
        },
      });
      setResult((s) => ({ ...s, loading: false, data: res.data.businesses }));
    } catch (err) {
      setResult((s) => ({ ...s, loading: false, error: err }));
    }
  };
  const resetYelpApiResult = () => {
    setResult((s) => ({ ...s, data: [] }));
  };
  return { queryYelpApi, yelpApiresult, resetYelpApiResult };
};
