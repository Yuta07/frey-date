import React from 'react';
import styled, { css } from 'styled-components';
import { useTheme } from '../../hooks/useTheme';
import { AppTypes, DayList } from '../../types';

interface Props extends AppTypes {
  color?: string;
  date: DayList;
}

export const DateText = ({ color = '#34495e', ...props }: Props) => {
  const { registerdDates, onClickDate, onMovePreviousMonth, onMoveNextMonth, date } = props;
  const themes = useTheme();

  const handleClickDate = (): void => {
    switch (date.type) {
      case 'current':
        onClickDate(date.date);
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

  let textColor: string = color;
  if (date.type === 'prev' || date.type === 'next') {
    textColor = themes.palette['GRAY'];
  } else if (date.date.match(/Saturday/)) {
    textColor = themes.palette['SATURDAY'];
  } else if (date.date.match(/Sunday/)) {
    textColor = themes.palette['SUNDAY'];
  }

  const selected = registerdDates.indexOf(date.date) !== -1 ? true : false;

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
