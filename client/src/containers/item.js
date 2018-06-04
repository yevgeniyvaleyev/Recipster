import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItem } from '../reducers';
import { fetchItem } from '../actions';
import { withRouter } from 'react-router';
import { ItemDetails } from '../components/item-details';
import { LinearProgress } from 'material-ui';

class Item extends Component {

  componentDidMount () {
    const { itemId } = this.props.match.params;
    
    this.props.fetchItem(itemId);
  }

  render() {
    const { item } = this.props;
    
    return item ? (
      <ItemDetails item={item} />
    ) : (
      <em>Loading item...</em>
    )
  }
}

const mapStateToProps = (state, props) => ({
  item: getItem(state, props.match.params.itemId),
  // hasError: hasError(state, props.match.params.itemId)
}); 

Item = withRouter(connect(
  mapStateToProps,
  { fetchItem }
)(Item));

export default Item;
