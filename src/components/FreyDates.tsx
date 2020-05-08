import React, { Component } from 'react';
import moment from 'moment';
import { Calendar } from '../ui/organisms/Calendar';
import { GlobalStyle } from '../styles/global';
import { FreyProps } from '../types';

const initialMonth = moment().month();
const initialYear = moment().year();

export class FreyDates extends Component<FreyProps, { currentYear: number; currentMonth: number }> {
  constructor(props: FreyProps) {
    super(props);
    this.state = {
      currentYear: initialYear,
      currentMonth: initialMonth + 1,
    };
  }

  onMovePreviousMonth = () => {
    const newMonth = this.state.currentMonth - 1 < 1 ? 12 : Number(this.state.currentMonth) - 1;
    const newYear = newMonth === 12 ? this.state.currentYear - 1 : this.state.currentYear;
    this.setState({ currentMonth: newMonth });
    this.setState({ currentYear: newYear });
  };

  onMoveNextMonth = () => {
    const newMonth = this.state.currentMonth + 1 > 12 ? 1 : Number(this.state.currentMonth) + 1;
    const newYear = newMonth === 1 ? this.state.currentYear + 1 : this.state.currentYear;
    this.setState({ currentMonth: newMonth });
    this.setState({ currentYear: newYear });
  };

  render() {
    return (
      <>
        <GlobalStyle />
        <Calendar
          currentYear={this.state.currentYear}
          currentMonth={this.state.currentMonth}
          registerdDates={this.props.registerdDates}
          selectedDates={this.props.selectedDates}
          onClickDate={this.props.onClickDate}
          onMovePreviousMonth={this.onMovePreviousMonth}
          onMoveNextMonth={this.onMoveNextMonth}
        />
      </>
    );
  }
}
