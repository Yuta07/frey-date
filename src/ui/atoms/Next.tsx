import React from 'react';
import styled from 'styled-components';

type Props = {
  changeNextMonth: () => void;
};

export const Next = ({ changeNextMonth }: Props) => {
  return (
    <NextButton onClick={changeNextMonth}>
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
