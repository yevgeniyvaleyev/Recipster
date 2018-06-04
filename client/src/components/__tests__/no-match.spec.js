import React from 'react';
import renderer from 'react-test-renderer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NoMatch from '../no-match';

test('should render component', () => {
  const subject = 'Page';
  const component = renderer.create(
    <MuiThemeProvider>
      <NoMatch what={subject} />
    </MuiThemeProvider>,
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

