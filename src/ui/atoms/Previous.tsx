import React from 'react';
import styled from 'styled-components';

type Props = {
  onMovePreviousMonth: () => void;
};

export const Previous = ({ onMovePreviousMonth }: Props) => {
  return (
    <PreviousButton onClick={onMovePreviousMonth}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="#fefefe"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M15 18l-6-6 6-6" />
      </svg>
    </PreviousButton>
  );
};

const PreviousButton = styled.button`
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
