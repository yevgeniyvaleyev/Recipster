import React from 'react';
import renderer from 'react-test-renderer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { ItemDetailsShort } from '../item-details-short';
import { BrowserRouter } from 'react-router-dom';

test('should render component', () => {
  const loading = false;
  const item = {
    title: 'test title',
    image_url: 'test.png',
    publisher: 'test',
    recipe_id: 1
  }
  const component = renderer.create(
    <MuiThemeProvider>
      <BrowserRouter>
        <ItemDetailsShort item={item} />
      </BrowserRouter>
    </MuiThemeProvider>,
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

