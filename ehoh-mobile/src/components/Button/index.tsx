import React from 'react';
import { Image, ImageProps } from 'react-native-elements';

export const ButtonIcon = (props: ImageProps) => (
  <Image style={{ width: 18, height: 18, marginRight: 18 }} {...props} />
);
