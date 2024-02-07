import React from 'react';
import 'react-native-gesture-handler';
import {ThemeProvider} from './src/contexts/ThemeContext.js';
import {CartProvider} from './src/contexts/CartContext.js';
import {UserProvider} from './src/contexts/UserContext.js';
import {StoreProvider} from './src/contexts/StoreContext.js';
import AppContainer from './src/navigations/AppContainer.js';

const App = () => {
  return (
    <StoreProvider>
      <UserProvider>
        <ThemeProvider>
          <CartProvider>
            <AppContainer />
          </CartProvider>
        </ThemeProvider>
      </UserProvider>
    </StoreProvider>
  );
};

export default App;
