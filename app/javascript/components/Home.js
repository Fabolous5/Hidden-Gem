import React from 'react'

import { NavItem, NavLink as Link, Nav } from 'reactstrap'

const Home = (props) => {


    return(
        <div>
        {props.user.signed_in &&
            <div  className="jumbotron">
                <h1 className="display-3">Welcome {props.user.first_name}!</h1>
                <p className="lead">words</p>
                <hr className="my-4"/>
                <p>words</p>

            </div>
        }
        {!props.user.signed_in &&
            <div  className="jumbotron">
                <h1 className="display-3">Welcome to Hidden Gems!</h1>
                <p className="lead">For locals by locals</p>
                <hr className="my-4"/>
                <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
                <p className="lead">
                <a className="btn btn-primary btn-lg" href="/users/sign_up" role="button">Learn more</a>
                </p>
            </div>
        }

            <div className="btn-toolbar d-flex justify-content-around">
        {props.posts && props.posts.map((post, index)=>{
            return (
            <div key={index} role="toolbar">
                <div style={{width: "300px", height: "200px"}} className="card border-primary mb-3" >
                {post.photo_url &&
                  <img src={post.photo_url} className="card-img-top"/>
                  }
                    <div className="card-header">{post.address}</div>
                    <div className="card-body">
                        <h4 className="card-title">{post.event_name}</h4>
                        <p className="card-text">{post.event_description}</p>
                            <a href={`/posts/${post.id}`}>Click to see more details</a>
                            <a  href={`/NewPost/${post.id}`}> Edit </a>
                            <a  href={`/EditPost/${post.id}`}> Edit BUT BETTER </a>
                    </div>
                </div>
            </div>
            )
        })}
        </div>
        </div>
    )
}

export default Home
