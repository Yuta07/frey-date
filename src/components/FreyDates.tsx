import React, { useState } from 'react';
import moment from 'moment';
import { Calendar } from '../ui/organisms/Calendar';
import { GlobalStyle } from '../styles/global';
import { FreyProps } from '../types';

const initialMonth = moment().month();
const initialYear = moment().year();

const FreyDates = ({ registerdDates = [], selectedDates = [], onClickDate = () => {} }: FreyProps) => {
  const [currentYear, setCurrentYear] = useState(initialMonth);
  const [currentMonth, setcurrentMonth] = useState(initialYear);

  const onMovePreviousMonth = () => {
    const newMonth = currentMonth + 1 > 12 ? 1 : Number(currentMonth) + 1;
    const newYear = newMonth === 1 ? currentYear + 1 : currentYear;
    setcurrentMonth(newMonth);
    setCurrentYear(newYear);
  };

  const onMoveNextMonth = () => {
    const newMonth = currentMonth - 1 < 1 ? 12 : Number(currentMonth) - 1;
    const newYear = newMonth === 12 ? currentYear - 1 : currentYear;
    setcurrentMonth(newMonth);
    setCurrentYear(newYear);
  };

  return (
    <>
      <GlobalStyle />
      <Calendar
        currentYear={currentYear}
        currentMonth={currentMonth}
        registerdDates={registerdDates}
        selectedDates={selectedDates}
        onClickDate={onClickDate}
        onMovePreviousMonth={onMovePreviousMonth}
        onMoveNextMonth={onMoveNextMonth}
      />
    </>
  );
};

export default FreyDates;
