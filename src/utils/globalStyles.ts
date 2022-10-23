import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    font-family: Urbanist, Arial, sans-serif;
    transition: all 0.50s linear;
    ${(props) => ({ ...props.theme.colorSchemes.white_d3 })}
  }
  `;
