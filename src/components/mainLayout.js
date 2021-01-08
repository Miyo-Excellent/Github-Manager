import styled from 'styled-components';
import { Container } from '@material-ui/core';
import { padding } from 'styles/GlobalStyle';

export default styled(Container)`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  grid-gap: ${padding}px;
  padding: ${padding}px;

  @media (min-width: 830px) {
    grid-template-columns: auto 1fr;
    grid-template-rows: 1fr;
  }

  @media (max-width: 600px) {
  }
`;
