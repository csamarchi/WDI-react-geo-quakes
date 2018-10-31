import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

 class Mapcontainer extends Component {
	render(){
		return (
	     <div>
       <Map style={{width: '40%', height: '42.8%', position: 'relative'}} google={this.props.google} zoom={14} initialCenter={{lat: 30.2682, lng: -97.74295}}/>

       </div>
		)
	}
}

 export default GoogleApiWrapper({
 	apiKey: ('AIzaSyCLu1QS-X23anCAoClvybHgN7QLlTzbslU')
 })(Mapcontainer)
