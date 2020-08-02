import styled from 'styled-components/native';

interface SpacingProps {
  width?: number;
  height?: number;
}
export const Spacing = styled.View<SpacingProps>`
  width: ${(props) => props.width || 0}px;
  height: ${(props) => props.height || 0}px;
`;
