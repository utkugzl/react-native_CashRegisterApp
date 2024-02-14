import React from 'react';
import {createContext, useState, useEffect} from 'react';

import {saveData, getData} from '../utils/AsyncStorage.js';

const ThemeContext = createContext();

const ThemeProvider = ({children}) => {
  const [initialThemeLoaded, setInitialThemeLoaded] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const getInitialTheme = async () => {
      try {
        const storedTheme = await getData('isDarkMode');
        setIsDarkMode(storedTheme !== null ? storedTheme : false);
      } catch (error) {
        console.error('Error fetching initial theme:', error);
      } finally {
        setInitialThemeLoaded(true);
      }
    };

    getInitialTheme();
  }, []);

  useEffect(() => {
    if (initialThemeLoaded) {
      saveData('isDarkMode', isDarkMode);
    }
  }, [isDarkMode, initialThemeLoaded]);

  return (
    <ThemeContext.Provider value={{isDarkMode, setIsDarkMode}}>
      {children}
    </ThemeContext.Provider>
  );
};

export {ThemeContext, ThemeProvider};
