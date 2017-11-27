import React, { Component } from 'react';
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import ErrorText from "../../components/error-text/ErrorText"
import "./SignUp.css";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: {},
      username: "",
      email: "",
      password: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }


  handleInputChange = event => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    console.log("hello");
  };

  handleFormSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <form>
          <h2>Sign Up:</h2>
          <div> 
            <div>
              <label>Username: </label>
              <Input   
                onChange={this.handleInputChange} 
                value={this.state.username}
                name="username"
                type="text"
                className="form-control"
                id="username"
                required=""
              />
              <ErrorText error={this.state.errors.name} />
            </div>

            <div>
              <label>Email: </label>
              <Input 
                onChange={this.handleInputChange} 
                value={this.state.email}
                name="email"
                type="text"
                className="form-control"
                id="email"
                required=""
               />
              <ErrorText error={this.state.errors.email} />
            </div>

            <div>
              <label>Password: </label>
              <Input 
                onChange={this.handleInputChange} 
                value={this.state.password}
                name="password"
                type="text"
                className="form-control"
                id="password"
                required=""
              />
              <ErrorText error={this.state.errors.password} />
            </div>

          </div>
          <Button
            value="Submit"
            type="submit"
            label="Save"
            onSubmit={this.handleFormSubmit}
          />
        </form>
      </div>
    );
  };
}

export default SignUp;