import React from 'react';
import 'react-native-gesture-handler';
import {ThemeProvider} from './src/contexts/ThemeContext.js';
import AppContainer from './src/navigations/AppContainer.js';

const App = () => {
  return (
    <ThemeProvider>
      <AppContainer />
    </ThemeProvider>
  );
};

export default App;
