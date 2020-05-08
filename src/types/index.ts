export type DayList = {
  date: string;
  type: string;
};

export interface FreyProps {
  registerdDates: string[] | string;
  selectedDates: string[] | string;
  onClickDate: (date: string) => void;
}

export type DateTextProps = {
  registerdDates: string[] | string;
  onClickDate: (date: string) => void;
  onMovePreviousMonth: () => void;
  onMoveNextMonth: () => void;
};

export type HeaderProps = {
  currentYear: number;
  currentMonth: number;
  onMovePreviousMonth: () => void;
  onMoveNextMonth: () => void;
};

export interface AppTypes extends FreyProps {
  currentYear: number;
  currentMonth: number;
  onMovePreviousMonth: () => void;
  onMoveNextMonth: () => void;
}
