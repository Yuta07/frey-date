/// <reference types="react" />
import { AppProps, DayList } from '../../types';
declare type DateTextProps = Pick<AppProps, 'registeredDates' | 'handleDateClick' | 'onMovePreviousMonth' | 'onMoveNextMonth'>;
interface Props {
    color?: string;
    date: DayList;
}
export declare const DateText: ({ registeredDates, handleDateClick, onMovePreviousMonth, onMoveNextMonth, date, }: Props & DateTextProps) => JSX.Element;
export {};
