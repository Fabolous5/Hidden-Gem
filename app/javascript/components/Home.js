import React from 'react'

const Home = (props) => {


    return(
        <div>
            <div  className="jumbotron">
                <h1 className="display-3">Welcome to Hidden Gems!</h1>
                <p className="lead">For locals by locals</p>
                <hr className="my-4"/>
                <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
                <p className="lead">
                <a className="btn btn-primary btn-lg" href="/users/sign_up" role="button">Learn more</a>
                </p>
            </div>

        {props.posts.map((post)=>{
            return (
            <div key={post.id} className="btn-toolbar d-flex justify-content-around" role="toolbar">
                <div style={{width: "300px"}} className="card border-primary mb-3" >
                    <div className="card-header">{post.address}</div>
                    <div className="card-body">
                        <h4 className="card-title">{post.event_name}</h4>
                        <p className="card-text">{post.event_description}</p>
                    </div>
                </div>
            </div>
        )
        })}

        </div>
    )
}

export default Home
