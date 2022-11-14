/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect, useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {AuthContext} from './AuthProvider';
import AppStack from './AppStack';
import AuthStack from './AuthStack';

const Navigation = () => {
  //****Set an initializing state whilst Firebase connects ******/
  const {user, setUser} = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);
  //****** Handle user state changes*******/
  const onAuthStateChanged = user => {
    setUser(user);

    if (initializing) {
      setInitializing(false);
    }
  };
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // ******unsubscribe on unmount********/
  }, []);

  if (initializing) {
    return null;
  }
  return (
    <NavigationContainer>
      {!user ? <AuthStack /> : <AppStack />}
    </NavigationContainer>
  );
};

export default Navigation;
