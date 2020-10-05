# Frey-date

Simple calendar that allows you to select multiple dates.

## Installation

Install it from npm or yarn

```
npm install --save frey-date
```

or:

```
yarn add frey-date
```

## peerDependencies

```
npm install --save moment react react-dom styled-components
```

or:

```
yarn add moment react react-dom styled-components
```

| name              | version  |
| ----------------- | -------- |
| moment            | ^2.24.0  |
| react             | >=16.8.0 |
| react-dom         | >=16.8.0 |
| styled-components | ^5.2.0   |

## Usage

```tsx
// only calendar
import React from 'react';
import { FreyDates } from 'frey-date/dist';
import { theme } from 'frey-date/dist/themes/Theme';
import { ThemeProvider } from 'frey-date/dist/themes/ThemeProvider';

const App = () => {
  // please select theme ('light' or 'dark')
  const createTheme = theme('light');

  return (
    <ThemeProvider theme={createTheme}>
      <FreyDates registeredDates={[]} selectedDates={[]} handleDateClick={() => {}} />
    </ThemeProvider>
  );
};

// with select event
import React, { useState } from 'react';
import { FreyDates } from 'frey-date/dist';
import { theme } from 'frey-date/dist/themes/Theme';
import { ThemeProvider } from 'frey-date/dist/themes/ThemeProvider';

const App = () => {
  // please select theme ('light' or 'dark')
  const createTheme = theme('dark');

  const [registeredDates, setRegisteredDates] = useState(['']);
  const [selectedDates, setSelectedDates] = useState(['']);

  const handleDateClick = (date: string) => {};

  return (
    <ThemeProvider theme={createTheme}>
      <FreyDates registeredDates={registeredDates} selectedDates={selectedDates} handleDateClick={handleDateClick} />
    </ThemeProvider>
  );
};
```

## Option

| Prop name       | Type     | Default                | Description                                             |
| --------------- | -------- | ---------------------- | ------------------------------------------------------- |
| registerdDates  | string[] | []                     | Date you saved.                                         |
| selectedDates   | string[] | []                     | The date you have selected, including the one you saved |
| handleDateClick | func     | (date: string) => void | date click action                                       |

## Demo

You can see the demo in the storybook

```
yarn install
```

and:

```
yarn storybook
```

## NPM

https://www.npmjs.com/package/frey-date
