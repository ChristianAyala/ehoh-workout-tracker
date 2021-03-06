import styled from 'styled-components/native';
import colors from 'theme/colors';

export const FullScreen = styled.View`
  width: 100%;
  align-self: center;
  background-color: ${colors.screenBackground};
  flex: 1;
`;

export const Screen = styled(FullScreen)`
  padding: 0 7.5%;
`;

export const CenteredScreen = styled(Screen)`
  align-items: center;
  justify-content: center;
`;
