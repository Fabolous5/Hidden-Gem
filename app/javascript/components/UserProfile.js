import React from "react"

const UserProfile = (props) => {


    return(
        <div>
            <h1>Hello, {props.user.first_name}!</h1>
                <div className="btn-toolbar d-flex justify-content-around" role="toolbar">
                    <div style={{width: "300px"}} className="d-flex justify-content-around card text-white bg-primary mb-3" >
                        <img style={{width: "200px"}} src="https://p0.pikrepo.com/preview/699/108/silhouette-of-person-in-white-background.jpg" alt="Card image" />
                        <div className="card-header">name: {props.user.first_name} {props.user.last_name}</div>
                            <div className="card-body">
                <h4 className="card-title">postal code: {props.user.postal_code}</h4>
                <p className="card-text">email: {props.user.email}</p>
                    </div>
                </div>
                {/*<div style={{width: "300px"}} className="d-flex justify-content-around card text-white bg-primary mb-3" >
                      <div className="card-header">
                      <h1 className="card-title" >
                      Edit Profile</h1>
                      </div>
                      <div className="card-body">
                        <a href="/edituserprofile" className="btn btn-secondary>click here">click here</a>
                 </div>
                 </div>*/}

        </div>


        </div>
    )
}

export default UserProfile
