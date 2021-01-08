import styled from 'styled-components';
import { padding } from '../styles/GlobalStyle';

export default styled.li`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 ${padding}px;
  padding: ${padding / 2}px;
  font-size: 1.5rem;
  transition: all linear 0.15s;
  cursor: pointer;
  font-weight: 500;
  border-radius: ${padding * 0.7}px;

  &::selection {
    background: none;
  }

  &:hover {
    background: rgba(253, 201, 132, 0.3);
  }

  &:active {
    transform: scale(0.9);
  }

  &:after {
    content: ${({ active = false }) => (!!active ? '' : 'none')};
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: rgba(253, 201, 132, 1);
  }

  a {
    text-decoration: none;
    color: rgba(0, 0, 0, 1);
  }

  @media (min-width: 830px) {
    margin: ${padding / 2}px 0;
  }

  @media (max-width: 600px) {
  }
`;
