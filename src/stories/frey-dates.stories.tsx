import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';
import styled from 'styled-components';
import { FreyDates } from '../components/FreyDates';

const FreyDatesStories = () => {
  const [registeredDates, setRegisteredDates] = useState([]);
  const [selectedDates, setSelectedDates] = useState([]);

  const handleDateClick = (date: string) => {
    if (registeredDates.indexOf(date) >= 0) {
      const newValues = registeredDates.filter((value) => value !== date);
      setRegisteredDates(newValues);
    } else {
      setRegisteredDates([...registeredDates, date]);
    }

    if (selectedDates.indexOf(date) !== -1) {
      const newSelectedValues = selectedDates.filter((value) => value !== date);
      setSelectedDates(newSelectedValues);
    } else {
      setSelectedDates([...selectedDates, date]);
    }
  };

  return (
    <Wrapper>
      <Container>
        <FreyDates registeredDates={[]} selectedDates={[]} handleDateClick={() => {}} />
      </Container>
      <Container>
        <FreyDates registeredDates={registeredDates} selectedDates={selectedDates} handleDateClick={handleDateClick} />
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

const Container = styled.div`
  margin: 50px 0;
`;
