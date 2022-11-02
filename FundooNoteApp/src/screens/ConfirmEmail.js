import {Text, View, StyleSheet, ScrollView} from 'react-native';
import React from 'react';

import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
const ConfirmEmail = () => {
  const {control, handleSubmit} = useForm();
  const navigation = useNavigation();

  const onConfirmPressed = data => {
    console.log(data);
    navigation.navigate('Home');
  };

  const onSignInPressed = () => {
    console.log('onSignInPressed');
    navigation.navigate('SignIn');
  };
  const onResendPressed = () => {
    console.log('onResendPressed');
  };

  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm your email</Text>
        <CustomInput
          name="code"
          control={control}
          iconName="code"
          placeholder="Enter your confirmation code"
          rules={{required: 'Confirmation code is required!'}}
        />

        <CustomButton text="Confirm" onPress={handleSubmit(onConfirmPressed)} />
        <CustomButton
          text="Resend code"
          onPress={onResendPressed}
          type="SECONDARY"
        />

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
    fontSize: 34,
    fontWeight: 'bold',
    color: '#8b4513',
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  Link: {
    color: '#FDB075',
  },
});

export default ConfirmEmail;
