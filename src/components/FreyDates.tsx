import React, { useState } from 'react';
import moment from 'moment';
import { Calendar } from '../ui/organisms/Calendar';
import { MainProps } from '../types';

const initialMonth = moment().month();
const initialYear = moment().year();

export const FreyDates = ({ registeredDates, selectedDates, handleDateClick }: MainProps) => {
  const [currentYear, setCurrentYear] = useState<number>(initialYear);
  const [currentMonth, setCurrentMonth] = useState<number>(initialMonth + 1);

  const onMovePreviousMonth = () => {
    const newMonth = currentMonth - 1 < 1 ? 12 : Number(currentMonth) - 1;
    const newYear = newMonth === 12 ? currentYear - 1 : currentYear;
    setCurrentMonth(newMonth);
    setCurrentYear(newYear);
  };

  const onMoveNextMonth = () => {
    const newMonth = currentMonth + 1 > 12 ? 1 : Number(currentMonth) + 1;
    const newYear = newMonth === 1 ? currentYear + 1 : currentYear;
    setCurrentMonth(newMonth);
    setCurrentYear(newYear);
  };

  return (
    <Calendar
      currentYear={currentYear}
      currentMonth={currentMonth}
      registeredDates={registeredDates}
      selectedDates={selectedDates}
      handleDateClick={handleDateClick}
      onMovePreviousMonth={onMovePreviousMonth}
      onMoveNextMonth={onMoveNextMonth}
    />
  );
};
