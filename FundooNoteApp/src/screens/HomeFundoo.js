import {View, Text, Button} from 'react-native';
 import React, {} from 'react';
import TopBar from '../components/TopBar';
import BottomBar from '../components/BottomBar';
// import {NavigationContainer} from '@react-navigation/native';
// import CustomButton from '../components/CustomButton';
// import {AuthContext} from '../navigation/AuthProvider';
// import Details from '../navigation/Details';
//const Stack = createNativeStackNavigator();

const HomeFundoo = ({navigation}) => {
  //const {logout} = useContext(AuthContext);
  return (
    <View>
      <View>
        <TopBar menuPress={()=>navigation.toggleDrawer()} />
      </View>
      {/* <View>
        <Text>Home Screen</Text>
        <Button
          title="Go to Detail screen"
          onPress={() => navigation.navigate('Details')}
        />
      </View> */}
      {/* <CustomButton text="Logout" onPress={logout} /> */}
      <View>
        <BottomBar />
      </View>
    </View>
  );
};
// const styles = StyleSheet.create({});

export default HomeFundoo;
