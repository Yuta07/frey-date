import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Text } from '../atoms/Text';

export const DayWeekList = () => {
  const DayOfWeek: string[] = ['月', '火', '水', '木', '金', '土', '日'];

  const renderDayofWeekList = DayOfWeek.map(dayweek => {
    return (
      <Fragment key={dayweek}>
        <DayofWeekList>
          <Text color="GRAY" text={dayweek} type="span" />
        </DayofWeekList>
      </Fragment>
    );
  });

  return <DayWeekUnordered>{renderDayofWeekList}</DayWeekUnordered>;
};

const DayWeekUnordered = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 15px 5px 5px;
  width: 100%;
  list-style: none;
  background-color: #fafcff;
`;

const DayofWeekList = styled.li`
  width: calc(100% / 7);
  text-align: center;
`;
