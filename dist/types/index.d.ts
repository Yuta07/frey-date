export declare type MainProps = {
    registeredDates: string[];
    selectedDates: string[];
    handleDateClick: (date: string) => void;
};
export declare type CalendarProps = {
    currentYear: number;
    currentMonth: number;
    onMovePreviousMonth: () => void;
    onMoveNextMonth: () => void;
};
export declare type AppProps = MainProps & CalendarProps;
export declare type DayList = {
    date: string;
    type: string;
};
