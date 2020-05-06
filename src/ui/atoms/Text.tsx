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
          <HeadingSecond themes={themes}>{text}</HeadingSecond>
        </>
      );
      break;
    case 'p':
      content = (
        <>
          <Paragraph themes={themes}>{text}</Paragraph>
        </>
      );
      break;
    case 'span':
      content = (
        <>
          <Span themes={themes}>{text}</Span>
        </>
      );
      break;
    default:
      break;
  }

  return <>{content}</>;
};

const HeadingSecond = styled.p<{ themes: Theme }>`
  ${({ themes }) => {
    const { fontSize, palette } = themes;
    return css`
      font-size: ${fontSize.LARGE}px;
      color: ${palette.PRIMARY};
      font-weight: 550;
    `;
  }}
`;

const Paragraph = styled.p<{ themes: Theme }>`
  ${({ themes }) => {
    const { fontSize, palette } = themes;
    return css`
      font-size: ${fontSize.LARGE}px;
      color: ${palette.PRIMARY};
    `;
  }}
`;

const Span = styled.span<{ themes: Theme }>`
  ${({ themes }) => {
    const { fontSize, palette } = themes;
    return css`
      font-size: ${fontSize.MEDIUM}px;
      color: ${palette.PRIMARY};
    `;
  }}
`;
