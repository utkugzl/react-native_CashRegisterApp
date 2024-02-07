import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';

const StoreContext = createContext();

const StoreProvider = ({children}) => {
  const [isStoreOnline, setIsStoreOnline] = useState(false);

  const fetchStoreStatus = async () => {
    try {
      const url = 'http://10.0.2.2:3000/store/1';

      const response = await axios.get(url);
      setIsStoreOnline(response.data.isOnline === 'true');
    } catch (error) {
      console.error('Error fetching version:', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchStoreStatus();
    };

    fetchData(); // Initial fetch

    const interval = setInterval(fetchData, 6000);

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  return (
    <StoreContext.Provider value={{isStoreOnline}}>
      {children}
    </StoreContext.Provider>
  );
};

export {StoreProvider, StoreContext};
