import {View} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeFundoo from '../screens/HomeFundoo';
import Note from '../screens/Note';
import Remainder from '../screens/Remainder';
import CustomDrawer from '../components/CustomDrawer';
import Trash from '../screens/Trash';
import CreateNewLabel from '../screens/CreateNewLabel';
import Setting from '../screens/Setting';
import Archieve from '../screens/Archieve';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {COLOR} from '../utility/Theme';
const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: COLOR.PRIMARY_COLOR,

        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {
          //marginLeft: -8,
          fontFamily: 'Roboto-Medium',
          fontSize: 20,
        },
      }}>
      <Drawer.Screen
        name="FundooNote"
        component={HomeFundoo}
        options={{header: () => null}}
      />
      <Drawer.Screen
        name="Note"
        component={Note}
        options={{
          drawerIcon: ({color}) => (
            <MaterialCommunityIcons
              name="lightbulb-outline"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Remainder"
        component={Remainder}
        options={{
          drawerIcon: ({color}) => (
            <MaterialCommunityIcons
              name="bell-outline"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Create new label"
        component={CreateNewLabel}
        options={{
          drawerIcon: ({color}) => (
            <Entypo name="plus" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Archieve"
        component={Archieve}
        options={{
          drawerIcon: ({color}) => (
            <Ionicon name="archive-outline" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Trash"
        component={Trash}
        options={{
          drawerIcon: ({color}) => (
            <AntDesign name="delete" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Setting"
        component={Setting}
        options={{
          drawerIcon: ({color}) => (
            <Ionicon name="settings-outline" size={24} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
