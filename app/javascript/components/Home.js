import React from 'react'
import SingleGem from './SingleGem'

import { NavItem, NavLink, Nav } from 'reactstrap'
import {Link} from 'react-router-dom';

const Home = (props) => {
    const imageStyle = {"maxHeight": "400px", "maxWidth": "400px"}
    const taskSize = {"maxHeight": "500px", "overflowY": "scroll"}

    const image = {"backgroundImage": "url('https://upload.wikimedia.org/wikipedia/commons/1/15/Sandiego_skyline_at_night.JPG')", "image": "no-repeat" , "height": "600px"}

    return(
        <div>
            {props.user.signed_in &&
                <div>
                <div  className="jumbotron" style={image}>
                    <h1 className="display-3 text text-white">Welcome to Hidden Gems, {props.user.first_name}!</h1>
                    <p className="lead text-white">Discover low-key events in the San Diego area.</p>

                    <p className= "text-white" >For locals. By locals.</p>
                </div>

                <div  className="btn-toolbar d-flex justify-content-around">
                {props.posts && props.posts.map((post, index)=>{
                    return (
                        <div   role="toolbar">
                            <div style={{width: "600px", height: "600px"}} className="card border-primary mb-3" >

                                <div className="card-header">
                                    <h1>{post.event_name}</h1>
                                </div>
                                <div key={index}>
                                <div style={taskSize}>
                                <div className="card-body">
                                    <p className="card-text">{post.event_description}</p>
                                    <h6 className="card-title">{post.address}</h6>
                                    
                                        <h6 className="card-title">Start Time: {post.start_time}</h6>

                                    <h6 className="card-title">End Time: {post.end_time}</h6>
                                    <h6 className="card-title">Date: {post.date}</h6>

                                    {/*<Link to={`/EditPost/${post.id}`}> Edit Gem</Link>
                                        <Link to={`/Show/${post.id}`}>Click to see more details</Link>*/}
                                        <hr />

                                            <img style={{width: "560px", height: "400px"}} src={post.photo_url}/>

                                        <br />
                                        <hr />
                                        <br />
                                        <SingleGem />

                                </div>
                                </div>
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
                    <p className= "text-white" >For locals. By locals.</p>
                    <p className="lead">
                    <a className="btn btn-warning btn-lg" href="/users/sign_up" role="button">Sign up now!</a>
                    </p>
                </div>



                <div  className="btn-toolbar d-flex justify-content-around">
                {props.posts && props.posts.map((post, index)=>{
                    return (
                        <div   role="toolbar">
                            <div style={{width: "600px", height: "600px"}} className="card border-primary mb-3" >

                                <div className="card-header">
                                    <h1>{post.event_name}</h1>
                                </div>
                                <div key={index}>
                                <div style={taskSize}>
                                <div className="card-body">





                                        <SingleGem />

                                        <br />
                                        <a className="btn btn-warning btn-lg" href="/users/sign_in">Sign in to see more</a>

                                </div>
                                </div>
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
