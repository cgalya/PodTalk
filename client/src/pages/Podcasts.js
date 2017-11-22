import React, { Component } from "react";
import { Col, Row, Container } from "./../components/Grid";
import API from "./../utils/API";
import Main from "./../components/Main";
import { PodcastList, PodcastListItem } from "./../components/list";


class Podcasts extends Component {
  state = {
    title: "",
    description: "",
    image: "",
    episodes: []
  }

  handleInputChange = event => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    });
  }

  handlePodcastSave = (title) => {

  }

  handleFormSubmit = event => {
    this.setState({
      title: "",
      description: "",
      image: "",
      episodes: []
    });
    event.preventDefault();
    var replaced = this.state.title.split(' ').join('+');
    API.search(replaced).then(res => this.setState({
      title: res.data.title,
      description: res.data.description,
      image: res.data.image,
      episodes: res.data.items
    }))
    .catch(err => console.log(err));   
    
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-1"></Col>
          <Col size="md-10">          
            <Main 
              title={this.state.title}
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
            />
          </Col>
          <Col size="md-1"></Col>
        </Row>
        <Row>
          <Col size="md-1"></Col>
           <Col size="md-10">
            {!this.state.episodes.length ? (
              <li className="list-group-item">
                <h3 style={{ marginTop: "10px", marginBottom: "15px" }}><span><em>Enter search terms to begin...</em></span></h3>
              </li>
            ) : (
              <PodcastList 
              length={this.state.episodes.length}
              title={this.state.title}
              description={this.state.description}
              image={this.state.image}
              >
             {this.state.episodes.map(episode => {
                return (
                  <PodcastListItem
                    key={episode.title}
                    title={episode.title}
                    description={episode.description}
                    link={episode.link}
                    handlePodcastSave={this.handlePodcastSave}
                  />
                );
              })}
              </PodcastList>
            )}
          </Col>
          <Col size="md-1"></Col>
        </Row>
      </Container>
    );
  };
}

export default Podcasts;