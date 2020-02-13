import React from "react"
import MainApp from './MainApp'
import { Button, Form, FormGroup, Label, Input, FormText, Jumbotron } from 'reactstrap';
import {Link} from 'react-router-dom';

class EditPost extends React.Component {
    constructor(...props){
        super(...props)
        this.state = {
            form:{
                id: this.props.match.params.id,
                event_name: '',
                address: '',
                category: '',
                event_description: '',
                start_time: '',
                end_time:'',
                date: '',
                user_id:''
            },
        }
    }
    componentDidMount = () => {
        this.setForm()
    }

    componetWillRecieveProps = (nextProps) =>{
        const { id } = this.state.form
        if(id !== nextProps.id){
            this.setState({id: nextProps.id})
        }
    }

    setForm = () => {
        const { form } = this.state
        const { posts } = this.props
        const post = posts.find((a)=> a.id === parseInt(form.id))
        this.setState({form: post})
    }

    handleChange = (e) => {
        let {form} = this.state
        form[e.target.name] = e.target.value
        this.setState({form :form})
    }

    handleEdit = () => {
        this.props.getPost(this.state.form)
    }

    delete = () => {
        this.props.handleDelete(this.state.form)
    
    }


    render(){
        return(
            <React.Fragment>
                {this.state.form &&
                    <div>
                        <h1>Enter Your Gem's Information</h1>

                        <Form onSubmit={this.handleEdit}>

                            <FormGroup className="form-group">
                                <Label className="col-form-label col-form-label-lg" for="inputLarge" htmlFor="event name">Enter Title</Label>
                                <Input value={this.state.form.event_name} className="form-control form-control-lg" id="event_name" name="event_name"  onChange={this.handleChange}/>
                            </FormGroup>

                            <FormGroup className="form-group">
                                <Label for="exampleTextarea" htmlFor="event description">Enter a Description of your Gem</Label>
                                <textarea defaultValue={this.state.form.event_description} className="form-control" id="example_description" rows="3" name="event_description"  onChange={this.handleChange}></textarea>
                            </FormGroup>

                            <FormGroup className="form-group">
                                <Label className="col-form-label" for="inputDefault" htmlFor="address"> Address</Label>
                                <Input defaultValue={this.state.form.address} type="text" className="form-control"  id="address" name="address"  onChange={this.handleChange}></Input>
                            </FormGroup>

                            <FormGroup className="form-group">
                                <Label className="col-form-label" for="inputDefault" htmlFor="start time">Start Time</Label>
                                <Input defaultValue={this.state.form.start_time} type="text" className="form-control" id="start_time" name="start_time" onChange={this.handleChange}/>
                            </FormGroup>

                            <FormGroup className="form-group">
                                <Label className="col-form-label" for="inputDefault" htmlFor="end time">End Time</Label>
                                <Input defaultValue={this.state.form.end_time} type="text" className="form-control"  id="end_time" name="end_time" onChange={this.handleChange}/>
                            </FormGroup>

                            <FormGroup className="form-group">
                                <Label className="col-form-label" for="inputDefault" htmlFor="date">Date</Label>
                                <Input defaultValue={this.state.form.date} type="text" className="form-control" placeholder="MM/DD/YYYY"  id="date" name="date"  onChange={this.handleChange}/>
                            </FormGroup>
                            <Link to="/" >
                                <button type="submit" className="btn btn-primary" onClick={this.handleEdit}>Submit Your Updates!</button></Link>

                        </Form>
                        <Link to="/">
                            <button onClick={this.delete} className="btn btn-primary">Delete this Gem 😭</button>
                        </Link>
                    </div>
                }
                {!this.state.form &&
                    <h2>loading</h2>
                }
            </React.Fragment>
        )
    }
}

export default EditPost
