/// <reference types="react" />
import { AppProps, DayList } from '../../types';
declare type CalendarListProps = Omit<AppProps, 'selectedDates' | 'currentYear' | 'currentMonth'>;
declare type Props = {
    dateList: DayList[];
};
export declare const CalendarList: ({ registeredDates, handleDateClick, onMovePreviousMonth, onMoveNextMonth, dateList, }: Props & CalendarListProps) => JSX.Element;
export {};
