import React from 'react';
import styled, { css } from 'styled-components';
import { Next } from '../atoms/Next';
import { Previous } from '../atoms/Previous';
import { Text } from '../atoms/Text';
import { useTheme } from '../../hooks/useTheme';
import { Theme } from '../../themes/Theme';
import { FreyDateContext } from '../../components/FreyDateProvider';

export const CalendarHeader = () => {
  const { currentYear, currentMonth, onClickPreviousMonth, onClickNextMonth } = React.useContext(FreyDateContext);
  const themes = useTheme();

  return (
    <Header themes={themes}>
      <Previous changePreviousMonth={onClickPreviousMonth} />
      <Text color="SECONDARY" text={currentYear.toString() + '年 ' + currentMonth.toString() + '月'} type="strong" />
      <Next changeNextMonth={onClickNextMonth} />
    </Header>
  );
};

const Header = styled.div<{ themes: Theme }>`
  ${({ themes }) => {
    const { palette } = themes;

    return css`
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 10px 5px 5px;
      background-color: ${palette.MAIN};
      border-radius: 8px 8px 0 0;
    `;
  }}
`;
