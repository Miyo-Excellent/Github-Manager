import styled from 'styled-components';

export default styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  list-style: none;

  @media (min-width: 830px) {
    flex-direction: column;
    justify-content: flex-start;
  }

  @media (max-width: 600px) {
  }
`;
