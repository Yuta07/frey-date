import React from 'react';
import styled, { css } from 'styled-components';
import { Next } from '../atoms/Next';
import { Previous } from '../atoms/Previous';
import { Text } from '../atoms/Text';
import { useTheme } from '../../themes/ThemeProvider';
import { CalendarProps } from '../../types';

export const CalendarHeader = ({ currentYear, currentMonth, onMovePreviousMonth, onMoveNextMonth }: CalendarProps) => {
  const themes = useTheme();
  const { palette, theme } = themes;

  return (
    <Header color={palette[theme].PRIMARY} className="frey-dates-header">
      <Previous onMovePreviousMonth={onMovePreviousMonth} />
      <Text
        color={palette[theme].PRIMARY}
        text={currentYear.toString() + '年 ' + currentMonth.toString() + '月'}
        type="strong"
      />
      <Next onMoveNextMonth={onMoveNextMonth} />
    </Header>
  );
};

const Header = styled.header<{ color: string }>`
  ${({ color }) => {
    return css`
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 10px 5px 5px;
      color: ${color};
      border-radius: 8px 8px 0 0;
    `;
  }}
`;
