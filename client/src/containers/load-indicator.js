import React, { Component } from 'react';
import { connect } from 'react-redux';
import { areItemsLoading } from '../reducers';
import { LinearProgress } from 'material-ui';

class LoadIndicator extends Component {
  render() {
    return this.props.loading 
      ? <LinearProgress />
      : <div />
  }
}

const mapStateToProps = (state, props) => ({
  loading: areItemsLoading(state)
}); 

LoadIndicator = connect(
  mapStateToProps,
  null
)(LoadIndicator);

export default LoadIndicator;
