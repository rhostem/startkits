// @flow
import styled from 'styled-components';
import { size } from '../../styles';

export const Main = styled.main`
  position: relative;
  max-width: ${size.appMaxWidth};
  padding-left: ${size.mainHoriPadding};
  padding-right: ${size.mainHoriPadding};
`;

export const MainWithHeader = Main.extend`
  padding-top: ${size.headerHeight};
`;
