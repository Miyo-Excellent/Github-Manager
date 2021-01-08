import styled from 'styled-components';
import { padding } from '../styles/GlobalStyle';

export default styled.nav`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  background: white;
  transition: all linear 0.15s;
  border-radius: ${padding * 2}px;

  @media (min-width: 830px) {
    //padding: ${padding}px 0;
  }

  @media (max-width: 600px) {
  }
`;
