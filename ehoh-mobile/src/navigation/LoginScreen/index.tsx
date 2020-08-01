import GoogleLogo from 'assets/google.png';
import House from 'assets/house.png';
import ButtonIcon from 'components/ButtonIcon';
import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Image, Button } from 'react-native-elements';
import { useSelector } from 'react-redux';
import { actions as authActions, selectors as authSelectors } from 'store/auth';
import { useActions } from 'store/utils';

const LoginScreen: React.FC = () => {
  const [checkForExistingAuth, loginWithGoogle] = useActions([
    authActions.checkForExistingAuth,
    authActions.loginAsync
  ]);

  const isLoginPending = useSelector(authSelectors.selectPending);

  useEffect(() => {
    checkForExistingAuth();
  }, []);

  return (
    <View style={styles.container}>
      <Image source={House} style={{ width: 50, height: 50 }} resizeMode="center" />
      <Text h1>60/60{'\n'}Workouts</Text>
      <Button
        type="outline"
        title="Login with Google"
        icon={<ButtonIcon source={GoogleLogo} />}
        loading={isLoginPending}
        onPress={loginWithGoogle}
        style={{ width: 200 }}
      />
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
