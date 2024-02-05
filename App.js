import React from 'react';
import 'react-native-gesture-handler';
import {ThemeProvider} from './src/contexts/ThemeContext.js';
import {CartProvider} from './src/contexts/CartContext.js';
import AppContainer from './src/navigations/AppContainer.js';

const App = () => {
  return (
    <ThemeProvider>
      <CartProvider>
        <AppContainer />
      </CartProvider>
    </ThemeProvider>
  );
};

export default App;
