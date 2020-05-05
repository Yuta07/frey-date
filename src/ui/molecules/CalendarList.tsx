import React from 'react';
import styled from 'styled-components';
import { DateText } from '../atoms/DateText';
import { DayList } from '../../types';

type Props = {
  dateList: DayList[];
};

export const CalendarList = ({ dateList }: Props) => {
  const renderCalendarList = dateList.map(list => {
    return (
      <List key={list.date}>
        <DateText date={list} />
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
