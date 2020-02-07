import React from "react"
import PropTypes from "prop-types"
import { NavItem, NavLink as Link, Nav } from 'reactstrap'

import GemAll from './GemAll'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home'
import NewPost from './NewPost'
import EditPost from './EditPost'
import SingleGem from './SingleGem'
import UserProfile from './UserProfile'
import EditUserProfile from './EditUserProfile'


class MainApp extends React.Component {

    constructor(){
        super()
        this.state = {
            success: false,
            form:{
                eventName: '',
                address: '',
                category: '',
                eventDescription: '',
                startTime: '',
                endTime:'',
                date: ''
            },
            posts:[]
        }
        this.getPost()
    }

componentDidMount(){
    this.getPost()
}

handleSubmit = () => {
    // this.props.onSubmit(this.state.form)
    return fetch('/posts'), {
        body: JSON.stringify(this.state.form),
        header:{
            'Content-Type': 'application/json'
        },
        method: "POST"
    }
    .then((response) => {
        if(response.ok){
            return this.getPost()
        }
        // this.setState({success: true,
        //                 form: form})
    })
}


handleChange = (event) => {
    console.log(this.state.form);
    let {form} = this.state
    form[event.target.name]= event.target.value
    this.setState({form: form})
};

getPost = () => {
    return fetch('/posts')
    .then((response)=> {
    if(response.ok){
        return response.json()
        }
    })
    .then ((posts)=> {
        this.setState({posts: posts})
    })
}


  render () {
    const {
      signed_in,
      sign_in_route,
      sign_up,
      sign_out_route,
       first_name,
         last_name,
         postal_code,
         email
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

                 <Link className=" navbar-brand btn btn-outline-primary" href="/all">All Gems</Link>

                 <Link className=" navbar-brand btn btn-outline-primary" href="/NewPost">Create New Gem</Link>

                 <Link className=" navbar-brand btn btn-outline-primary" href="/EditPost">Edit Gem</Link>

                 <Link className=" navbar-brand btn btn-outline-primary" href="/UserProfile">User Profile</Link>

                   <Link className=" navbar-brand btn btn-outline-primary" href={sign_out_route}>Sign Out</Link>
                   </NavItem>

                 </div>

               }
               {!signed_in &&
                 <div>
                 <NavItem>
                   <Link className=" navbar-brand btn btn-outline-primary" href="/all">All Gems</Link>

                   <Link className=" navbar-brand btn btn-outline-primary" href={sign_in_route}>Sign In</Link>

                   <Link className="navbar-brand btn btn-outline-primary"  href={sign_up}>Sign Up</Link>
               </NavItem>
                 </div>
               }

           </Nav>



       <Switch>
           <Route path="/all" component={GemAll}/>
           <Route exact path="/" render={(props) => <Home posts={this.state.posts}/> } />
           <Route path="/NewPost" component={NewPost}/>
           <Route path="/EditPost" component={EditPost}/>
           <Route path="/SingleGem" component={SingleGem}/>
           <Route exact path="/UserProfile" render={(props) => <UserProfile user={this.props} /> } />

           <Route exact path="/EditUserProfile" render={(props) => <EditUserProfile user={this.props} /> } />


       </Switch>

         </React.Fragment>
         </Router>
       );
     }
}

export default MainApp
