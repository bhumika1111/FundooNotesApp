import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import { deleteNote } from '../services/FirebaseNoteService';
const EditNoteTopBar = ({onBackPress}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onBackPress}>
        <Ionicons name="ios-arrow-back-outline" size={26} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {}} style={styles.pushPin}>
        <MaterialIcons name="push-pin" size={26} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.bellIcon} onPress={() => {}}>
        {/* <BellPopup /> */}
        <Ionicons name="notifications-outline" size={26} />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Notes')}
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
  },
});
