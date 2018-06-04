import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListItem, Avatar } from 'material-ui';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const ListNav = styled(NavLink)`
  text-decoration: none
`
export class ItemDetailsShort extends Component {

  render () {
    const { item } = this.props;

    return (
      <ListNav to={`/item/${item.recipe_id}`}>
        <ListItem
          leftAvatar={<Avatar alt={item.title} src={item.image_url} />}
          primaryText={item.title}
          secondaryText={item.publisher}
        />
      </ListNav>
    )
  }
}

ItemDetailsShort.propTypes = {
  item: PropTypes.object.isRequired
};