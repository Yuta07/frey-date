import { storiesOf } from '@storybook/react';
import * as React from 'react';
import styled from 'styled-components';
import FreyDates from '../src/components/FreyDates';

storiesOf('frey-dates', module).add('all', () => (
  <Wrapper>
    <Container>
      <FreyDates />
    </Container>
  </Wrapper>
));

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
`;

const Container = styled.div`
  margin: 1rem 0;
`;
