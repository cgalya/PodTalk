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

  onClick = event => {
    event.preventDefault();
    console.log("hello");
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state.username);
    // create a string for an HTTP body message
    const name = encodeURIComponent(this.state.username);
    const email = encodeURIComponent(this.state.email);
    const password = encodeURIComponent(this.state.password);
    const formData = `name=${name}&email=${email}&password=${password}`;

    // create an AJAX request
    const xhr = new XMLHttpRequest();
    xhr.open('post', '/auth/signup');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        // success

        // change the component-container state
        this.setState({
          errors: {}
        });
        console.log(this.state.errors);

        console.log('The form is valid');
      } else {
        // failure

        const errors = xhr.response.errors ? xhr.response.errors : {};
        errors.summary = xhr.response.message;

        this.setState({
          errors
        });
      }
    });
    xhr.send(formData);
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