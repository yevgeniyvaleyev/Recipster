import React from 'react';
import renderer from 'react-test-renderer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { ItemDetails } from '../item-details';
import { BrowserRouter } from 'react-router-dom';
import { Grid } from 'react-flexbox-grid';

test('should render component while loading ingredients', () => {
  const loading = true;
  const item = {
    title: 'test title',
    image_url: 'test.png',
    publisher: 'test',
    recipe_id: 1
  }
  const component = renderer.create(
    <MuiThemeProvider>
      <BrowserRouter>
        <Grid>
          <ItemDetails item={item} loading={loading} />
        </Grid>
      </BrowserRouter>
    </MuiThemeProvider>,
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

test('should render component when loaded ingredients', () => {
  const loading = false;
  const item = {
    title: 'test title',
    image_url: 'test.png',
    ingredients: ['ingredient'],
    publisher: 'test',
    recipe_id: 1
  }
  const component = renderer.create(
    <MuiThemeProvider>
      <BrowserRouter>
        <Grid>
          <ItemDetails item={item} loading={loading} />
        </Grid>
      </BrowserRouter>
    </MuiThemeProvider>,
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

