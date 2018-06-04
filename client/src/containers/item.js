import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItem, isLoading, hasError } from '../reducers';
import { onItemFetchRequested } from '../actions';
import { withRouter } from 'react-router';
import { ItemDetails } from '../components/item-details';
import NoMatch from '../components/no-match';

class Item extends Component {

  componentDidMount () {
    const { itemId } = this.props.match.params;
    
    this.props.fetchItem(itemId);
  }

  render() {
    const { item, loading } = this.props;
    
    if (!item && !loading) {
      return <NoMatch what="Item" />
    }
    return item 
      ? <ItemDetails item={item} loading={loading} />
      : <div></div>
  }
}

const mapStateToProps = (state, props) => ({
  item: getItem(state, props.match.params.itemId),
  loading: isLoading(state),
  hasError: hasError(state, props.match.params.itemId)
}); 

Item = withRouter(connect(
  mapStateToProps,
  { fetchItem: onItemFetchRequested }
)(Item));

export default Item;
