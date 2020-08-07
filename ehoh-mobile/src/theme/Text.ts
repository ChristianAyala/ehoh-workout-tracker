import { TextProps } from 'react-native-elements';

import colors from './colors';

const theme: TextProps = {
  h1Style: {
    fontSize: 45,
    fontFamily: 'OpenSans_600SemiBold',
    textAlign: 'center',
    lineHeight: 50.0
  },
  style: {
    fontFamily: 'OpenSans_400Regular',
    color: colors.white
  }
};

export default theme;
