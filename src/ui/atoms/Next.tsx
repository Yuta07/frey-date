import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../../themes/ThemeProvider';

type Props = {
  onMoveNextMonth: () => void;
};

export const Next = ({ onMoveNextMonth }: Props) => {
  const themes = useTheme();
  const { palette, theme } = themes;

  return (
    <NextButton onClick={onMoveNextMonth}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={20}
        viewBox="0 0 20 20"
        fill="none"
        stroke={palette[theme].PRIMARY}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 18l6-6-6-6" />
      </svg>
    </NextButton>
  );
};

const NextButton = styled.button`
  padding: 4px;
  border: none;
  background: none;
  cursor: pointer;

  &:hover {
    transition: 0.3s;
    opacity: 0.7;
  }

  &:focus {
    outline: none;
  }
`;
