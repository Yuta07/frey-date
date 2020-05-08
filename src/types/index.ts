export type DayList = {
  date: string;
  type: string;
};

export interface FreyProps {
  registerdDates: string[];
  selectedDates: string[];
  onClickDate: (date: string) => void;
}

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
