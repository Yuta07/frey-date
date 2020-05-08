import React from 'react';
import styled, { css } from 'styled-components';
import { Next } from '../atoms/Next';
import { Previous } from '../atoms/Previous';
import { Text } from '../atoms/Text';
import { HeaderProps } from '../../types';

export const CalendarHeader = ({ ...props }: HeaderProps) => {
  const { currentYear, currentMonth, onMovePreviousMonth, onMoveNextMonth } = props;

  return (
    <Header color="#f39c12">
      <Previous onMovePreviousMonth={onMovePreviousMonth} />
      <Text color="#fefefe" text={currentYear.toString() + '年 ' + currentMonth.toString() + '月'} type="strong" />
      <Next onMoveNextMonth={onMoveNextMonth} />
    </Header>
  );
};

const Header = styled.div<{ color: string }>`
  ${({ color }) => {
    return css`
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 10px 5px 5px;
      background-color: ${color};
      border-radius: 8px 8px 0 0;
    `;
  }}
`;
