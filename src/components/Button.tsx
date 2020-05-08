import * as React from 'react';
import styled from 'styled-components';

export type ButtonProps = {
  label: string;
};

// const style = {
//   backgroundColor: '#007bff',
//   color: '#fff',
//   border: '0',
//   borderRadius: '.25rem',
//   fontSize: '1rem',
// };

const Button = ({ label }) => {
  return (
    <>
      <ButtonCom>{label}</ButtonCom>
    </>
  );
};

const ButtonCom = styled.button`
  backgroundcolor: #007bff;
  color: #fff;
  border: 0;
  borderradius: 0.25rem;
  fontsize: 1rem;
`;

export default Button;
