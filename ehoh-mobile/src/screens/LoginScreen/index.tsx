import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { actions as authActions } from 'store/auth';
import { useActions } from 'store/utils';

const LoginScreen: React.FC = () => {
  const [checkForExistingAuth, loginWithGoogle] = useActions([
    authActions.checkForExistingAuth,
    authActions.loginAsync
  ]);

  useEffect(() => {
    checkForExistingAuth();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Plz</Text>
      <TouchableOpacity onPress={() => loginWithGoogle()}>
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
