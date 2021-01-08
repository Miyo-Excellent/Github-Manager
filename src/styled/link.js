import styled from 'styled-components';
import {} from '../styles/GlobalStyle';
import { Link } from 'react-router-dom';

export default styled(Link)`
  text-decoration: none;
  color: rgba(75, 75, 75, 1);
  transition: all linear 0.13s;

  &:hover {
    color: dodgerblue;
  }

  @media (min-width: 830px) {
  }

  @media (max-width: 600px) {
  }
`;
