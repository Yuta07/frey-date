export type DayList = {
  date: string;
  type: string;
};

export interface FreyProps {
  registerdDates: string[];
  selectedDates: string[];
  onClickDate: (date: string) => void;
}

export interface AppTypes extends FreyProps {
  currentYear: number;
  currentMonth: number;
  onMovePreviousMonth: () => void;
  onMoveNextMonth: () => void;
}
