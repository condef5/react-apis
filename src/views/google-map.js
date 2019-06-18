import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Map, Marker, GoogleApiWrapper, InfoWindow } from "google-maps-react";
class Container extends React.Component {
  constructor(props) {
    super(props);

    const { lat, lng } = this.props.initialCenter;
    this.state = {
      currentLocation: {
        lat: lat,
        lng: lng
      }
    };
  }
  componentDidMount() {
    if (this.props.centerAroundCurrentLocation) {
      if (navigator && navigator.geolocation) {
        const watchID = navigator.geolocation.watchPosition(pos => {
          const coords = pos.coords;
          console.log(coords);
          this.setState({
            currentLocation: {
              lat: coords.latitude,
              lng: coords.longitude
            }
          });
          this.loadMap();
        });
      }
    }
    this.loadMap();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      this.loadMap();
    }
  }

  loadMap() {
    if (this.props && this.props.google) {
      // google is available
      const { google } = this.props;
      const maps = google.maps;

      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);

      let { initialCenter, zoom } = this.props;
      const { lat, lng } = this.state.currentLocation;

      const center = new maps.LatLng(lat, lng);
      const mapConfig = Object.assign(
        {},
        {
          center: center,
          zoom: zoom
        }
      );
      this.map = new maps.Map(node, mapConfig);
    }
    // ...
  }

  render() {
    const style = {
      width: "100vw",
      height: "100vh"
    };
    return <div style={style} ref="map" />;
  }
}

Container.defaultProps = {
  zoom: 13,
  // San Francisco, by default
  initialCenter: {
    lat: 37.774929,
    lng: -122.419416
  },
  centerAroundCurrentLocation: true
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyDUGEuJkyJyI45iy3uslI6PUcRw2-CdZQg"
})(Container);
