import React from "react"

const EditPost = () => {
    return(
        <div>

            <h1>Update Your Gem</h1>
            <form>
                <div className="form-group">
                    <label className="col-form-label col-form-label-lg" for="inputLarge">Enter Title</label>
                    <input className="form-control form-control-lg" type="text" id="inputLarge"/>
                </div>

                <div ClassName="form-group">
                    <label for="exampleTextarea">Enter Description of your Gem</label>
                    <textarea ClassName="form-control" id="exampleTextarea" rows="3"></textarea>
                </div>

                <div className="form-group">
                    <label className="col-form-label" for="inputDefault"> Address</label>
                    <input type="text" className="form-control"  id="inputDefault"/>
                </div>

                <div className="form-group">
                    <label className="col-form-label" for="inputDefault">Start Time</label>
                    <input type="text" className="form-control" id="inputDefault"/>
                </div>

                <div className="form-group">
                    <label className="col-form-label" for="inputDefault">End Time</label>
                    <input type="text" className="form-control"  id="inputDefault"/>
                </div>

                <div className="form-group">
                    <label className="col-form-label" for="inputDefault">Date</label>
                    <input type="text" className="form-control" placeholder="MM/DD/YYYY"  id="inputDefault"/>
                </div>

                <div className="form-group">
                    <select className="custom-select">
                        <option selected="">Add Catagory</option>
                        <option value="Event">Event</option>
                        <option value="Shopping">Shopping</option>
                        <option value="Food">Restaurant / Food</option>
                        <option value="Activities">Activities / Locations</option>
                    </select>
                </div>

                <fieldset className="form-group">
                  <legend>Filters</legend>
                  <div className="form-check disabled">
                    <label className="form-check-label">
                      <input className="form-check-input" type="checkbox" value="21+ Event"/>
                      21+ Event
                    </label>
                  </div>
                  <div className="form-check disabled">
                    <label className="form-check-label">
                      <input className="form-check-input" type="checkbox" value="Family Friendly"/>
                      Family Friendly
                    </label>
                  </div>
                  <div className="form-check disabled">
                    <label className="form-check-label">
                      <input className="form-check-input" type="checkbox" value="Pet Friendly"/>
                      Pet Friendly
                    </label>
                  </div>

                  <div className="form-group">
                      <select className="custom-select">
                          <option selected="">Select One</option>
                          <option value="Free">Free</option>
                          <option value="$">$</option>
                          <option value="$$">$$</option>
                          <option value="$$$">$$$</option>
                          <option value="$$$$">$$$$</option>
                      </select>
                  </div>
                </fieldset>

                <button type="submit" class="btn btn-primary">Submit Your Gem!</button>

            </form>
         </div>
    )
}

export default EditPost
