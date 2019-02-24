import React from "react";

class AgentForm extends React.Component {
  render() {
    const agentForm = (
      <div>
        <div class="col-md-9">
          <div class="panel panel-default">
            <div class="panel-heading main-color-bg">
              <h3 class="panel-title">Create Agents</h3>
            </div>
            <div class="panel-body">
              <form>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputEmail4">Phone Number</label>
                    <input
                      type="email"
                      class="form-control"
                      id="inputEmail4"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="inputPassword4">Fullname</label>
                    <input
                      type="password"
                      class="form-control"
                      id="inputPassword4"
                      placeholder="Fullname"
                    />
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="agentEmail">Email</label>
                    <input
                      type="email"
                      class="form-control"
                      id="inputEmail4"
                      placeholder="Email"
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

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputEmail4">Age</label>
                    <input
                      type="email"
                      class="form-control"
                      id="inputEmail4"
                      placeholder="Age"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="inputPassword4">BVN</label>
                    <input
                      type="password"
                      class="form-control"
                      id="inputPassword4"
                      placeholder="BVN"
                    />
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputEmail4">NIMC</label>
                    <input
                      type="email"
                      class="form-control"
                      id="inputEmail4"
                      placeholder="NIMC"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="inputPassword4">Password</label>
                    <input
                      type="password"
                      class="form-control"
                      id="inputPassword4"
                      placeholder="Password"
                    />
                  </div>
                </div>

                <div class="form-group text-center">
                  <button type="submit" class="btn btn-primary">
                    Create Agent
                  </button>
                </div>
              </form>

              <br />
            </div>
          </div>
        </div>
      </div>
    );
    return <div>{agentForm}</div>;
  }
}

export default AgentForm;
