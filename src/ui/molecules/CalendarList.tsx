import React from 'react';
import styled, { css } from 'styled-components';
import moment from 'moment';
import { DateText } from '../atoms/DateText';
import { Theme } from '../../themes/Theme';
import { useTheme } from '../../themes/ThemeProvider';
import { AppProps, DayList } from '../../types';

const currentDate = moment().format('YYYY-MM-DD-dddd');

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
  const themes = useTheme();

  const renderCalendarList = dateList.map((list) => {
    return (
      <List key={list.date} current={list.date === currentDate} themes={themes} className="frey-dates-list">
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

const List = styled.li<{ current: boolean; themes: Theme }>`
  ${({ current, themes }) => {
    const { palette, theme } = themes;

    return css`
      width: calc(100% / 7);
      text-align: center;
      position: relative;

      ${current &&
      `
        &:before {
          content: '';
          position: absolute;
          bottom: -3px;
          left: 6px;
          width: 28px;
          border-bottom: 2px solid ${palette[theme].GRAY};
        }
      `}
    `;
  }}
`;
