import React from "react"
import { Button, Form, FormGroup, Label, Input, FormText, Jumbotron } from 'reactstrap';
import MainApp from "./MainApp"
import Image from "./Image"
import { Link } from 'react-router-dom';


const NewPost = (props) =>{

    return(
        <React.Fragment>
        <div>
        </div>

            <h1>Enter Your Gem's Information</h1>
            <Form onSubmit={props.handleSubmit}>

                <FormGroup className="form-group">
                    <Label className="col-form-label col-form-label-lg" for="inputLarge" htmlFor="event name">Enter Title</Label>
                    <Input value={props.posts.event_name} className="form-control form-control-lg" id="event_name" name="event_name"  onChange={props.handleChange} />
                </FormGroup>


                <FormGroup className="form-group">
                    <Label for="exampleTextarea" htmlFor="event description">Enter a Description of your Gem</Label>
                    <textarea className="form-control" id="example_description" rows="3" name="event_description"  onChange={props.handleChange}></textarea>
                </FormGroup>

                <FormGroup className="form-group">
                    <Label className="col-form-label" for="inputDefault" htmlFor="address"> Address</Label>
                    <Input type="text" className="form-control"  id="address" name="address"  onChange={props.handleChange}/>
                </FormGroup>

                <FormGroup className="form-group">
                    <Label className="col-form-label" for="inputDefault" htmlFor="start time">Start Time</Label>
                    <Input type="text" className="form-control" id="start_time" name="start_time" onChange={props.handleChange}/>
                </FormGroup>

                <FormGroup className="form-group">
                    <Label className="col-form-label" for="inputDefault" htmlFor="end time">End Time</Label>
                    <Input type="text" className="form-control"  id="end_time" name="end_time" onChange={props.handleChange}/>
                </FormGroup>

                <FormGroup className="form-group">
                    <Label className="col-form-label" for="inputDefault" htmlFor="date">Date</Label>
                    <Input type="text" className="form-control" placeholder="MM/DD/YYYY"  id="date" name="date"  onChange={props.handleChange}/>
                </FormGroup>
                {/*<FormGroup className="form-group">
                    <select className="custom-select">
                        <option selected="">Add Catagory</option>
                        <option value="Event">Event</option>
                        <option value="Shopping">Shopping</option>
                        <option value="Food">Restaurant / Food</option>
                        <option value="Activities">Activities / Locations</option>
                    </select>
                </FormGroup>

                <fieldset className="form-group">
                  <legend>Filters</legend>
                  <FormGroup className="form-check disabled">
                    <label className="form-check-label">
                      <input className="form-check-input" type="checkbox" value="21+ Event"/>
                      21+ Event
                    </label>
                  </FormGroup>
                  <FormGroup className="form-check disabled">
                    <label className="form-check-label">
                      <input className="form-check-input" type="checkbox" value="Family Friendly"/>
                      Family Friendly
                    </label>
                  </FormGroup>
                  <FormGroup className="form-check disabled">
                    <label className="form-check-label">
                      <input className="form-check-input" type="checkbox" value="Pet Friendly"/>
                      Pet Friendly
                    </label>
                  </FormGroup>

                  <FormGroup className="form-group">
                      <select className="custom-select">
                          <option selected="">Select One</option>
                          <option value="Free">Free</option>
                          <option value="$">$</option>
                          <option value="$$">$$</option>
                          <option value="$$$">$$$</option>
                          <option value="$$$$">$$$$</option>
                      </select>
                  </FormGroup>

                </fieldset>
*/}


                <Link to="/">
                    <button onClick={props.handleSubmit} type="submit" className="btn btn-warning">Submit Your Gem!</button>

                </Link>


            </Form>

         </React.Fragment>
     )
}

export default NewPost
