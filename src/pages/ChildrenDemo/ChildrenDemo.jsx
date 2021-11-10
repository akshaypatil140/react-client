// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import Math from '../../Component/Math/Math';
import Theme from '../../theme';

export default class ChildrenDemo extends React.Component {
  Result() {
    let { result } = this.state;
    result = '';
    this.setState({ result });
  }

  render() {
    return (
      <>
        <ThemeProvider theme={Theme}>
          <Math first={8} second={4} operator="+" />
          <Math first={3} second={3} operator="-" />
          <Math first={9} second={20} operator="*" />
          <Math first={5} second={0} operator="/" />
          <Math first={2} second={4} operator="+">
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
      </>
    );
  }
}
