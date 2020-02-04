import React from "react"
import PropTypes from "prop-types"
import { NavItem, NavLink as Link, Nav } from 'reactstrap'
import GemAll from './GemAll'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home'

class MainApp extends React.Component {
  render () {
    const {
      signed_in,
      sign_in_route,
      sign_up,
      sign_out_route
    } = this.props

    return (
        <Router>
      <React.Fragment>
        <Nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <NavItem>
            <Link className="navbar-brand " href="/">Hidden Gem</Link>
        </NavItem>


            {signed_in &&
              <div>
              <NavItem>
                <Link href={sign_out_route}>Sign Out</Link>
                </NavItem>

              </div>

            }
            {!signed_in &&
              <div>
              <NavItem>
                <Link className=" navbar-brand btn btn-outline-primary" href={sign_in_route}>Sign In</Link>

                <Link className=" navbar-brand btn btn-outline-primary" href="/all">All Gems</Link>

                <Link className="navbar-brand btn btn-outline-primary"  href={sign_up}>Sign Up</Link>
            </NavItem>
              </div>
            }

        </Nav>

    <Switch>
        <Route path="/all" component={GemAll}/>
        <Route exact path="/" component={Home}/>

    </Switch>

      </React.Fragment>
      </Router>
    );
  }
}

export default MainApp
