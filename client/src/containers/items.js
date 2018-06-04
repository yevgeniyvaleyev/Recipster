import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchItems } from '../actions';
import { getAllItems, areItemsLoading } from '../reducers';
import { ItemsList } from '../components/items-list';

class Items extends Component {

  componentDidMount () {
    this.props.fetchItems();
  }

  render() {
    const { 
      items, 
      areItemsLoading
    } = this.props;

    return <ItemsList items={items} />
  }
}

const mapStateToProps = (state, props) => ({
  items: getAllItems(state),
  areItemsLoading: areItemsLoading(state)
}); 

Items = withRouter(connect(
  mapStateToProps,
  { fetchItems }
)(Items));

export default Items;
