import {Text, View, StyleSheet, ScrollView} from 'react-native';
import React from 'react';

import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';

const ForgotPassword = () => {
  const {control, handleSubmit} = useForm();
  const navigation = useNavigation();

  const onSendPressed = data => {
    console.log(data);
    navigation.navigate('NewPassword');
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
          placeholder="Username"
          name="userName"
          control={control}
          iconName="user"
          rules={{required: 'Username is required!'}}
        />

        <CustomButton text="Send" onPress={handleSubmit(onSendPressed)} />

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
    paddingTop: 15,
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

export default ForgotPassword;
