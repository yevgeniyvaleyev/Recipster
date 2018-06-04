import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List } from 'material-ui';
import { ItemDetailsShort } from './item-details-short';

export class ItemsList extends Component {

  render () {
    const { items } = this.props;
        
    return (
      <List>
        {items.map((item) => (
          <ItemDetailsShort key={item.recipe_id} item={item} />
        ))}
      </List>
    )
  }
}

ItemsList.propTypes = {
  items: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};