import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  body: '#FFF',
  text: '#363537',
  toggleBorder: '#FFF',
  background: '#363537',
};

export const darkTheme = {
  body: '#150c30',
  text: '#FFF',
  toggleBorder: '#6B8096',
  background: '#150c30',
  anchor: '#FFF',
};

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }

  a {
    color: ${({ theme }) => theme.text};
  }
`;
