import 'react-native-gesture-handler';
import React from 'react';
import {AuthProvider} from './src/navigation/AuthProvider';
import Navigation from './src/navigation/Navigation';


const App = () => {
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
};

export default App;
