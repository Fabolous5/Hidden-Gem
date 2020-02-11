import React from "react"
import {Map, TileLayer, Marker, Popup} from 'react-leaflet'
import L from "leaflet"
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
let DefaultIcon = L.icon({
            iconUrl: icon,
            shadowUrl: iconShadow
        });
        L.Marker.prototype.options.icon = DefaultIcon;





class SingleGem extends React.Component{
    constructor(...props){
        super(...props)
        this.state = {
            zoom: 12,
            mapCenter: [32.715736, -117.161087],
        }
    }

    render() {


        const accessToken = 'pk.eyJ1IjoiamxvcGV6MDEwOCIsImEiOiJjazZjam9oN20wYzRwM21tbGdtcjVqM2hnIn0.Xrqyk3Y6h9sqaEssl3qwHw'

        const tileUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}'

        const attribution = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'

        const maxZoom = 19


    return (

    <div>
        <div>


            <h1>Event Name: </h1>
                <h2>Date: </h2>
                <h2>Start Time: </h2>
                <h2>Address: </h2>
        </div>


      <Map
        ref={m => { this.leafletMap = m }}
        id="map"
        center={this.state.mapCenter}
        zoom={this.state.zoom}
        maxZoom={maxZoom}
        style={{width: '100%',height: '400px'}}

       >
        <TileLayer
          attribution={attribution}
          url={tileUrl}
          id='mapbox/streets-v11'
          accessToken={accessToken}
        />
      </Map>
      <h1>Description of the event: </h1>
        </div>

    )
  }


}

export default SingleGem
