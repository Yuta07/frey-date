import React from 'react';
import styled, { css } from 'styled-components';
import { useTheme } from '../../themes/ThemeProvider';
import { AppProps, DayList } from '../../types';

type DateTextProps = Pick<AppProps, 'registeredDates' | 'handleDateClick' | 'onMovePreviousMonth' | 'onMoveNextMonth'>;

interface Props {
  color?: string;
  date: DayList;
}

export const DateText = ({
  registeredDates,
  handleDateClick,
  onMovePreviousMonth,
  onMoveNextMonth,
  date,
}: Props & DateTextProps) => {
  const themes = useTheme();
  const { palette, saturdayColor, sundayColor, theme } = themes;

  const handleClickDate = (): void => {
    switch (date.type) {
      case 'current':
        handleDateClick(date.date);
        break;
      case 'prev':
        onMovePreviousMonth();
        break;
      case 'next':
        onMoveNextMonth();
        break;
      default:
        break;
    }
  };

  let textColor: string = palette[theme].PRIMARY;
  if (date.type === 'prev' || date.type === 'next') {
    textColor = '#95a5a6';
  } else if (date.date.match(/Saturday/)) {
    textColor = saturdayColor;
  } else if (date.date.match(/Sunday/)) {
    textColor = sundayColor;
  }

  const selected = registeredDates.indexOf(date.date) !== -1 ? true : false;

  return (
    <DateButton selected={selected} onClick={handleClickDate}>
      <Text color={textColor} selected={selected}>
        {Number(date.date.split('-')[2]).toString()}
      </Text>
    </DateButton>
  );
};

const DateButton = styled.button<{ selected: boolean }>`
  ${({ selected }) => {
    return css`
      width: 34px;
      padding: 0.5rem 0;
      border: none;
      border-radius: 50%;
      background: ${selected ? '#f39c12' : 'none'};
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

const Text = styled.span<{ color: string; selected: boolean }>`
  ${({ color, selected }) => {
    return css`
      font-size: 14px;
      color: ${selected ? '#fefefe' : color};
    `;
  }}
`;
