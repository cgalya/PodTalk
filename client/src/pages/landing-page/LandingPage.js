import React, { Component } from 'react';
import LandingPageIntro from './../../components/landing-page-intro/LandingPageIntro';

class LandingPage extends Component {
  state = {
    search: ""
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
      <div>
        <LandingPageIntro 
          handlePodcastSelection={this.props.handlePodcastSelection}
        />
      </div>
    );
  };
}

export default LandingPage;