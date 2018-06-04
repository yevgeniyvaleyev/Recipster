import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchItems } from '../actions';
import { getAllItems, isLoading } from '../reducers';
import { ItemsList } from '../components/items-list';
import NoMatch from '../components/no-match';

class Items extends Component {

  componentDidMount () {
    this.props.fetchItems();
  }

  render() {
    const { items, loading } = this.props;

    if (!items.length && !loading) {
      return <NoMatch message="No items found" />
    }
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
