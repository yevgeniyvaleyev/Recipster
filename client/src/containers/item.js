import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItem, isLoading, hasError } from '../reducers';
import { onItemFetchRequested } from '../actions';
import { withRouter } from 'react-router';
import { ItemDetails } from '../components/item-details';
import NoMatch from '../components/no-match';
import ErrorMessage from '../components/error';

class Item extends Component {

  componentDidMount () {
    const { itemId } = this.props.match.params;
    
    this.props.fetchItem(itemId);
  }

  render() {
    const { item, loading, hasError, fetchItem } = this.props;
    const { itemId } = this.props.match.params;
    
    if (!item && !loading) {
      return <NoMatch what="Item" />
    }
    return item
      ? <div>
          {hasError && <ErrorMessage
                          onRetry={() => fetchItem(itemId)}
                          message="Some error happened during item fetch." />
          }
          <ItemDetails item={item} loading={loading} />
        </div>
      : <div></div>
  }
}

const mapStateToProps = (state, props) => ({
  item: getItem(state, props.match.params.itemId),
  loading: isLoading(state),
  hasError: hasError(state)
}); 

Item = withRouter(connect(
  mapStateToProps,
  { fetchItem: onItemFetchRequested }
)(Item));

export default Item;
