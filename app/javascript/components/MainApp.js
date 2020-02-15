
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
import Show from './Show'




class MainApp extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: "TEST",
            success: false,
            editable: false,
            form:{
                id: '',
                event_name: '',
                address: '',
                category: '',
                event_description: '',
                start_time: '',
                end_time:'',
                date: '',
                user_id: ''
            },
            posts: []
        }
        this.getPost()
    }


componentDidMount(){
    this.getPost()
}

//handleSubmit handles the submit of our new post. It is changing and updating the state of posts
handleSubmit = (event) => {
    fetch('/posts', {
        body: JSON.stringify(this.state.form),
        headers:{
            'Content-Type': 'application/json'
        },
        method: "POST"
    })
    .then((response) => {
        if(response.ok){
            return this.getPost()
        }
    })
}

//handleChange is being used for NewPost and EditPost to change the state of each input field as things are being typed
handleChange = (event) => {
    let {form} = this.state
    form[event.target.name]= event.target.value
    this.setState({form: form})
};

//getPost is our fetch request we are using for our Home page to show all Gems
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

//getPostId is our fetch request we are using for our SingleGem
getPostId = (id) => {
    fetch(`/posts/${id}`, {
        body: JSON.stringify(post),
        headers:{
            'Content-Type': 'application/json'
        },
        method: "GET"
    })
    .then((response)=> {
    if(response.ok){
        return response.json()
        }
    })
    .then ((posts)=> {
        this.setState({posts: posts})
        console.log(this.state.posts);
    })
}

//getThatPost is being used when we are fetching posts for editing our post. It pulls in that specific posts information which then updates the state of post per our edits
getThatPost = (post) =>{
    fetch(`/posts/${post.id}`,{
        body: JSON.stringify(post),
        headers:{
            'Content-Type': 'application/json'
        },
        method: "PUT"
    })
    .then((response)=> {
        if(response.ok){
            return response.json()
        }
        else{
        }
    })
    .then((post)=>{
        this.setState({post: post})
    })
}

//handleDelete is our fetch for deleting. It allows us to delete the Gem based on that param and redirects to Home and we call on getPost to display what Gems are left without needing to refresh the page
handleDelete = (post) => {
    fetch(`/posts/${post.id}`, {
        method: "DELETE"
    }).then((response) => {
        if(response.ok){
            return response.json
        }
        else{
        }
    }).then(() => {
            this.setState({post: post})
    }).then(()=>{
            return this.getPost()
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

    let {id, event_name, address, category, event_description, start_time, end_time, date} = this.state.form

    return (
        <Router>
          <React.Fragment>
            <Nav className="nav nav-tabs navbar navbar-expand-lg navbar-dark bg-dark">
            <NavItem className="active">
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
                 <NavItem className="active">
                   <Link className="navbar-brand btn btn-outline-secondary" href="/all">All Gems</Link>

                   <Link className="navbar-brand btn btn-outline-secondary" href={sign_in_route}>Sign In</Link>

                   <Link className="navbar-brand btn btn-outline-secondary"  href={sign_up}>Sign Up</Link>
               </NavItem>
                 </div>
               }

           </Nav>


               <Switch>

                   <Route exact path="/" render={(props) => <Home user={this.props} posts={this.state.posts} getInitialState={this.getInitialState} handleEdit={this.handleEdit}/> } />

                   <Route  exact path="/NewPost" render={(props) => <NewPost {...props} posts={this.state.posts} form={this.state.form}
                   setForm={this.setForm} handleSubmit={this.handleSubmit} handleChange={this.handleChange}/> } />

                   <Route exact path="/posts/:id" render={(props) => <SingleGem {...props} posts={this.state.posts} form={this.state.form} getPost={this.getThatPost} />}/>

                   <Route exact path="/UserProfile" render={(props) => <UserProfile user={this.props} /> } />

                   <Route exact path="/EditUserProfile" render={(props) => <EditUserProfile user={this.props} posts={this.state.posts} /> } />

                   <Route  exact path="/EditPost/:id" render={(props) => <EditPost {...props} posts={this.state.posts} form={this.state.form} getPost={this.getThatPost} handleChange={this.handleChange} handleDelete={this.handleDelete} handleEdit={this.handleEdit} /> } />

                   <Route exact path="/Show/:id" render={(props) => <Show {...props} posts={this.state.posts} form={this.state.form} getPost={this.getPostId} name={this.state.name}/>}/>


               </Switch>

             </React.Fragment>
         </Router>
       );
     }
}

export default MainApp
