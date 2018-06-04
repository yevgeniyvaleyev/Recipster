import React from 'react';
import renderer from 'react-test-renderer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { ItemsList } from '../items-list';
import { BrowserRouter } from 'react-router-dom';

test('should render component', () => {
  const loading = false;
  const items = [{
    title: 'test title',
    image_url: 'test.png',
    publisher: 'test',
    recipe_id: 1
  }]

  const component = renderer.create(
    <MuiThemeProvider>
      <BrowserRouter>
        <ItemsList items={items} loading={loading} />
      </BrowserRouter>
    </MuiThemeProvider>,
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

