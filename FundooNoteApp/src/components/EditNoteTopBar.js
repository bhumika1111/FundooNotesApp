import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const EditNoteTopBar = ({
  onBackPress,
  pinData,
  archieveData,
  deleteData,
  onPinHandle,
  onDeleteHandle,
  onArchieveHandle,
}) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => onBackPress(pinData, deleteData)}>
        <Ionicons name="ios-arrow-back-outline" size={26} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => onPinHandle()} style={styles.pushPin}>
        <AntDesign name={pinData ? 'pushpin' : 'pushpino'} size={26} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.bellIcon} onPress={() => {}}>
        <Ionicons name="notifications-outline" size={26} />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => onArchieveHandle()}
        style={styles.bellIcon}>
        <Ionicons name="archive-outline" size={24} />
      </TouchableOpacity>
    </View>
  );
};

export default EditNoteTopBar;
const styles = StyleSheet.create({
  header: {
    height: 50,
    flexDirection: 'row',
    paddingLeft: 15,
    marginTop: 25,
  },
  bellIcon: {
    marginLeft: 11,
    padding: 6,
  },
  pushPin: {
    marginLeft: 170,
    padding: 6,
    transform: [{rotate: '45deg'}],
  },
});
