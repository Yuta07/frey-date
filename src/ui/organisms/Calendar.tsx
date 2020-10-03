import React from 'react';
import styled from 'styled-components';
import { CalendarBody } from './CalendarBody';
import { CalendarHeader } from '../molecules/CalendarHeader';
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
  return (
    <Wrapper className="frey-dates-wrapper">
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

const Wrapper = styled.div`
  height: 100%;
  width: 280px;
`;
