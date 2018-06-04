import React from 'react';
import renderer from 'react-test-renderer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ErrorMessage from '../error';

test('should render component', () => {
  const subject = 'Something went wrong';
  const component = renderer.create(
    <MuiThemeProvider>
      <ErrorMessage message={subject} onRetry={() => {}} />
    </MuiThemeProvider>,
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

