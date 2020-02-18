import React from "react"
import {Link} from 'react-router-dom'
import SingleGem from './SingleGem'

const UserProfile = (props) => {
    const taskSize = {"maxHeight": "500px", "overflowY": "scroll"}
    // console.log("id here", props.posts);
    // console.log(props.user.current_user_id);
    //
    const {userPost} = props.posts.map

    // const {userPost} = props.posts.filter(post => {
    //     post.user_id === 2})
    // console.log(userPost);
    return(
        <div>
            <h1>Hello, {props.user.first_name}!</h1>
            <h3>Look at all of your beautiful Gems!</h3>
            <hr />

            <div className="btn-toolbar d-flex justify-content-around" role="toolbar">
                {/*<div style={{width: "300px"}} className="d-flex justify-content-around card text-white bg-primary mb-3" >
                    <img style={{width: "200px"}} src="https://p0.pikrepo.com/preview/699/108/silhouette-of-person-in-white-background.jpg" alt="Card image" />
                    <div className="card-header">name: {props.user.first_name} {props.user.last_name}</div>
                    <div className="card-body">
                        <h4 className="card-title">postal code: {props.user.postal_code}</h4>
                        <p className="card-text">email: {props.user.email}</p>
                    </div>
                </div>*/}
            {/*<div style={{width: "300px"}} className="d-flex justify-content-around card text-white bg-primary mb-3">
                <div className="card-header">
                     <h1 className="card-title">Edit Profile</h1>
                </div>
                <div className="card-body">
                    <a href="/edituserprofile" className="btn btn-secondary>click here">click here</a>
                </div>
            </div> */}
            </div>
        {/* filter over post to find id === id*/}
        <div  className="btn-toolbar d-flex justify-content-around">
        {props.posts.map((post, index) =>{

            return (
                <div>
                {post.user_id == props.user.current_user_id &&
                <div  key={index} role="toolbar">
                    <div style={{width: "600px", height: "700px"}} className="card border-primary mb-3" >
                    { post.photo_url &&
                        <img src={post.photo_url} className="card-img-top"/>
                    }
                        <div className="card-header"><h1>{post.event_name}</h1></div>
                        <div style={taskSize}>
                        <div className="card-body">
                            <p className="card-text">{post.event_description}</p>
                            <h6 className="card-title">{post.address}</h6>
                            <h6 className="card-title">Start Time: {post.start_time}</h6>
                            <h6 className="card-title">End Time: {post.end_time}</h6>
                            <h6 className="card-title">Date: {post.date}</h6>
                            <Link to={`/EditPost/${post.id}`}> Edit Gem</Link>
                                {/*<Link to={`/Show/${post.id}`}>Click to see more details</Link>*/}
                                <hr />
                                <br />
                                <SingleGem />

                        </div>
                    </div>
                    </div>
                </div>
            }
            </div>
                )
            })
        }
        </div>


        </div>
    )
}

export default UserProfile
