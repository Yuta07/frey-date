## Frey-dates

Simple calendar that allows you to select multiple dates.

### Installation

Install it from npm or yarn

```
npm install --save frey-dates
```

or:

```
yarn add frey-dates
```

### Option

| Prop name       | Type                               | Default                | Description                                             |
| --------------- | ---------------------------------- | ---------------------- | ------------------------------------------------------- |
| registerdDates  | string[]                           | []                     | Date you saved.                                         |
| selectedDates   | string[]                           | []                     | The date you have selected, including the one you saved |
| handleDateClick | func                               | (date: string) => void | date click action                                       |
| saturdayColor?  | string                             | #54a0ff                | select saturday color by yourself                       |
| sundayColor?    | string                             | #ee5253                | select sunday color by yourself                         |
| theme?          | 'light' or 'dark' or 'transparent' | 'light'                | select calendar theme                                   |

### Demo

You can see the demo in the storybook

```
yarn install
```

and:

```
yarn storybook
```

### NPM

https://www.npmjs.com/package/frey-dates
