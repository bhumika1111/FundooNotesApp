import {Text, View, StyleSheet, ScrollView} from 'react-native';
import React from 'react';

import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
const NewPassword = () => {
  const {control, handleSubmit} = useForm();
  const navigation = useNavigation();
  const onSubmitPressed = data => {
    console.log(data);
    navigation.navigate('Home');
  };

  const onSignInPressed = () => {
    console.log('onSignInPressed');
    navigation.navigate('SignIn');
  };

  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>
        <CustomInput
          placeholder="Code"
          name="code"
          control={control}
          iconName="code"
          rules={{required: 'Code is required!'}}
        />
        <CustomInput
          placeholder="Enter your new password"
          name="password"
          control={control}
          iconName="eye"
          secureTextEntry
          rules={{
            required: 'Password is required!',
            minLength: {
              value: 8,
              message: 'Password should be at least 8 characters long',
            },
          }}
        />

        <CustomButton text="Submit" onPress={handleSubmit(onSubmitPressed)} />

        <CustomButton text="Back to sign in" onPress={onSignInPressed} />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#dc143c',
    margin: 10,
    marginBottom: 30,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  Link: {
    color: '#FDB075',
  },
});

export default NewPassword;
