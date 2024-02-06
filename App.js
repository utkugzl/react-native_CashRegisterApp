import React from 'react';
import 'react-native-gesture-handler';
import {ThemeProvider} from './src/contexts/ThemeContext.js';
import {CartProvider} from './src/contexts/CartContext.js';
import {UserProvider} from './src/contexts/UserContext.js';
import AppContainer from './src/navigations/AppContainer.js';

const App = () => {
  return (
    <UserProvider>
      <ThemeProvider>
        <CartProvider>
          <AppContainer />
        </CartProvider>
      </ThemeProvider>
    </UserProvider>
  );
};

export default App;
