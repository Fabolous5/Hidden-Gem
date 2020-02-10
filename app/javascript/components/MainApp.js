import React from "react"
import PropTypes from "prop-types"
import { NavItem, NavLink as Link, Nav } from 'reactstrap'

import GemAll from './GemAll'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home'
import NewPost from './NewPost'
import EditPost from './EditPost'
import SingleGem from './SingleGem'
import UserProfile from './UserProfile'
import EditUserProfile from './EditUserProfile'


class MainApp extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            success: false,
            form:{
                id: '',
                event_name: '',
                address: '',
                category: '',
                event_description: '',
                start_time: '',
                end_time:'',
                date: ''
            },
            posts: false
        }
    }

componentDidMount = () => {
    this.getPost()
}


handleSubmit = (event) => {
    // console.log(this.state.form)
    // this.props.onSubmit(this.state.form)
    fetch('/posts', {
        body: JSON.stringify(this.state.form),
        headers:{
            'Content-Type': 'application/json'
        },
        method: "POST"
    }
)
    .then((response) => {
        if(response.ok){
            return this.getPost()



        }
        //
        // this.setState({success: true,
        //                 redirect: true})
    })

}


handleChange = (event) => {
    console.log(this.state.form);
    let {form} = this.state
    form[event.target.name]= event.target.value
    this.setState({form: form})
};

getPost = () => {
    fetch('/posts')

    .then((response)=> {
    if(response.ok){
        return response.json()
        }
    })
    .then ((posts)=> {
        this.setState({posts: posts})
    })
}

getOnePost = () => {
    fetch('/posts/:id')
    .then((response)=> {
    if(response.ok){
        return response.json()
        }
    })
    const { id } = this.state.match.params;
    const post = posts.find((post) => post.id === parseInt(id))
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

    let {id, event_name, address, category, event_description, start_time, end_time, date} = this.state.form

    return (
        <Router>
          <React.Fragment>
            <Nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <NavItem>
                <Link className="navbar-brand " href="/">Hidden Gems 💎</Link>
            </NavItem>



               {signed_in &&
                 <div>
                 <NavItem>

                 <Link className=" navbar-brand btn btn-outline-primary" href="/NewPost">Create New Gem</Link>

                 <Link className=" navbar-brand btn btn-outline-primary" href="/UserProfile">See Your Gems</Link>

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

                   <Route  exact path="/NewPost" render={(props) => <NewPost posts={this.state.posts} handleSubmit={this.handleSubmit} handleChange={this.handleChange}/> } />

                   <Route exact path="/posts/:id"
                        render={(props) =>
                            <SingleGem {...props} posts={this.state.posts} />}/>

                   <Route exact path="/UserProfile" render={(props) => <UserProfile user={this.props} /> } />

                   <Route exact path="/EditUserProfile" render={(props) => <EditUserProfile user={this.props} /> } />

               </Switch>

             </React.Fragment>
         </Router>
       );
     }
}

export default MainApp
