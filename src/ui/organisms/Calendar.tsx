import React from 'react';
import styled from 'styled-components';
import { CalendarBody } from './CalendarBody';
import { CalendarHeader } from '../molecules/CalendarHeader';

export const Calendar = () => {
  return (
    <Flamework>
      <CalendarHeader />
      <CalendarBody />
    </Flamework>
  );
};

const Flamework = styled.div`
  height: 100%;
  width: 280px;
`;
