import React from 'react';
import styled from 'styled-components';
import { DateText } from '../atoms/DateText';
import { AppTypes, DayList } from '../../types';

interface Props extends AppTypes {
  dateList: DayList[];
}

export const CalendarList = ({ ...props }: Props) => {
  const {
    registerdDates,
    selectedDates,
    onClickDate,
    currentYear,
    currentMonth,
    onMovePreviousMonth,
    onMoveNextMonth,
    dateList,
  } = props;

  const renderCalendarList = dateList.map(list => {
    return (
      <List key={list.date}>
        <DateText
          registerdDates={registerdDates}
          selectedDates={selectedDates}
          onClickDate={onClickDate}
          currentYear={currentYear}
          currentMonth={currentMonth}
          onMovePreviousMonth={onMovePreviousMonth}
          onMoveNextMonth={onMoveNextMonth}
          date={list}
        />
      </List>
    );
  });

  return <CalendarUnordered>{renderCalendarList}</CalendarUnordered>;
};

const CalendarUnordered = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-top: 5px;
  width: 100%;
  list-style: none;
`;

const List = styled.li`
  width: calc(100% / 7);
  text-align: center;
`;
