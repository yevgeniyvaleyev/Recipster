import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardText, FlatButton } from 'material-ui';

const Error = ({message, onRetry}) => (
  <Card>
    <CardText>
      <span>{message}</span>
      <FlatButton onClick={onRetry}>Retry</FlatButton>
    </CardText>
  </Card>
);

Error.propTypes = {
  onRetry: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired
};

export default Error;