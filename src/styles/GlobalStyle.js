import { createGlobalStyle } from 'styled-components';

export const minHeight = 800.0;
export const padding = 20.0;

export default createGlobalStyle`
  *,
  h1,
  h2,
  h3,
  h4,
  h5,
  span,
  p,
  strong,
  i,
  a {
    font-family: 'Poppins', sans-serif;
  }

  body, #root {
    height: 100%;
    min-height: ${minHeight}px;
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
`;
