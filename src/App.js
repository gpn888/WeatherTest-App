import React, { Component } from 'react';
import './App.css';
import LocationList from './components/LocationList';
import {Grid,Row,Col} from 'react-flexbox-grid';

const cities = [
  'Lima,pe',
  'Trujillo,pe',
  'London,uk',
  'Moscow,ru',
  'Buenos Aires,ar',
  'Bogota,co',
  'Quito,ec,',
  'Madrid,es', 
];

class App extends Component {
  handleSelectedLocation = city => {
    console.log(`handle-selection-loc ${city} `);
  }
  render() {
    return (
      <Grid>
        <Row>
          <h1>Titulo</h1>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationList 
            cities={cities}
            onSelectedLocation={this.handleSelectedLocation} ></LocationList>
          </Col>
          <Col xs={12} md={6}>
            <div className="detail">
              
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;