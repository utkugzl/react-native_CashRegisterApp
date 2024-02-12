import React from 'react';
import {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ReportsContext = createContext();

const ReportsProvider = ({children}) => {
  const [offlineSalesCount, setOfflineSalesCount] = useState(0);

  const updateOfflineSalesCount = async () => {
    try {
      const offlineSalesString = await AsyncStorage.getItem('offlineSales');
      const offlineSales = JSON.parse(offlineSalesString) || [];
      setOfflineSalesCount(offlineSales.length);
    } catch (error) {
      console.error('Error parsing offlineSales from localStorage:', error);
      //setOfflineSalesCount(0);
    }
  };

  useEffect(() => {
    updateOfflineSalesCount();
  }, []);

  return (
    <ReportsContext.Provider
      value={{
        offlineSalesCount,
        updateOfflineSalesCount,
      }}>
      {children}
    </ReportsContext.Provider>
  );
};

export {ReportsProvider, ReportsContext};
