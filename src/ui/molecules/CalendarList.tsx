import React from 'react';
import styled from 'styled-components';
import { DateText } from '../atoms/DateText';
import { DateTextProps, DayList } from '../../types';

interface Props extends DateTextProps {
  dateList: DayList[];
}

export const CalendarList = ({ ...props }: Props) => {
  const { registerdDates, onClickDate, onMovePreviousMonth, onMoveNextMonth, dateList } = props;

  const renderCalendarList = dateList.map(list => {
    return (
      <List key={list.date}>
        <DateText
          registerdDates={registerdDates}
          onClickDate={onClickDate}
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
