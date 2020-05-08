import React from 'react';
import styled from 'styled-components';

const StyledMyComponent = styled.div<{ color?: string }>`
  color: ${p => p.color || 'pink'};
`;

type MyComponentProps = {
  text: string;
  color?: string;
};

const Base = ({ text, color }: MyComponentProps) => {
  return (
    <>
      <StyledMyComponent color={color}>{text}</StyledMyComponent>
    </>
  );
};

export default Base;
