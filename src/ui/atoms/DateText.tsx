import React from 'react';
import styled, { css } from 'styled-components';
import { FreyDateContext } from '../../components/FreyDateProvider';
import { useTheme } from '../../hooks/useTheme';
import { Theme } from '../../themes/Theme';
import { DayList } from '../../types';

type Props = {
  color?: string;
  date: DayList;
};

export const DateText = ({ color = 'PRIMARY', date }: Props) => {
  const themes = useTheme();
  const { values, onClickDate, onClickPreviousMonth, onClickNextMonth } = React.useContext(FreyDateContext);

  const handleClickDate = (): void => {
    switch (date.type) {
      case 'current':
        onClickDate(date.date);
        break;
      case 'prev':
        onClickPreviousMonth();
        break;
      case 'next':
        onClickNextMonth();
        break;
      default:
        break;
    }
  };

  let textColor: string = themes.palette[color];
  if (date.type === 'prev' || date.type === 'next') {
    textColor = themes.palette['GRAY'];
  } else if (date.date.match(/Saturday/)) {
    textColor = themes.palette['SATURDAY'];
  } else if (date.date.match(/Sunday/)) {
    textColor = themes.palette['SUNDAY'];
  }

  const selected = values.indexOf(date.date) !== -1 ? true : false;

  return (
    <DateButton selected={selected} themes={themes} onClick={handleClickDate}>
      <Text color={textColor} selected={selected} themes={themes}>
        {Number(date.date.split('-')[2]).toString()}
      </Text>
    </DateButton>
  );
};

const DateButton = styled.button<{ selected: boolean; themes: Theme }>`
  ${({ selected, themes }) => {
    const { palette } = themes;
    return css`
      width: 34px;
      padding: 0.5rem 0;
      border: none;
      border-radius: 50%;
      background: ${selected ? palette.MAIN : 'none'};
      cursor: pointer;

      &:focus {
        outline: none;
      }

      ${selected
        ? `&:hover {
        opacity: 0.8;
        transition: 0.3s;
      }`
        : `
        &:hover {
        background: #f1f3f4;
        transition: 0.3s;
        }`}
    `;
  }}
`;

const Text = styled.span<{ color: string; selected: boolean; themes: Theme }>`
  ${({ color, selected, themes }) => {
    const { palette, fontSize } = themes;
    return css`
      font-size: ${fontSize.MEDIUM}px;
      color: ${selected ? palette.SECONDARY : color};
    `;
  }}
`;
