import { ButtonProps } from 'react-native-elements';

import colors from './colors';

const theme: ButtonProps = {
  containerStyle: {
    width: '100%'
  },
  buttonStyle: {
    borderColor: colors.yellowDark,
    backgroundColor: colors.yellowDark
  },
  titleStyle: {
    color: colors.black,
    fontFamily: 'OpenSans_400Regular'
  }
};

export default theme;
