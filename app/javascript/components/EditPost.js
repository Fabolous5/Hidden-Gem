import React from "react"
import MainApp from './MainApp'
import { Button, Form, FormGroup, Label, Input, FormText, Jumbotron } from 'reactstrap';

class EditPost extends React.Component {
    constructor(props){
        super(props)
        console.log(props);
        this.state = {

        }
        this.getPost()
    }
    getPost = () =>{
        const { id } = this.props.match.params
        fetch(`/posts/${id}`)
        .then((response)=> {
            if(response.ok){
                return response.json()
            }
        })
        .then((post)=>{
            this.setState({post})
        })
    }

    handleEdit = (event) => {
        event.prventDefault()
        fetch('/posts/:id', {
            body: JSON.stringify(this.props.form),
            headers:{
                'Content-Type': 'application/json'
            },
            method: "PUT"
        })
    }

    render(){
        return(
            <React.Fragment>
                {this.state.post &&
                    <div>
                        <h1>Enter Your Gem's Information</h1>
                        <Form onSubmit={this.state.handleEdit}>

                            <FormGroup className="form-group">
                                <Label className="col-form-label col-form-label-lg" for="inputLarge" htmlFor="event name">Enter Title</Label>
                                <Input defaultValue={this.state.post.event_name} className="form-control form-control-lg" id="event_name" name="event_name"  onChange={this.state.handleChange}/>
                            </FormGroup>

                            <FormGroup className="form-group">
                                <Label for="exampleTextarea" htmlFor="event description">Enter a Description of your Gem</Label>
                                <textarea defaultValue={this.state.post.event_description} className="form-control" id="example_description" rows="3" name="event_description"  onChange={this.state.handleChange}></textarea>
                            </FormGroup>

                            <FormGroup className="form-group">
                                <Label className="col-form-label" for="inputDefault" htmlFor="address"> Address</Label>
                                <Input defaultValue={this.state.post.address} type="text" className="form-control"  id="address" name="address"  onChange={this.state.handleChange}></Input>
                            </FormGroup>

                            <FormGroup className="form-group">
                                <Label className="col-form-label" for="inputDefault" htmlFor="start time">Start Time</Label>
                                <Input defaultValue={this.state.post.start_time} type="text" className="form-control" id="start_time" name="start_time" onChange={this.state.handleChange}/>
                            </FormGroup>

                            <FormGroup className="form-group">
                                <Label className="col-form-label" for="inputDefault" htmlFor="end time">End Time</Label>
                                <Input defaultValue={this.state.post.end_time} type="text" className="form-control"  id="end_time" name="end_time" onChange={this.state.handleChange}/>
                            </FormGroup>

                            <FormGroup className="form-group">
                                <Label className="col-form-label" for="inputDefault" htmlFor="date">Date</Label>
                                <Input defaultValue={this.state.post.date} type="text" className="form-control" placeholder="MM/DD/YYYY"  id="date" name="date"  onChange={this.state.handleChange}/>
                            </FormGroup>

                            <button href="/" type="submit" className="btn btn-primary">Submit Your Updates!</button>


                        </Form>
                    </div>
                }
                {!this.state.post &&
                    <h2>loading</h2>
                }
            </React.Fragment>
        )
    }
}

export default EditPost
