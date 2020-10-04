import React from 'react';
import styled, { css } from 'styled-components';

type Props = {
  color?: string;
  text: string;
  type: 'strong' | 'p' | 'span';
};

export const Text = ({ color = '#ffffff', text, type }: Props) => {
  let content: React.ReactNode;

  switch (type) {
    case 'strong':
      content = (
        <>
          <Strong color={color} className="frey-dates-strong-text">
            {text}
          </Strong>
        </>
      );
      break;
    case 'p':
      content = (
        <>
          <Paragraph color={color} className="frey-dates-paragraph-text">
            {text}
          </Paragraph>
        </>
      );
      break;
    case 'span':
      content = (
        <>
          <Span color={color} className="frey-dates-span-text">
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

const Strong = styled.strong<{ color: string }>`
  ${({ color }) => {
    return css`
      font-size: 16px;
      color: ${color};
    `;
  }}
`;

const Paragraph = styled.p<{ color: string }>`
  ${({ color }) => {
    return css`
      font-size: 14px;
      color: ${color};
    `;
  }}
`;

const Span = styled.span<{ color: string }>`
  ${({ color }) => {
    return css`
      font-size: 14px;
      color: ${color};
    `;
  }}
`;
