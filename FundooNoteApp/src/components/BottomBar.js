import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLOR} from '../utility/Theme';

const BottomBar = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{marginLeft: 15, color: COLOR.DASHBOARDSCREEN_TOP_TEXT}}
        onPress={() => {}}>
        <Ionicons name="md-checkbox-outline" size={25} />
      </TouchableOpacity>

      <TouchableOpacity
        style={{marginLeft: 15, color: COLOR.DASHBOARDSCREEN_TOP_TEXT}}
        onPress={() => {}}>
        <Ionicons name="md-brush-outline" size={25} />
      </TouchableOpacity>

      <TouchableOpacity
        style={{marginLeft: 15, color: COLOR.DASHBOARDSCREEN_TOP_TEXT}}
        onPress={() => {}}>
        <Ionicons name="ios-mic-outline" size={26} />
      </TouchableOpacity>

      <TouchableOpacity
        style={{marginLeft: 20, color: COLOR.DASHBOARDSCREEN_TOP_TEXT}}
        onPress={() => {}}>
        <FontAwesome name="image" size={25} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.floatingButton} onPress={() => {}}>
        <Ionicons name="add" size={60} color={COLOR.PRIMARY_COLOR} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    padding: 10,
    paddingBottom: 110,
    backgroundColor: COLOR.THIRD_COLOR,
    borderWidth: 5,
    borderColor: 'white',
    marginTop: 590,
    marginBottom: 10,
    alignItems: 'center',
  },
  floatingButton: {
    backgroundColor: COLOR.THIRD_COLOR,
    position: 'absolute',
    bottom: 10,
    height: 70,
    width: 70,
    borderWidth: 5,
    right: 10,
    borderRadius: 20,
    marginBottom: 110,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
});

export default BottomBar;
