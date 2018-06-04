import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MenuItem, CardText, Card, LinearProgress } from 'material-ui';

export class ItemsList extends Component {

  render () {
    const { items } = this.props;
    
    if (items.length === 0) {
      return (
        <LinearProgress />
      )
    }
    
    return (
      <div>
        {items.map((item) => (
            <Card key={item.recipe_id}>
              <CardText>{item.title}</CardText>
            </Card>
        ))}
      </div>
    )
  }
}

ItemsList.propTypes = {
  items: PropTypes.array.isRequired
};