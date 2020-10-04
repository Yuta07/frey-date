import React from 'react';
import styled, { css } from 'styled-components';
import { Next } from '../atoms/Next';
import { Previous } from '../atoms/Previous';
import { Text } from '../atoms/Text';
import { Theme } from '../../themes/Theme';
import { useTheme } from '../../themes/ThemeProvider';
import { CalendarProps } from '../../types';

export const CalendarHeader = ({ currentYear, currentMonth, onMovePreviousMonth, onMoveNextMonth }: CalendarProps) => {
  const themes = useTheme();
  const { palette, theme } = themes;

  return (
    <Header themes={themes} className="frey-dates-header">
      <DateContent className="frey-dates-header-date">
        <Text
          color={palette[theme].PRIMARY}
          text={currentYear.toString() + '年 ' + currentMonth.toString() + '月'}
          type="strong"
        />
      </DateContent>
      <ArrowContent className="frey-dates-header-arrow">
        <Previous onMovePreviousMonth={onMovePreviousMonth} />
        <Next onMoveNextMonth={onMoveNextMonth} />
      </ArrowContent>
    </Header>
  );
};

const Header = styled.header<{ themes: Theme }>`
  ${({ themes }) => {
    const { palette, theme } = themes;

    return css`
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 10px 5px;
      color: ${palette[theme].PRIMARY};
    `;
  }}
`;

const DateContent = styled.div`
  width: 180px;
  padding: 0 10px;
`;

const ArrowContent = styled.div`
  width: 100px;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
`;
