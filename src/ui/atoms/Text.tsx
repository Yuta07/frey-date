import React from 'react';
import styled, { css } from 'styled-components';

type Props = {
  color?: string;
  text: string;
  type: 'strong' | 'p' | 'span';
};

export const Text = ({ color = '#fefefe', text, type }: Props) => {
  let content: React.ReactNode;

  switch (type) {
    case 'strong':
      content = (
        <>
          <HeadingSecond color={color}>{text}</HeadingSecond>
        </>
      );
      break;
    case 'p':
      content = (
        <>
          <Paragraph color={color}>{text}</Paragraph>
        </>
      );
      break;
    case 'span':
      content = (
        <>
          <Span color={color}>{text}</Span>
        </>
      );
      break;
    default:
      break;
  }

  return <>{content}</>;
};

const HeadingSecond = styled.p<{ color: string }>`
  ${({ color }) => {
    return css`
      font-size: 16px;
      color: ${color};
      font-weight: 550;
    `;
  }}
`;

const Paragraph = styled.p<{ color: string }>`
  ${({ color }) => {
    return css`
      font-size: 16px;
      color: ${color};
    `;
  }}
`;

const Span = styled.span<{ color: string }>`
  ${({ color }) => {
    return css`
      font-size: 16px;
      color: ${color};
    `;
  }}
`;
