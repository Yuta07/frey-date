import { createGlobalStyle } from 'styled-components';

const FONT_FAMILY =
  '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif';

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    letter-spacing: 0.1em;
  }

  body {
    font-size: 14px;
    font-family: ${FONT_FAMILY};
    letter-spacing: 0.5px;
  }
`;
