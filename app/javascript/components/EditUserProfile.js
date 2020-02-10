import React from "react"

const EditUserProfile = (props) => {
    return(
        <div>

            <h1>Update Your Profile</h1>
            <Form>
                <div className="form-group">
                    <label className="col-form-label col-form-label-lg" htmlFor="inputLarge" >Enter First Name</label>
                    <textarea className="form-control" id="exampleTextarea" rows="3">{props.user.first_name}</textarea>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleTextarea">Enter Last Name</label>
                    <textarea className="form-control" id="exampleTextarea" rows="3">{props.user.last_name}</textarea>
                </div>

                <div className="form-group">
                    <label className="col-form-label" for="inputDefault"> Enter Postal Code</label>
                    <textarea className="form-control" id="exampleTextarea" rows="3">{props.user.postal_code}</textarea>
                </div>

                <div className="form-group">
                    <label className="col-form-label" for="inputDefault">Enter email</label>
                    <textarea className="form-control" id="exampleTextarea" rows="3">{props.user.email}</textarea>
                </div>

                <Button type="submit" class="btn btn-primary">Submit Your Update</Button>

            </Form>
         </div>
    )
}

export default EditUserProfile
