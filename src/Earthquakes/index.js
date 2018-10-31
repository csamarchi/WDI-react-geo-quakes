import React, {Component} from 'react';

class Earthquakes extends Component {

  render() {
    const quakeList = this.props.earthquakes.map((earthquakes, i) => {
      return (
        <h5 key={i}>
        Title: {earthquakes.properties.title} <br/>
        Coordinates: {earthquakes.geometry.coordinates} <br/>
        Time: {earthquakes.properties.time} <br/>
        </h5>
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
