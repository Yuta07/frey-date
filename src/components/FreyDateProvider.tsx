import { createContext } from 'react';
import moment from 'moment';

const initialMonth = moment().month();
const initialYear = moment().year();

export interface Props {
  currentYear: number;
  currentMonth: number;
  values: string[];
  selected: string[];
  onClickDate: (date: string) => void;
  onClickNextMonth: () => void;
  onClickPreviousMonth: () => void;
}

export const freyDateProp = () => {
  const freyDateValue: Props = {
    currentYear: initialYear,
    currentMonth: initialMonth + 1,
    values: [],
    selected: [],
    onClickDate: () => {},
    onClickNextMonth: () => {},
    onClickPreviousMonth: () => {},
  };
  return freyDateValue;
};

export const FreyDateContext = createContext<Props>(freyDateProp());
