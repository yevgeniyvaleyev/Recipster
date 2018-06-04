import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { onItemsFetchRequested } from '../actions';
import { getAllItems, isLoading, hasError } from '../reducers';
import { ItemsList } from '../components/items-list';
import NoMatch from '../components/no-match';
import ErrorMessage from '../components/error';

class Items extends Component {

  componentDidMount () {
    this.props.fetchItems();
  }

  render() {
    const { items, loading, hasError, fetchItems } = this.props;

    if (!items.length && !loading) {
      return <NoMatch message="No items found" />
    }
    return (
      <div>
        {hasError && <ErrorMessage
                        onRetry={() => fetchItems()}
                        message="Some error happened during items fetch." />
        }
        <ItemsList items={items} loading={loading} />
      </div>
    );

  }
}

const mapStateToProps = (state, props) => ({
  items: getAllItems(state),
  loading: isLoading(state),
  hasError: hasError(state)
}); 

Items = withRouter(connect(
  mapStateToProps,
  { fetchItems: onItemsFetchRequested }
)(Items));

export default Items;
