import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import { Math } from '../../Component';
import { theme } from '../../theme';

const ChildrenDemo = () => (
  <ThemeProvider theme={theme}>
    <Math first={7} second={4} operator="+" />
    <Math first={7} second={3} operator="-" />
    <Math first={7} second={20} operator="*" />
    <Math first={7} second={0} operator="/" />
    <Math first={7} second={4} operator="+">
      {
        (first, second, result) => (
          <p>
            Sum of
            {' '}
            {first}
            {' '}
            and
            {' '}
            {second}
            {' '}
            is equal to
            {' '}
            {result}
            {' '}
          </p>
        )
      }
    </Math>
    <Math first={3} second={4} operator="+">
      {
        (first, second, result) => (
          <p>
            When We add
            {' '}
            {first}
            {' '}
            with
            {' '}
            {second}
            {' '}
            than we will get
            {' '}
            {result}
            {' '}
            as result
          </p>
        )
      }
    </Math>
  </ThemeProvider>
);

export default ChildrenDemo;
