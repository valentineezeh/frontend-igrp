import React from "react";

class DriverForm extends React.Component {
  render() {
    const driverForm = (
      <div>
        <div className="col-md-9">
          <div className="panel panel-default">
            <div className="panel-heading main-color-bg">
              <h3 className="panel-title">Drivers</h3>
            </div>
            <div className="panel-body">
              <form>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label for="inputEmail4">Phone Number</label>
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail4"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label for="inputPassword4">Fullname</label>
                    <input
                      type="password"
                      className="form-control"
                      id="inputPassword4"
                      placeholder="Fullname"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label for="inputEmail4">Driver's License</label>
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail4"
                      placeholder="Driver's License"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="inputPassword4">Address</label>
                    <input
                      type="password"
                      class="form-control"
                      id="inputPassword4"
                      placeholder="Address"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label for="inputEmail4">Vehicle Type</label>
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail4"
                      placeholder="Vehicle Type"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label for="inputPassword4">Vehicle Number</label>
                    <input
                      type="password"
                      className="form-control"
                      id="inputPassword4"
                      placeholder="Vehicle Number"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label for="inputEmail4">Plate Number</label>
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail4"
                      placeholder="NIMC"
                    />
                  </div>
                </div>
                <div className="form-group text-center col-md-12">
                  <button type="submit" className="btn btn-primary">
                    Create Driver
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
    return <div>{driverForm}</div>;
  }
}

export default DriverForm;
