import GoogleLogo from 'assets/google.png';
import House from 'assets/house.png';
import { ButtonIcon } from 'components/Button';
import { CenteredScreen } from 'components/Screen';
import { Spacing } from 'components/Spacing';
import React from 'react';
import { Text, Image, Button } from 'react-native-elements';
import { useSelector } from 'react-redux';
import { actions as authActions, selectors as authSelectors } from 'store/auth';
import { useActions } from 'store/utils';

const LoginScreen: React.FC = () => {
  const [loginWithGoogle] = useActions([authActions.loginAsync]);
  const isLoginPending = useSelector(authSelectors.selectPending);

  return (
    <CenteredScreen>
      <Image source={House} style={{ width: 60, height: 60 }} resizeMode="center" />
      <Text h1>60/60{'\n'}Workouts</Text>
      <Spacing height={50} />
      <Button
        type="outline"
        title="Login with Google"
        icon={<ButtonIcon source={GoogleLogo} />}
        loading={isLoginPending}
        onPress={loginWithGoogle}
      />
    </CenteredScreen>
  );
};

export default LoginScreen;
