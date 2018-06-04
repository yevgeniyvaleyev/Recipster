import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardText } from 'material-ui';

const NoMatch = ({what = 'Page', message}) => (
  <Card>
    <CardText>
      {!message 
       ? <h3>{what} doesn't exist :'(</h3>
       : <h3>{message}</h3>
      }
    </CardText>
  </Card>
);

NoMatch.propTypes = {
  what: PropTypes.string.isRequired,
  message: PropTypes.string
};

export default NoMatch;