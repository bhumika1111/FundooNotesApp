import {StyleSheet} from 'react-native';
import React from 'react';
import 'react-native-gesture-handler';

import {AuthProvider} from './src/navigation/AuthProvider';

import Navigation from './src/navigation/Navigation';

const App = () => {
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '',
  },
});
export default App;
