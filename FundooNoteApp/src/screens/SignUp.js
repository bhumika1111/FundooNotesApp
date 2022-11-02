import {Text, View, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

import {useForm} from 'react-hook-form';
const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

const SignUp = () => {
  const {control, handleSubmit, watch} = useForm();
  const navigation = useNavigation();
  const pwd = watch('');
  const onRegisterPressed = () => {
    console.log('onRegisterPressed');
    navigation.navigate('ConfirmEmail');
  };

  const onSignInPressed = () => {
    console.log('onSignInPressed');
    navigation.navigate('SignIn');
  };
  const onTermsOfUsePressed = () => {
    console.log('onTermsOfUsePressed');
  };
  const onPrivacyPressed = () => {
    console.log('onPrivacyPressed');
  };
  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Create an account</Text>
        <CustomInput
          name="firstName"
          placeholder="FirstName"
          iconName="user"
          control={control}
          rules={{
            required: 'FirstName is Required!',
            minLength: {
              value: 3,
              message: 'FirstName should be at least 3 characters long',
            },
            maxLength: {
              value: 24,
              message: 'FirstName should be max 3 characters long',
            },
          }}
        />
        <CustomInput
          name="lastName"
          placeholder="LastName"
          control={control}
          iconName="user"
          rules={{
            required: 'LastName is Required!',
            minLength: {
              value: 3,
              message: 'LastName should be at least 3 characters long',
            },
            maxLength: {
              value: 24,
              message: 'LastName should be max 3 characters long',
            },
          }}
        />
        <CustomInput
          name="email"
          placeholder="Email"
          control={control}
          iconName="envelope-square"
          rules={{pattern: {value: emailRegex, message: 'Email is invalid!'}}}
        />
        <CustomInput
          name="password"
          placeholder="Password"
          control={control}
          iconName="eye"
          secureTextEntry
          rules={{
            required: 'Password is Required!',
            minLength: {
              value: 8,
              message: 'Password should be at least 8 characters long',
            },
          }}
        />

        <CustomInput
          name="passwordRepeat"
          placeholder="PasswordRepeat"
          control={control}
          iconName="eye-slash"
          secureTextEntry
          rules={{
            validation: value => value === pwd < 5 || 'Password do not match',
          }}
        />
        <CustomButton
          text="Register"
          onPress={handleSubmit(onRegisterPressed)}
        />

        <Text style={styles.text}>
          By registering, you confirm that you accept our
          <Text style={styles.Link} onPress={onTermsOfUsePressed}>
            {' '}
            Terms of Use{' '}
          </Text>
          and{' '}
          <Text style={styles.Link} onPress={onPrivacyPressed}>
            Privacy Policy
          </Text>
        </Text>

        <CustomButton
          text="Have an account? Sign in"
          onPress={onSignInPressed}
        />
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
    color: '#dc143c',
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  Link: {
    color: '#3B71F3',
    fontWeight: 'bold',
  },
});

export default SignUp;
