import React, { Fragment } from 'react';
import styled, { css } from 'styled-components';
import { CalendarList } from '../molecules/CalendarList';
import { DayWeekList } from '../molecules/DayWeekList';
import { Theme } from '../../themes/Theme';
import { useTheme } from '../../hooks/useTheme';
import { DayList } from '../../types';
import {
  getStartDate,
  getLastDate,
  getPreviousMonthDate,
  getNextMonthDate,
  getDayofWeek,
  getDateFromBefore,
  getDateFromOpposite,
} from '../../utils/ConvertDate';
import { FreyDateContext } from '../../components/FreyDateProvider';

type Props = {
  border?: boolean;
};

export const CalendarBody = ({ border }: Props) => {
  const themes = useTheme();
  const { currentYear, currentMonth } = React.useContext(FreyDateContext);

  const startDayofWeek = getDayofWeek(getStartDate(currentYear, currentMonth));
  const previousMonthDate = getPreviousMonthDate(getStartDate(currentYear, currentMonth));
  const nextMonthDate = getNextMonthDate(getLastDate(currentYear, currentMonth));

  const days: DayList[] = [];

  // push current month day
  for (let i = 1; i <= Number(getLastDate(currentYear, currentMonth).split('-')[2]); i++) {
    days.push({ date: getDateFromBefore(currentYear, currentMonth, i), type: 'current' });
  }

  // unshift previous month day
  if (startDayofWeek > 1) {
    const previousDate = previousMonthDate.split('-');
    for (let i = 0; i < startDayofWeek - 1; i++) {
      days.unshift({
        date: getDateFromOpposite(Number(previousDate[0]), Number(previousDate[1]), 31 - Number(previousDate[2]) + i),
        type: 'prev',
      });
    }
  } else if (startDayofWeek < 1) {
    const previousDate = previousMonthDate.split('-');
    for (let i = 0; i < 6; i++) {
      days.unshift({
        date: getDateFromOpposite(Number(previousDate[0]), Number(previousDate[1]), 31 - Number(previousDate[2]) + i),
        type: 'prev',
      });
    }
  }

  // push next month day
  for (let i = days.length, count = 1; i < 42; i++) {
    const nextDate = nextMonthDate.split('-');
    days.push({ date: getDateFromBefore(Number(nextDate[0]), Number(nextDate[1]), count), type: 'next' });
    count++;
  }

  // transform two-dimensional array
  const dateList: DayList[][] = [];
  for (let i = 1; i <= 6; i++) {
    const arr: DayList[] = [];
    for (let j = 7; 0 < j; j--) {
      arr.push(days[i * 7 - j]);
    }
    dateList.push(arr);
  }

  return (
    <>
      <DayWeekList />
      <CalenderBodyField border={border} themes={themes}>
        {dateList.map((list, index) => {
          return (
            <Fragment key={index}>
              <CalendarList dateList={list} />
            </Fragment>
          );
        })}
      </CalenderBodyField>
    </>
  );
};

const CalenderBodyField = styled.div<{ border: Props['border']; themes: Theme }>`
  ${({ border, themes }) => {
    const { palette } = themes;
    return css`
      padding: 0 5px 5px;
      background: #fafcff;
      border: 1px solid ${border ? palette.GRAY : 'transparent'};
      border-top: none;
      border-radius: 0 0 8px 8px;
    `;
  }}
`;
