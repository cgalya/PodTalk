import React, { Component } from 'react';
import { Col, Row, Container } from "../../components/Grid/index";

class UserHomePage extends Component {
  state = {

  };

  handleInputChange = event => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
  };

  render() {
   
    return (
    	<Container fluid>
    	</Container>
    );
  };
}

export default UserHomePage;