import {Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import {COLOR} from '../utility/Theme';

const CustomButton = ({onPress, text, type = 'PRIMARY', bgColor, fgColor}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? {backgroundColor: bgColor} : {},
      ]}>
      <Text
        style={[
          styles.text,
          styles[`text_${type}`],
          fgColor ? {color: fgColor} : {},
        ]}>
        {text}
      </Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 15,
    marginVertical: 6,
    alignItems: 'center',
    borderRadius: 10,
  },
  container_PRIMARY: {
    backgroundColor: COLOR.PRIMARY_COLOR,
  },
  container_SECONDARY: {
    borderColor: '#3B71F3',
  },

  text: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 16,
  },
  text_SECONDARY: {
    color: '#3B71F3',
  },
  text_TERTIARY: {
    fontWeight: 'bold',
    color: 'gray',
  },
});
export default CustomButton;
