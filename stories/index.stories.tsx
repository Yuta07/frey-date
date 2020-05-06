import { storiesOf } from '@storybook/react';
import * as React from 'react';
import styled from 'styled-components';
import FreyDates from '../src/components/FreyDates';

const FreyDatesStories = () => {
  const [registerdDates, setRegisterdDates] = React.useState([]);
  const [selectedDates, setSelectedDates] = React.useState([]);

  const onClickDate = (date: string) => {
    if (registerdDates.indexOf(date) >= 0) {
      const newValues = registerdDates.filter(value => value !== date);
      setRegisterdDates(newValues);
    } else {
      setRegisterdDates([...registerdDates, date]);
    }

    if (selectedDates.indexOf(date) !== -1) {
      const newSelectedValues = selectedDates.filter(value => value !== date);
      setSelectedDates(newSelectedValues);
    } else {
      setSelectedDates([...selectedDates, date]);
    }
  };

  return (
    <Wrapper>
      <Container>
        <FreyDates registerdDates={registerdDates} selectedDates={selectedDates} onClickDate={onClickDate} />
      </Container>
    </Wrapper>
  );
};

storiesOf('frey-dates', module).add('all', () => <FreyDatesStories />);

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  jusify-content: center;
  flex-direction: column;
  margin: 100px auto;
`;

const Container = styled.div``;
