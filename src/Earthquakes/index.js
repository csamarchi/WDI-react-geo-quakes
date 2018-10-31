import React, {Component} from 'react';

class Earthquakes extends Component {

  render() {
    const quakeList = this.props.earthquakes.map((earthquakes, i) => {
      return (
        <li key={i}>
        Earthquakes Container <br/>
        Title: {earthquakes.properties.title} <br/>
        coordinates: {earthquakes.geometry.coordinates} <br/>
        Time: {earthquakes.properties.time} <br/>
        </li>
      )
    });
    return(
      <div>
      <h1> Earthquakes </h1>
      {quakeList}
      </div>
    )
  }
}

export default Earthquakes;
