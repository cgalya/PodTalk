import React, { Component } from 'react';
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import "./LogIn.css";

class SignUp extends Component {
  state = {
    username: "",
    password: ""
  };

  handleInputChange = event => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const email = encodeURIComponent(this.state.user.email);
    const password = encodeURIComponent(this.state.user.password);
    const formData = `email=${email}&password=${password}`;

    // create an AJAX request
    const xhr = new XMLHttpRequest();
    xhr.open('post', '/auth/login');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        // success

        // change the component-container state
        this.setState({
          errors: {}
        });

        console.log('The form is valid');
      } else {
        // failure

        // change the component state
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
          <h2>Log In:</h2>
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
            </div>

            <div>
              <label>Password: </label>
              <Input
                onChange={this.handleInputChange}
                value={this.state.password1}
                name="password1"
                type="text"
                className="form-control"
                id="password1"
                required=""
              />
            </div>

          </div>
          <Button
            value="Submit"
            label="Log In"
            onClick={this.handleFormSubmit}
          />
        </form>
      </div>
    );
  };
}

export default SignUp;