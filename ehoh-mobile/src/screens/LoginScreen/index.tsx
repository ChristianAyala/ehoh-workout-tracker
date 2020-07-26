import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { actions as authActions } from 'store/auth';
import { useActions } from 'store/utils';

const LoginScreen: React.FC = () => {
  const [loginWithGoogle] = useActions([authActions.loginAsync]);

  const onButtonPress = () => {
    loginWithGoogle();
  };

  return (
    <View style={styles.container}>
      <Text>Plz</Text>
      <TouchableOpacity onPress={onButtonPress}>
        <Text>LOGIN</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default LoginScreen;
