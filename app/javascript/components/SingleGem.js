import React from "react"
import {Map, TileLayer, Marker, Popup} from 'react-leaflet'
import L from "leaflet"
import 'leaflet/dist/leaflet.css';
import MainApp from './MainApp'

L.Icon.Default.imagePath = "https://unpkg.com/leaflet@1.5.0/dist/images/"


class SingleGem extends React.Component{
    constructor(...props){
        super(...props)
        this.state = {
            zoom: 12,
            mapCenter: [32.715736, -117.161087],
        }
    }

    // componentDidMount(){
    //     this.setForm()
    // }
    //
    //
    // setForm = () => {
    //     const { form } = this.state
    //     const { posts } = this.props
    //     const post = posts.find((p)=> p.id === parseInt(form.id))
    //     this.setState({posts: posts})
    //     console.log(this.state.posts);
    // }

    //  componentDidMount() {
    //     // this.props.getPost().then(response => {
    //     //     console.log(this.props.posts);
    //     //
    //     // })
    //     this.props.getPost();
    //     console.log(this.props.getPost);
    //     console.log(this.props.posts);
    // }

    render() {
        // const posts = this.state
        // const postId = this.state.id
        // const post = posts.find((p)=> p.id == postId)
        // const { id } = this.props.match.params
        // console.log("here we are now again", id);
        //
        // const { post } = this.props.posts;
        // console.log("um", this.props.posts);
        // console.log("over here", this.state.form)
        // console.log("here we go", id.posts);
        // const practice = this.props.posts[0];
        // console.log("here we are now", this.props.posts[0]);
        // const practice = this.props.posts[0];
        // console.log("here we are now again", practice);


        const accessToken = 'pk.eyJ1IjoiamxvcGV6MDEwOCIsImEiOiJjazZjam9oN20wYzRwM21tbGdtcjVqM2hnIn0.Xrqyk3Y6h9sqaEssl3qwHw'

        const tileUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}'

        const attribution = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'

        const maxZoom = 19
        L.Icon.Default

    return (
        <React.Fragment>
                <div>

                    <Map
                        ref={m => { this.leafletMap = m }}
                        id="map"
                        center={this.state.mapCenter}
                        zoom={this.state.zoom}
                        maxZoom={maxZoom}
                        style={{width: '100%',height: '400px'}}>

                        <TileLayer
                          attribution={attribution}
                          url={tileUrl}
                          id='mapbox/streets-v11'
                          accessToken={accessToken}/>

                        <Marker position={this.state.mapCenter}>
                            <Popup>You HiddenGem is here!!!</Popup>
                        </Marker>

                     </Map>

                </div>
        </React.Fragment>
    )
  }
}

export default SingleGem
