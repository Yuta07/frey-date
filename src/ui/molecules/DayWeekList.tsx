import React from 'react';
import styled from 'styled-components';
import { Text } from '../atoms/Text';
import { useTheme } from '../../themes/ThemeProvider';

export const DayWeekList = () => {
  const themes = useTheme();
  const { palette, theme } = themes;

  const DayOfWeek: string[] = ['月', '火', '水', '木', '金', '土', '日'];

  const renderDayofWeekList = DayOfWeek.map((dayweek) => {
    return (
      <DayofWeekList key={dayweek} className="frey-dates-dayweek-list">
        <Text color={palette[theme].GRAY} text={dayweek} type="span" />
      </DayofWeekList>
    );
  });

  return <DayWeekUnordered className="frey-dates-dayweek">{renderDayofWeekList}</DayWeekUnordered>;
};

const DayWeekUnordered = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 15px 5px 5px;
  width: 100%;
  list-style: none;
`;

const DayofWeekList = styled.li`
  width: calc(100% / 7);
  text-align: center;
`;
