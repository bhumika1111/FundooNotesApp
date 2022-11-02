import {} from 'react-native';
import React from 'react';
import CustomButton from './CustomButton';

const SocialSignInButton = () => {
  const onSignInGoogle = () => {
    console.log('Sign In With Google');
  };
  return (
    <>
      <CustomButton
        text="Sign In With Google"
        onPress={onSignInGoogle}
        bgColor="#FAE9EA"
        fgColor="#DD4D44"
      />
    </>
  );
};

export default SocialSignInButton;
