import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {COLOR} from '../utility/Theme';


const Notecard = props => {
  console.log(props);
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{props.title}</Text>
      </View>
      <View>
        <Text style={styles.note}>{props.note}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    borderRadius: 18,
    margin: 12,
    backgroundColor: 'white',
    borderWidth: 5,
    borderColor: COLOR.THIRD_COLOR,
    paddingTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 15,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 20,
    marginTop: 3,
    marginBottom: 9,
    paddingBottom: 7,
    fontWeight: 'bold',
  },
  note: {
    fontSize: 15,
    bottom: 10,
  },
});
export default Notecard;
