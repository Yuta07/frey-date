import { createGlobalStyle, css } from 'styled-components';
import { FONT_FAMILY, FONT_SIZE } from '../themes/Font';
import { MEDIA_QUERY } from '../themes/Media';

const bodyStyles = css`
  font-size: ${FONT_SIZE.LARGE}px;
  font-family: ${FONT_FAMILY};
  letter-spacing: 0.1em;

  @media ${MEDIA_QUERY.TABLET} {
    font-size: ${FONT_SIZE.MEDIUM}px;
  }

  @media ${MEDIA_QUERY.MOBILE} {
    font-size: ${FONT_SIZE.SMALL}px;
  }
`;

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    letter-spacing: 0.1em;
  }

  body {
    ${bodyStyles}
  }
`;
