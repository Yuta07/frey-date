import React from 'react';
import styled, { css } from 'styled-components';
import { CalendarBody } from './CalendarBody';
import { CalendarHeader } from '../molecules/CalendarHeader';
import { Theme } from '../../themes/Theme';
import { useTheme } from '../../themes/ThemeProvider';
import { AppProps } from '../../types';

export const Calendar = ({
  registeredDates,
  selectedDates,
  handleDateClick,
  currentYear,
  currentMonth,
  onMovePreviousMonth,
  onMoveNextMonth,
}: AppProps) => {
  const themes = useTheme();

  return (
    <Wrapper themes={themes} className="frey-dates-wrapper">
      <CalendarHeader
        currentYear={currentYear}
        currentMonth={currentMonth}
        onMovePreviousMonth={onMovePreviousMonth}
        onMoveNextMonth={onMoveNextMonth}
      />
      <CalendarBody
        registeredDates={registeredDates}
        selectedDates={selectedDates}
        handleDateClick={handleDateClick}
        currentYear={currentYear}
        currentMonth={currentMonth}
        onMovePreviousMonth={onMovePreviousMonth}
        onMoveNextMonth={onMoveNextMonth}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div<{ themes: Theme }>`
  ${({ themes }) => {
    const { palette, theme } = themes;
    return css`
      height: 100%;
      width: 320px;
      padding: 10px;
      background: ${palette[theme].BACKGROUND};
      border-radius: 15px;
    `;
  }}
`;
