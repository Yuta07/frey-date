import moment from 'moment';

export const convertMonth = (month: number) => {
  return moment(month, 'M').format('MMMM');
};

export const getStartDate = (year: number, month: number) => {
  return moment([year, month - 1]).format('YYYY-MM-DD');
};

export const getLastDate = (year: number, month: number) => {
  return moment(getStartDate(year, month))
    .endOf('month')
    .format('YYYY-MM-DD');
};

export const getPreviousMonthDate = (date: string) => {
  return moment(date)
    .subtract(1, 'months')
    .endOf('month')
    .format('YYYY-MM-DD');
};

export const getNextMonthDate = (date: string) => {
  return moment(date)
    .add(1, 'months')
    .startOf('month')
    .format('YYYY-MM-DD');
};

export const getDateFromBefore = (year: number, month: number, day = 1) => {
  return moment([year, month - 1, day]).format('YYYY-MM-DD-dddd');
};

export const getDateFromOpposite = (year: number, month: number, day = 0) => {
  return moment([year, month - 1, 31 - day]).format('YYYY-MM-DD-dddd');
};

export const getDayofWeek = (date: string) => {
  return moment(date).day();
};
