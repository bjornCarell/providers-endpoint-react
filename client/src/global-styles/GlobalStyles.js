import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  ::before,
  ::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }
  body {
    background: ${({ theme }) => theme.color.white};
    box-sizing: border-box;
    color: ${({ theme }) => theme.black};
    font-family: "Lota Grotesque", Avenir, Arial, sans-serif;
    font-size:  ${({ theme }) => theme.fontSize.medium};
    line-height: 1.2;
    overflow-x: hidden;
  }
`;
