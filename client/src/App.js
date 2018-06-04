import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { Paper, Toolbar, ToolbarGroup } from 'material-ui';
import { Row, Col } from 'react-flexbox-grid'
import Items from './containers/items';
import Item from './containers/item';
import LoadIndicator from './containers/load-indicator';
import { NavLink } from 'react-router-dom';
import NoMatch from './components/no-match';

import './App.css';

export default class App extends Component {
  render() {
    return (
      <Row>
        <Col xs={12}>
          <Row>
            <Col xs={12}>
              <Paper>
                <Toolbar>
                  <ToolbarGroup>
                    <NavLink to="/"><h3>Recipster</h3></NavLink>
                  </ToolbarGroup>
                </Toolbar>
              </Paper>
              <LoadIndicator />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Switch>
                <Route path='/' exact component={Items} />
                <Route path='/item/:itemId'  component={Item} />
                <Route path='/' component={NoMatch} />
              </Switch>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

App.propTypes = {
  params: PropTypes.object,
  children: PropTypes.object,
};
