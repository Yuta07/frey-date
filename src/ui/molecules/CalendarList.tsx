import React from 'react';
import styled from 'styled-components';
import { DateText } from '../atoms/DateText';
import { AppProps, DayList } from '../../types';

type CalendarListProps = Omit<AppProps, 'selectedDates' | 'currentYear' | 'currentMonth'>;

type Props = {
  dateList: DayList[];
};

export const CalendarList = ({
  registeredDates,
  handleDateClick,
  onMovePreviousMonth,
  onMoveNextMonth,
  dateList,
}: Props & CalendarListProps) => {
  const renderCalendarList = dateList.map((list) => {
    return (
      <List key={list.date} className="frey-dates-list">
        <DateText
          registeredDates={registeredDates}
          handleDateClick={handleDateClick}
          onMovePreviousMonth={onMovePreviousMonth}
          onMoveNextMonth={onMoveNextMonth}
          date={list}
        />
      </List>
    );
  });

  return <CalendarUnordered className="frey-dates-day-list">{renderCalendarList}</CalendarUnordered>;
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
