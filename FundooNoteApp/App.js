import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';

import Navigation from './src/Navigation';
const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Navigation />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '',
  },
});
export default App;
