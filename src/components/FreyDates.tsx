import React, { useState } from 'react';
import { Calendar } from '../ui/organisms/Calendar';
import { GlobalStyle } from '../styles/global';
import { FreyDateContext } from './FreyDateProvider';

type Props = {
  registerdDates?: string[];
  selectedDates?: string[];
  onClickDate?: (date: string) => void;
};

const FreyDateProvider = ({ registerdDates = [], selectedDates = [], onClickDate = () => {} }: Props) => {
  const { currentYear, currentMonth } = React.useContext(FreyDateContext);
  const [year, setYear] = useState(currentYear);
  const [month, setMonth] = useState(currentMonth);

  return (
    <>
      <GlobalStyle />
      <FreyDateContext.Provider
        value={{
          currentYear: year,
          currentMonth: month,
          values: registerdDates,
          selected: selectedDates,
          onClickDate: (date: string) => {
            onClickDate(date);
          },
          onClickNextMonth: () => {
            const newMonth = month + 1 > 12 ? 1 : Number(month) + 1;
            const newYear = newMonth === 1 ? year + 1 : year;
            setMonth(newMonth);
            setYear(newYear);
          },
          onClickPreviousMonth: () => {
            const newMonth = month - 1 < 1 ? 12 : Number(month) - 1;
            const newYear = newMonth === 12 ? year - 1 : year;
            setMonth(newMonth);
            setYear(newYear);
          },
        }}
      >
        <Calendar />
      </FreyDateContext.Provider>
    </>
  );
};

export default FreyDateProvider;
