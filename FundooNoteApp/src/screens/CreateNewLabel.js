import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLOR} from '../utility/Theme';

const CreateNewLabel = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="ios-arrow-back-outline" size={26} />
        </TouchableOpacity>
        <View>
          <Text style={styles.text}>Edit Labels</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    paddingLeft: 20,
    //alignItems: 'flex-start',
  },
  container: {
    paddingTop: 40,
    // flex: 1,
    // paddingLeft: 20,
    // backgroundColor:COLOR.THIRD_COLOR,
  },
  inputContainer: {marginLeft: 10, flexDirection: 'row'},
});

export default CreateNewLabel;
