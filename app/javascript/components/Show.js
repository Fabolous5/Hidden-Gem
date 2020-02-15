import React from "react"
import MainApp from './MainApp'
import ActiveStorageProvider from 'react-activestorage-provider'
import { Button, Form, FormGroup, Label, Input, FormText, Jumbotron } from 'reactstrap';
import {Link} from 'react-router-dom';
import SingleGem from './SingleGem'

const Show = (...props) => {

    // this.props.getPost()
    //
    // const { id } = props.match.params
    // console.log(id);
    // console.log(props.posts);
    console.log(props.name);
    // console.log("hello",props.posts);
        return(
        <React.Fragment>
            <div>
                <h1>Hello World</h1>
            </div>
            <SingleGem />
        </React.Fragment>
    )
}
export default Show
