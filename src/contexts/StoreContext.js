import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';

const StoreContext = createContext();

const StoreProvider = ({children}) => {
  const [isStoreOnline, setIsStoreOnline] = useState(false);
  const [dailySalesAmount, setDailySalesAmount] = useState(0);
  const [salesCount, setSalesCount] = useState(0);

  const fetchStoreStatus = async () => {
    try {
      const url = 'http://10.0.2.2:3000/store/1';

      const response = await axios.get(url);
      setIsStoreOnline(response.data.isOnline === 'true');
    } catch (error) {
      console.error('Error fetching version:', error);
    }
  };

  const fetchSales = async () => {
    try {
      const url = 'http://10.0.2.2:3000/sales';

      const response = await axios.get(url);
      updateDailySalesAmount(response.data);
      setSalesCount(response.data.length);
    } catch (error) {
      console.error('Error fetching sales:', error);
    }
  };

  const updateDailySalesAmount = async salesData => {
    let totalAmount = 0;
    salesData.forEach(sale => {
      totalAmount += parseFloat(sale.total);
    });
    setDailySalesAmount(totalAmount);

    const url = 'http://10.0.2.2:3000/dailySalesAmount';

    axios
      .put(url, {
        amount: totalAmount,
      })
      .then(response => {
        //console.log('PUT request successful:', response.data);
      })
      .catch(error => {
        console.error('PUT request failed:', error);
      });
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchStoreStatus();
      await fetchSales();
    };

    fetchData(); // Initial fetch

    const interval = setInterval(fetchData, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <StoreContext.Provider
      value={{isStoreOnline, dailySalesAmount, salesCount}}>
      {children}
    </StoreContext.Provider>
  );
};

export {StoreProvider, StoreContext};
