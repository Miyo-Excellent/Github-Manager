import styled from 'styled-components';
import { padding } from '../styles/GlobalStyle';
import { Box } from '@material-ui/core';

export default styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: ${padding}px;

  @media (min-width: 830px) {
  }

  @media (max-width: 600px) {
  }
`;
