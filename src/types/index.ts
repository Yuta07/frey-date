export type MainProps = {
  registeredDates: string[];
  selectedDates: string[];
  handleDateClick: (date: string) => void;
};

export type CalendarProps = {
  currentYear: number;
  currentMonth: number;
  onMovePreviousMonth: () => void;
  onMoveNextMonth: () => void;
};

export type AppProps = MainProps & CalendarProps;

export type DayList = {
  date: string;
  type: string;
};
