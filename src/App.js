import React, { Component } from 'react';
import Map from './Map';
import Earthquakes from './Earthquakes';

class App extends Component {
  constructor() {
    super();
    this.state = {
      map: '',
      earthquakes: ''
    }
  }
  // 
  // getEarthquakes = async () => {
  //   try {
  //     const earthquakes = await fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson');
  //     const earthquakeJson = await earthquake.json();
  //     return earthquakeJson
  //   } catch(err) {
  //     return err
  //   }
  // }

  render() {
    return (
      <div className="app">
        <div className="mapContainer">
          ...put Map Component here...
        </div>
        <div className="quakeContainer">
          <h1>Earthquakes from the past week: </h1>
          ...put Quakes Component here...
        </div>
      </div>
    );
  }
}

export default App;
