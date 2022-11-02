import {View, TextInput, StyleSheet, Text} from 'react-native';
import React from 'react';
import {Controller} from 'react-hook-form';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { COLOR } from '../utility/Theme';
const CustomInput = ({
  control,
  name,
  rules = {},
  placeholder,
  secureTextEntry,
  iconName,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
        <>
          <View
            style={[
              styles.container,
              {borderColor: error ? 'red' : '#e8e8e8'},
            ]}>
            <FontAwesome
              name={iconName}
              color= {COLOR.BACKGROUND_COLOR}
              size={14}
              style={{paddingTop: 13, margin: 5}}
            />
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              style={styles.input}
              secureTextEntry={secureTextEntry}
            />
          </View>
          {error && (
            <Text style={{color: 'red', alignSelf: 'stretch'}}>
              {error.message || 'Error'}
            </Text>
          )}
        </>
      )}
    />
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'row',
    paddingHorizontal: 5,
    marginVertical: 5,
    justifyContent: 'flex-start',
  },
  input: {},
});
export default CustomInput;
