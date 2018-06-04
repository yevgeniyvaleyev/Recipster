import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { Paper, Toolbar, ToolbarGroup } from 'material-ui';
import { Row, Col } from 'react-flexbox-grid'
import Items from './containers/items';
// import NoMatch from './components/no-match';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <Row>
        <Col lg={12}>
          <Row>
            <Col lg={12}>
              <Paper className="header-container" zDepth={1}>
                <Toolbar>
                  <ToolbarGroup>
                    <h3>Lister App</h3>
                  </ToolbarGroup>
                </Toolbar>
              </Paper>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <Switch>
                <Route path='/' exact component={Items} />
                {/* <Route path='/not-found' component={NoMatch} /> */}
                {/* <Route path='/:itemId'  component={Item} /> */}
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
