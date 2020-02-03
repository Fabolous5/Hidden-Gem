import React from "react"
import PropTypes from "prop-types"

class MainApp extends React.Component {
  render () {
    const {
      signed_in,
      sign_in_route,
      sign_out_route
    } = this.props

    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Features</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Pricing</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
                    <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>


    {signed_in &&
      <div>
        <a href={sign_out_route}>Sign Out</a>
      </div>
    }
    {!signed_in &&
      <div>
        <a href={sign_in_route}>Sign In</a>
      </div>
    }

    <div  className="jumbotron">
      <h1 className="display-3">Hello, world!</h1>
      <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      <hr className="my-4"/>
      <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
      <p className="lead">
      <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
      </p>
</div>
<div className="btn-toolbar " role="toolbar">
    <div style={{width: "300px"}} className="card border-primary mb-3" >
      <div className="card-header">Header</div>
      <div className="card-body">
        <h4 className="card-title">Primary card title</h4>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
    <div style={{width: "300px"}} className="card border-primary mb-3" >
      <div className="card-header">Header</div>
      <div className="card-body">
        <h4 className="card-title">Primary card title</h4>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
    <div style={{width: "300px"}} className="card border-primary mb-3" >
      <div className="card-header">Header</div>
      <div className="card-body">
        <h4 className="card-title">Primary card title</h4>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
</div>
</div>

      </React.Fragment>
    );
  }
}

export default MainApp
