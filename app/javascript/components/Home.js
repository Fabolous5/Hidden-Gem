import React from 'react'

import { NavItem, NavLink, Nav } from 'reactstrap'
import {Link} from 'react-router-dom';

const Home = (props) => {

    const taskSize = {"maxHeight": "500px", "overflowY": "scroll"}
    const image = {"background-image": "url('https://upload.wikimedia.org/wikipedia/commons/1/15/Sandiego_skyline_at_night.JPG')", "image": "no-repeat"}
    return(
        <div>
            {props.user.signed_in &&
                <div>
                <div  className="jumbotron" style={image}>
                    <h1 className="display-3 text text-white">Welcome to Hidden Gems, {props.user.first_name}!</h1>
                    <p className="lead text-white">Discover low-key events in the San Diego area.</p>
                    <hr className="my-4 "/>
                    <p className= "text-red" >For locals. By locals.</p>
                </div>

                <div  className="btn-toolbar d-flex justify-content-around">
                {props.posts && props.posts.map((post, index)=>{
                    return (
                        <div style={taskSize} key={index} role="toolbar">
                            <div style={{width: "300px", height: "200px"}} className="card border-primary mb-3" >
                            { post.photo_url &&
                            <img src={post.photo_url} className="card-img-top"/>
                        }
                                <div className="card-header"></div>
                                <div className="card-body">
                                    <h4 className="card-title">{post.event_name}</h4>
                                    <p className="card-text">{post.event_description}</p>
                                        <Link to={`/Show/${post.id}`}>Click to see more details</Link>
                                        <Link to={`/EditPost/${post.id}`}> Edit Gem</Link>

                                </div>
                            </div>
                        </div>
                        )
                    })}
                </div>
                </div>
            }
            {!props.user.signed_in &&
                <div>
                <div  className="jumbotron" style={image}>
                    <h1 className="display-3 text text-white">Welcome to Hidden Gems!</h1>
                    <p className="lead text-white">Discover low-key events in the San Diego area.</p>
                    <hr className="my-4 "/>
                    <p className= "text-red" >For locals. By locals.</p>
                    <p className="lead">
                    <a className="btn btn-warning btn-lg" href="/users/sign_up" role="button">Learn more</a>
                    </p>
                </div>



            <div  className="btn-toolbar d-flex justify-content-around">
            {props.posts && props.posts.map((post, index)=>{
                return (
                    <div style={taskSize} key={index} role="toolbar">
                        <div style={{width: "300px", height: "200px"}} className="card border-primary mb-3" >

                            <div className="card-header"></div>
                            <div className="card-body">
                                <h4 className="card-title">{post.event_name}</h4>
                                <p className="card-text">{post.event_description}</p>
                                    <Link to={`/posts/${post.id}`}>Click to see more details</Link>
                                    <br/>
                                    <Link to={`/EditPost/${post.id}`}> Edit Gem</Link>
                                    <br/>

                            </div>
                        </div>
                    </div>
                )
            })}
            </div>
            </div>
            }
        </div>
    )
}

export default Home
