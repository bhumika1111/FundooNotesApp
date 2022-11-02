import {Image, View, StyleSheet, ScrollView, Text} from 'react-native';
import React from 'react';
import Logo from '../assets/images/Logo.png';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import SocialSignInButton from '../components/SocialSignInButton';

import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import { WIDTH } from '../utility/Theme';

const SignIn = () => {
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  console.log(errors);
  const onSignInPressed = data => {
    console.log(data);
    navigation.navigate('Dashboard');
  };
  const onForgotPasswordPressed = () => {
    console.log('onForgotPasswordPressed');
    navigation.navigate('ForgotPassword');
  };

  const onSignUpPressed = () => {
    console.log('onSignUpPressed');
    navigation.navigate('SignUp');
  };
  return (
    <ScrollView>
      <View style={styles.root}>
        <Image source={Logo} style={styles.logo} resizeMode="contain" />
        <Text style={styles.text}>Fundoo Note</Text>

        <CustomInput
          name="userName"
          placeholder="UserName"
          control={control}
          rules={{required: 'Username is required!'}}
          iconName="user"
        />

        <CustomInput
          name="password"
          placeholder="Password"
          control={control}
          secureTextEntry
          iconName="lock"
          rules={{
            required: 'Password is required!',
            minLength: {
              value: 3,
              message: 'Password should be minimum 3 characters long!',
            },
          }}
        />

        <CustomButton text="Sign In" onPress={handleSubmit(onSignInPressed)} />
        <CustomButton
          text="Forgot Password?"
          onPress={onForgotPasswordPressed}
          type="SECONDARY"
        />

        <SocialSignInButton />
        <View>
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>
            Don't have an account
          </Text>
          <CustomButton
            text="      Create one"
            onPress={onSignUpPressed}
            type="SECONDARY"
          />
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
    justifyContent: 'center',
  },
  logo: {
    width: WIDTH.WIDTH,
    maxWidth: 300,
    height: 100,
    marginBottom: 30,
  },
  text: {
    color: '#dc143c',
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  error: {
    marginHorizontal: 22,
    fontSize: 14,
    color: 'red',
    marginTop: 5,
  },
});

export default SignIn;
