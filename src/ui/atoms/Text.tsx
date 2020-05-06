import React from 'react';
import styled, { css } from 'styled-components';
import { useTheme } from '../../hooks/useTheme';
import { Theme } from '../../themes/Theme';

type Props = {
  color?: string;
  text: string;
  type: 'strong' | 'p' | 'span';
};

export const Text = ({ color = 'PRIMARY', text, type }: Props) => {
  const themes = useTheme();
  let content: React.ReactNode;

  switch (type) {
    case 'strong':
      content = (
        <>
          <HeadingSecond color={color} themes={themes}>
            {text}
          </HeadingSecond>
        </>
      );
      break;
    case 'p':
      content = (
        <>
          <Paragraph color={color} themes={themes}>
            {text}
          </Paragraph>
        </>
      );
      break;
    case 'span':
      content = (
        <>
          <Span color={color} themes={themes}>
            {text}
          </Span>
        </>
      );
      break;
    default:
      break;
  }

  return <>{content}</>;
};

const HeadingSecond = styled.p<{ color: string; themes: Theme }>`
  ${({ color, themes }) => {
    const { fontSize, palette } = themes;
    return css`
      font-size: ${fontSize.LARGE}px;
      color: ${palette[color]};
      font-weight: 550;
    `;
  }}
`;

const Paragraph = styled.p<{ color: string; themes: Theme }>`
  ${({ color, themes }) => {
    const { fontSize, palette } = themes;
    return css`
      font-size: ${fontSize.LARGE}px;
      color: ${palette[color]};
    `;
  }}
`;

const Span = styled.span<{ color: string; themes: Theme }>`
  ${({ color, themes }) => {
    const { fontSize, palette } = themes;
    return css`
      font-size: ${fontSize.MEDIUM}px;
      color: ${palette[color]};
    `;
  }}
`;
