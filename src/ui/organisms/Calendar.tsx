import React from 'react';
import styled from 'styled-components';
import { CalendarBody } from './CalendarBody';
import { CalendarHeader } from '../molecules/CalendarHeader';
import { AppTypes } from '../../types';

export const Calendar = ({ ...props }: AppTypes) => {
  const {
    registerdDates,
    selectedDates,
    onClickDate,
    currentYear,
    currentMonth,
    onMovePreviousMonth,
    onMoveNextMonth,
  } = props;

  return (
    <Flamework>
      <CalendarHeader
        currentYear={currentYear}
        currentMonth={currentMonth}
        onMovePreviousMonth={onMovePreviousMonth}
        onMoveNextMonth={onMoveNextMonth}
      />
      <CalendarBody
        registerdDates={registerdDates}
        selectedDates={selectedDates}
        onClickDate={onClickDate}
        currentYear={currentYear}
        currentMonth={currentMonth}
        onMovePreviousMonth={onMovePreviousMonth}
        onMoveNextMonth={onMoveNextMonth}
      />
    </Flamework>
  );
};

const Flamework = styled.div`
  height: 100%;
  width: 280px;
`;
