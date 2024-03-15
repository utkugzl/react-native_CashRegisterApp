import {useState, useEffect} from 'react';
import axios from 'axios';

const useFetch = url => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    try {
      const {data: responseData} = await axios.get(url);
      setData(responseData);
    } catch (err) {
      console.log('Error:', err);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return {data, loading};
};

export default useFetch;
