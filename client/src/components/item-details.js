import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Row, Col} from 'react-flexbox-grid';
import styled from 'styled-components';
import { Card, Paper, CardText, CardTitle } from 'material-ui';

const Media = styled(Paper)`
  max-height: 400px;
  min-height: 400px;
  background-repeat: no-repeat;
  background-size: cover;
`;

export class ItemDetails extends Component {
  
  render () {
    const { item, loading } = this.props;

    return (
      <Card>
        <CardTitle title={item.title} subtitle={item.publisher} />
        <CardText>
          <Row>
            <Col lg={4} md={6} sm={12}>
              <Media style={{backgroundImage: `url(${item.image_url})`}} alt={item.title + ', image'} />
            </Col>
            <Col lg={4} md={6} sm={12}>
              <h3>Ingredients</h3>
              {(!loading && item.ingredients)
                ? <ol>
                  {item.ingredients.map((ingredient, index) => 
                    <li key={index}>{ingredient}</li>
                  )}
                </ol>
                : <div>Ingredients are being loaded...</div>
              }

            </Col>
            <Col lg={4} md={6} sm={12}>
              <h3>Info</h3>
              <ul>
                <li>Publisher: <a href={item.publisher_url}>{item.publisher}</a></li>
                <li>Social rank: {item.social_rank}</li>
                <li>ID of recipe: {item.recipe_id}</li>
                <li>Recipe source: <a href={item.source_url}>link</a></li>
              </ul>
            </Col>
          </Row>
        </CardText>
      </Card>
    )
  }
}

ItemDetails.propTypes = {
  item: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};