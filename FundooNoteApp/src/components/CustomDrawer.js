import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {COLOR} from '../utility/Theme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
const CustomDrawer = ({props, navigation}) => {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.body}>
          <Text
            style={{
              fontSize: 30,
              color: COLOR.PRIMARY_COLOR,
              fontFamily: 'arial',
              fontWeight: 'bold',
              paddingLeft: 20,
            }}>
            FundooNotes
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Notes');
          }}>
          <View style={{flexDirection: 'row', paddingTop: 10, paddingLeft: 22}}>
            <MaterialCommunityIcons
              name="lightbulb-outline"
              size={24}
              color={'gray'}
            />
            <Text
              style={{
                fontSize: 17,
                color: 'black',
                fontFamily: 'arial',
                paddingLeft: 17,
              }}>
              Notes
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Remainder');
          }}>
          <View style={{flexDirection: 'row', paddingTop: 27, paddingLeft: 22}}>
            <MaterialCommunityIcons
              name="bell-outline"
              size={24}
              color={'gray'}
            />
            <Text
              style={{
                fontSize: 17,
                color: 'black',
                fontFamily: 'arial',
                paddingLeft: 17,
              }}>
              Remainder
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Create new label');
          }}>
          <View style={{flexDirection: 'row', paddingTop: 27, paddingLeft: 22}}>
            <Entypo name="plus" size={24} color={'gray'} />
            <Text
              style={{
                fontSize: 17,
                color: 'black',
                fontFamily: 'arial',
                paddingLeft: 17,
              }}>
              CreateNewLabel
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Archieve');
          }}>
          <View style={{flexDirection: 'row', paddingTop: 27, paddingLeft: 22}}>
            <Ionicons name="archive-outline" size={24} color={'gray'} />
            <Text
              style={{
                fontSize: 17,
                color: 'black',
                fontFamily: 'arial',
                paddingLeft: 17,
              }}>
              Archieve
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Trash');
          }}>
          <View style={{flexDirection: 'row', paddingTop: 27, paddingLeft: 22}}>
            <AntDesign name="delete" size={24} color={'gray'} />
            <Text
              style={{
                fontSize: 17,
                color: 'black',
                fontFamily: 'arial',
                paddingLeft: 17,
              }}>
              Trash
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Setting');
          }}>
          <View style={{flexDirection: 'row', paddingTop: 27, paddingLeft: 22}}>
            <Ionicons name="settings-outline" size={24} color={'gray'} />
            <Text
              style={{
                fontSize: 17,
                color: 'black',
                fontFamily: 'arial',
                paddingLeft: 17,
              }}>
              Setting
            </Text>
          </View>
        </TouchableOpacity>
      </DrawerContentScrollView>
    </View>
  );
};
export default CustomDrawer;
const styles = StyleSheet.create({
  body: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    paddingTop: 20,
    alignItems: 'center',
    backgroundColor: 'white',
    marginBottom: 20,
    borderRadius: 10,
    marginTop: 10,
  },
});
