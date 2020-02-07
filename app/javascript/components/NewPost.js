import React from "react"
import { Button, Form, FormGroup, Label, Input, FormText, Jumbotron } from 'reactstrap';

class NewPost extends React.Component {
    constructor(props) {
        super(props)
}

    render(){
        let {eventName, address, category, eventDescription, startTime, endTime, date} = this.props.form
    return(
        <React.Fragment>

            <h1>Create New Gem</h1>
            <Form>
                <FormGroup className="form-group">
                    <Label className="col-form-label col-form-label-lg" for="inputLarge" htmlFor="event name">Enter Title</Label>
                    <Input className="form-control form-control-lg" type="text" id="eventName" name="eventName" value={eventName} onChange={this.handleChange}/>
                </FormGroup>

                <FormGroup ClassName="form-group">
                    <Label for="exampleTextarea" htmlFor="event Description">Enter Description of your Gem</Label>
                    <textarea ClassName="form-control" id="exampleTextarea" rows="3" name="eventDescription" value={eventDescription} onChange={this.handleChange}></textarea>
                </FormGroup>

                <FormGroup className="form-group">
                    <Label className="col-form-label" for="inputDefault" htmlFor="address"> Address</Label>
                    <Input type="text" className="form-control"  id="inputDefault" name="address" value={address} onChange={this.handleChange}/>
                </FormGroup>

                <FormGroup className="form-group">
                    <Label className="col-form-label" for="inputDefault" htmlFor="start time">Start Time</Label>
                    <Input type="text" className="form-control" id="inputDefault" name="startTime" value={startTime} onChange={this.handleChange}/>
                </FormGroup>

                <FormGroup className="form-group">
                    <Label className="col-form-label" for="inputDefault" htmlFor="end time">End Time</Label>
                    <Input type="text" className="form-control"  id="inputDefault" name="endTime" value={endTime} onChange={this.handleChange}/>
                </FormGroup>

                <FormGroup className="form-group">
                    <Label className="col-form-label" for="inputDefault" htmlFor="date">Date</Label>
                    <Input type="text" className="form-control" placeholder="MM/DD/YYYY"  id="inputDefault" name="date" value={date} onChange={this.handleChange}/>
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
                <button onClick={this.handleSubmit} type="submit" className="btn btn-primary">Submit Your Gem!</button>

            </Form>
         </React.Fragment>

     )
    }
}

export default NewPost
