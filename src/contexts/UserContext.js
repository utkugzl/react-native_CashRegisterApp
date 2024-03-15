import React, {useEffect} from 'react';
import {createContext, useState} from 'react';
import axios from 'axios';

const UserContext = createContext();

const UserProvider = ({children}) => {
  const [user, setUser] = useState('');
  const [userFavorites, setUserFavorites] = useState([]);
  const [isLogedIn, setIsLogedIn] = useState(false);
  const [isNotificationOn, setIsNotificationOn] = useState(false);

  const updateUserFavorites = async userFavoritess => {
    const url = 'http://10.0.2.2:3000/userFavorites/065434';

    axios
      .put(url, {
        id: '065434',
        favorites: userFavoritess,
      })
      .then(response => {
        //console.log('POST isteği başarılı:', response.data);
      })
      .catch(error => {
        console.error('POST isteği başarısız:', error);
      });
  };

  const getUserFavorites = async => {
    const url = 'http://10.0.2.2:3000/userFavorites/065434';

    axios
      .get(url)
      .then(response => {
        //console.log('GET isteği başarılı:', response.data);
        setUserFavorites(response.data.favorites);
      })
      .catch(error => {
        console.error('POST isteği başarısız:', error);
      });
  };

  const getNotificationStatus = async => {
    const url = 'http://10.0.2.2:3000/notifications';

    axios
      .get(url)
      .then(response => {
        setIsNotificationOn(response.data.isNotificationOn === 'true');
      })
      .catch(error => {
        console.error('POST isteği başarısız:', error);
      });
  };

  const addToFavorites = product => {
    // find the index of the product that the user wants to add to favorites
    const index = userFavorites.findIndex(
      favorite => favorite.id === product.id,
    );

    // Eğer ürün kullanıcının favorilerinde bulunmuyorsa, ekleyin
    if (index === -1) {
      setUserFavorites(prevFavorites => [...prevFavorites, product]);
    }
  };

  const removeFromFavorites = product => {
    // find the index of the product that the user wants to remove from favorites
    const index = userFavorites.findIndex(
      favorite => favorite.id === product.id,
    );

    // if the product is in the user's favorites, remove it
    if (index !== -1) {
      setUserFavorites(prevFavorites =>
        prevFavorites.filter(favorite => favorite.id !== product.id),
      );
    }
  };

  useEffect(() => {
    getUserFavorites();
    getNotificationStatus();
  }, []);

  useEffect(() => {
    updateUserFavorites(userFavorites);
  }, [userFavorites]);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        userFavorites,
        setUserFavorites,
        addToFavorites,
        removeFromFavorites,
        isLogedIn,
        setIsLogedIn,
        isNotificationOn,
        setIsNotificationOn,
      }}>
      {children}
    </UserContext.Provider>
  );
};

export {UserContext, UserProvider};
