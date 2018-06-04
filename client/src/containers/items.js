import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchItems } from '../actions';
import { getAllItems, isLoading } from '../reducers';
import { ItemsList } from '../components/items-list';

class Items extends Component {

  componentDidMount () {
    this.props.fetchItems();
  }

  render() {
    const { items, loading } = this.props;

    return (
      <ItemsList items={items} loading={loading} />
    );

  }
}

const mapStateToProps = (state, props) => ({
  items: getAllItems(state),
  loading: isLoading(state)
}); 

Items = withRouter(connect(
  mapStateToProps,
  { fetchItems }
)(Items));

export default Items;
